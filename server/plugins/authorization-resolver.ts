/**
 * Resolver serveur pour nuxt-authorization.
 * Fournit l'utilisateur (rôles + permissions) côté Nitro.
 *
 * Scénario Laravel Spatie :
 * - Récupère la session OIDC.
 * - Appelle l'API Laravel pour obtenir les rôles et permissions.
 * - Retourne l'utilisateur enrichi.
 */
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('request', async (event) => {
    event.context.$authorization = {
      async resolveServerUser() {
        // Récupère la session OIDC (fournie par nuxt-oidc-auth)
        const session = await getServerSession(event).catch(() => null)
        if (!session?.user) return null

        // Appelle l'API Laravel pour récupérer rôles + permissions Spatie
        const laravelBaseUrl = process.env.LARAVEL_API_URL || 'https://api.monsite.fr'
        const laravelUser = await $fetch<{
          id: number
          name: string
          email: string
          roles: string[]
          permissions: string[]
        }>(`${laravelBaseUrl}/api/me`, {
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
            Accept: 'application/json',
          },
        }).catch(() => null)

        return laravelUser
          ? {
              id: String(laravelUser.id),
              roles: laravelUser.roles,
              permissions: laravelUser.permissions,
            }
          : null
      },
    }
  })
})
