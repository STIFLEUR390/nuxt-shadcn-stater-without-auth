<!--
  Page admin : Web Vitals Dashboard
  Protégée par le middleware 'admin' + ability 'manage-dashboard'
-->
<script setup lang="ts">
import { RefreshCw } from '@lucide/vue'
import { useWebVitalsStore } from '~~/app/stores/webVitals'

definePageMeta({
  middleware: ['admin'],
})

const { t } = useI18n()
const { can } = useAuthorization()
const store = useWebVitalsStore()

// Vérification additionnelle côté client
if (!can('manage-dashboard')) {
  await navigateTo('/auth/login')
}

onMounted(() => {
  store.fetchMetrics()
})

function ratingVariant(rating: string) {
  return rating === 'good' ? 'default' : rating === 'needs-improvement' ? 'secondary' : 'destructive'
}
</script>

<template>
  <div class="space-y-6 p-6">
    <!-- En-tête -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold">{{ t('dashboard.webVitals') }}</h1>
        <p class="text-muted-foreground text-sm">
          Métriques de performance réelles des utilisateurs
        </p>
      </div>
      <UiButton variant="outline" :disabled="store.isLoading" @click="store.fetchMetrics()">
        <RefreshCw class="mr-2 size-4" :class="{ 'animate-spin': store.isLoading }" />
        {{ t('common.search') }}
      </UiButton>
    </div>

    <!-- Score de santé -->
    <UiCard>
      <UiCardHeader>
        <UiCardTitle>Score de santé</UiCardTitle>
        <UiCardDescription>
          Pourcentage de métriques dans le vert (Good)
        </UiCardDescription>
      </UiCardHeader>
      <UiCardContent>
        <div class="flex items-center gap-4">
          <div
            class="text-5xl font-bold"
            :class="
              store.healthScore >= 90
                ? 'text-green-500'
                : store.healthScore >= 70
                  ? 'text-yellow-500'
                  : 'text-red-500'
            "
          >
            {{ store.healthScore }}%
          </div>
          <div class="text-muted-foreground text-sm">
            {{
              store.healthScore >= 90
                ? '✨ Excellent'
                : store.healthScore >= 70
                  ? '⚠️ Correct'
                  : '🔴 À améliorer'
            }}
          </div>
        </div>
      </UiCardContent>
    </UiCard>

    <!-- Métriques par type -->
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <UiCard v-for="m in store.avgByType" :key="m.name">
        <UiCardHeader>
          <UiCardTitle>{{ m.name }}</UiCardTitle>
          <UiCardDescription>{{ m.count }} mesures</UiCardDescription>
        </UiCardHeader>
        <UiCardContent class="space-y-3">
          <div class="flex items-baseline justify-between">
            <span class="text-2xl font-bold">{{ m.avgValue }}</span>
            <span class="text-muted-foreground text-xs">
              Bon &lt; {{ m.threshold.good }} / Mauvais &gt; {{ m.threshold.poor }}
            </span>
          </div>
          <div class="bg-muted h-2 overflow-hidden rounded-full">
            <div class="flex h-full">
              <div
                class="bg-green-500 h-full transition-all"
                :style="{ width: `${m.goodPct}%` }"
              />
              <div
                class="bg-yellow-500 h-full transition-all"
                :style="{ width: `${100 - m.goodPct - m.poorPct}%` }"
              />
              <div
                class="bg-red-500 h-full transition-all"
                :style="{ width: `${m.poorPct}%` }"
              />
            </div>
          </div>
          <div class="flex justify-between text-xs">
            <span class="text-green-600">Bon {{ m.goodPct }}%</span>
            <span class="text-red-600">Mauvais {{ m.poorPct }}%</span>
          </div>
        </UiCardContent>
      </UiCard>
    </div>

    <!-- Tableau des dernières mesures -->
    <UiCard>
      <UiCardHeader>
        <UiCardTitle>Dernières mesures</UiCardTitle>
      </UiCardHeader>
      <UiCardContent>
        <UiTable v-if="store.metrics.length > 0">
          <UiTableHeader>
            <UiTableRow>
              <UiTableHead>Métrique</UiTableHead>
              <UiTableHead>Valeur</UiTableHead>
              <UiTableHead>Évaluation</UiTableHead>
              <UiTableHead>Page</UiTableHead>
              <UiTableHead>Date</UiTableHead>
            </UiTableRow>
          </UiTableHeader>
          <UiTableBody>
            <UiTableRow v-for="m in store.metrics.slice(0, 20)" :key="m.id">
              <UiTableCell class="font-medium">{{ m.name }}</UiTableCell>
              <UiTableCell>{{ m.value }}</UiTableCell>
              <UiTableCell>
                <UiBadge :variant="ratingVariant(m.rating)">
                  {{ m.rating }}
                </UiBadge>
              </UiTableCell>
              <UiTableCell class="max-w-48 truncate text-xs">{{ m.href }}</UiTableCell>
              <UiTableCell class="text-xs">
                {{ new Date(m.timestamp).toLocaleDateString('fr-FR') }}
              </UiTableCell>
            </UiTableRow>
          </UiTableBody>
        </UiTable>
        <div v-else class="text-muted-foreground py-8 text-center">
          Aucune donnée collectée pour le moment
        </div>
      </UiCardContent>
    </UiCard>
  </div>
</template>
