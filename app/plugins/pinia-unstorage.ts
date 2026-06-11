import { createPiniaUnstorage } from 'pinia-plugin-unstorage'

/**
 * Plugin de persistance Pinia via unstorage.
 * Mode sans serveur : utilise localStorage (ou IndexedDB pour gros volumes).
 *
 * Pour le mode avec serveur (Redis), remplace le driver par :
 *   import redisDriver from 'unstorage/drivers/redis'
 *   driver: redisDriver({ url: process.env.REDIS_URL })
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$pinia.use(
    createPiniaUnstorage({
      namespace: 'nuxt-app',
      driver: localStorage,
    }),
  )
})
