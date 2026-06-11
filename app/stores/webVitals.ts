import { defineStore } from 'pinia'

export interface WebVitalMetric {
  id: string
  name: 'LCP' | 'CLS' | 'INP' | 'FCP' | 'TTFB'
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
  delta: number
  href: string
  navigationType: string
  timestamp: string
}

export const useWebVitalsStore = defineStore('webVitals', () => {
  const metrics = ref<WebVitalMetric[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const thresholds: Record<string, { good: number; poor: number }> = {
    LCP: { good: 2500, poor: 4000 },
    CLS: { good: 0.1, poor: 0.25 },
    INP: { good: 200, poor: 500 },
    FCP: { good: 1800, poor: 3000 },
    TTFB: { good: 800, poor: 1800 },
  }

  const avgByType = computed(() => {
    const grouped: Record<string, { total: number; count: number; ratings: Record<string, number> }> = {}
    for (const m of metrics.value) {
      if (!grouped[m.name]) {
        grouped[m.name] = { total: 0, count: 0, ratings: { good: 0, 'needs-improvement': 0, poor: 0 } }
      }
      grouped[m.name].total += m.value
      grouped[m.name].count++
      grouped[m.name].ratings[m.rating]++
    }
    return Object.entries(grouped).map(([name, data]) => ({
      name,
      avgValue: Math.round(data.total / data.count),
      count: data.count,
      threshold: thresholds[name] || { good: 0, poor: 0 },
      goodPct: Math.round((data.ratings.good / data.count) * 100),
      poorPct: Math.round((data.ratings.poor / data.count) * 100),
    }))
  })

  const healthScore = computed(() => {
    if (avgByType.value.length === 0) return 100
    const scores = avgByType.value.map((m) => (m.goodPct > 90 ? 100 : m.goodPct > 70 ? 75 : m.goodPct > 50 ? 50 : 25))
    return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
  })

  async function fetchMetrics() {
    isLoading.value = true
    error.value = null
    try {
      const response = await $fetch<{ metrics: WebVitalMetric[] }>('/api/web-vitals/list')
      metrics.value = response.metrics
    } catch (err) {
      error.value = 'Impossible de charger les métriques'
    } finally {
      isLoading.value = false
    }
  }

  return { metrics, isLoading, error, avgByType, healthScore, thresholds, fetchMetrics }
})
