import { defineAbility } from '#nuxt-authorization/composables'

/**
 * Définition des abilities côté client et serveur.
 *
 * Le module nuxt-authorization est agnostique de l'authentification.
 * Les resolvers (plugins/authorization-resolver.ts et server/plugins/authorization-resolver.ts)
 * fournissent l'utilisateur (rôles + permissions) au module.
 */
export default defineNuxtPlugin({
  name: 'authorization-abilities',
  parallel: true,
  setup() {
    const { defineUserAbility } = useAuthorization()

    // ── Abilities basées sur les rôles ──────────────────────────────

    defineUserAbility('manage-dashboard', (user) => {
      return user?.roles?.includes('admin') || user?.roles?.includes('editor')
    })

    defineUserAbility('manage-users', (user) => {
      return user?.roles?.includes('admin')
    })

    defineUserAbility('view-reports', (user) => {
      return user?.roles?.includes('admin') || user?.roles?.includes('viewer')
    })

    // ── Abilities basées sur les permissions Spatie ─────────────────

    defineUserAbility('create-post', (user) => {
      return user?.permissions?.includes('create-post')
    })

    defineUserAbility('edit-post', (user) => {
      return user?.permissions?.includes('edit-post')
    })

    defineUserAbility('delete-post', (user) => {
      return user?.permissions?.includes('delete-post')
    })

    defineUserAbility('publish-post', (user) => {
      return user?.permissions?.includes('publish-post')
    })
  },
})
