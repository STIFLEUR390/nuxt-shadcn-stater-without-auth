/**
 * Middleware admin : redirige vers /auth/login si l'utilisateur
 * n'a pas l'ability 'manage-dashboard'.
 */
export default defineNuxtRouteMiddleware(async () => {
  const { can } = useAuthorization()
  const canAccess = await can('manage-dashboard')

  if (!canAccess) {
    return navigateTo('/auth/login')
  }
})
