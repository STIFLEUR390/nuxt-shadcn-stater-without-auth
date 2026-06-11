export default defineEventHandler(async (event) => {
  // Protégé : seul admin/editor peut voir les métriques
  const { can } = event.context.$authorization as any
  if (can && !(await can('manage-dashboard').catch(() => false))) {
    throw createError({ statusCode: 403, statusMessage: 'Accès refusé' })
  }

  const storage = useStorage('web-vitals')
  const keys = await storage.getKeys()
  const metrics = (await Promise.all(keys.map((k) => storage.getItem(k)))).filter(Boolean)

  // Tri par date décroissante
  metrics.sort((a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())

  return { metrics: metrics.slice(0, 500) }
})
