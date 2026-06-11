/**
 * Resolver client pour nuxt-authorization.
 * Fournit l'utilisateur (rôles + permissions) au module côté client.
 *
 * Pour une API Laravel avec Spatie Permissions :
 * - Après login OIDC, on appelle GET /api/me qui renvoie l'utilisateur
 *   avec ses rôles et permissions Spatie.
 * - Ce resolver retourne l'utilisateur stocké dans le store Pinia.
 */
export default defineNuxtPlugin({
  name: 'authorization-resolver',
  parallel: true,
  setup() {
    return {
      provide: {
        authorization: {
          resolveClientUser() {
            const authStore = useAuthStore()
            return authStore.user
              ? {
                  id: authStore.user.id,
                  roles: authStore.user.roles ?? [],
                  permissions: authStore.user.permissions ?? [],
                }
              : null
          },
        },
      },
    }
  },
})
