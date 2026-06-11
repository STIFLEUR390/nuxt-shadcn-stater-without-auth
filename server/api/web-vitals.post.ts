export default defineEventHandler(async (event) => {
  const body = await readBody<{
    id: string
    name: string
    value: number
    rating: string
    delta: number
    href: string
    navigationType: string
  }>(event)

  const metric = {
    id: body.id || crypto.randomUUID(),
    name: body.name,
    value: body.value,
    rating: body.rating || 'good',
    delta: body.delta,
    href: body.href,
    navigationType: body.navigationType || 'navigate',
    timestamp: new Date().toISOString(),
  }

  // Stockage en mémoire via unstorage (remplacer par Redis/DB en production)
  const storage = useStorage('web-vitals')
  await storage.setItem(metric.id, metric)

  return { success: true }
})
