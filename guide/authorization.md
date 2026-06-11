# 🛡️ Autorisation — Permissions & Spatie

## Package

| Package | Version | Rôle |
|---------|---------|------|
| `nuxt-authorization` | 0.3.5 | Primitives d'autorisation côté client ET serveur |

## Installation

```bash
bun add nuxt-authorization
```

## Configuration Nuxt

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-authorization'],
  authorization: {
    redirect: {
      onClient: '/auth/login',
      onServer: '/auth/login',
    },
  },
})
```

## Architecture

```
┌──────────────────────────────────────────────────────┐
│  nuxt-oidc-auth                                      │
│  (authentifie l'utilisateur, fournit la session)     │
└────────────┬─────────────────────────────────────────┘
             │
             ▼
┌──────────────────────────────────────────────────────┐
│  authorization-resolver                              │
│  (lit la session, appelle l'API Laravel Spatie,      │
│   expose { id, roles, permissions })                 │
└────────────┬─────────────────────────────────────────┘
             │
             ▼
┌──────────────────────────────────────────────────────┐
│  authorization-abilities                             │
│  (définit qui peut faire quoi avec can())            │
└──────────────────────────────────────────────────────┘
```

## Cas d'usage : API Laravel avec Spatie Permissions

Le backend Laravel expose `GET /api/me` qui renvoie :

```json
{
  "id": 42, "name": "Alice", "email": "alice@example.com",
  "roles": ["admin", "editor"],
  "permissions": ["create-post", "edit-post", "delete-post", "view-dashboard"]
}
```

### Resolver client

```ts
// app/plugins/authorization-resolver.ts
export default defineNuxtPlugin({
  name: 'authorization-resolver',
  parallel: true,
  setup() {
    return {
      provide: {
        authorization: {
          resolveClientUser() {
            const auth = useAuthStore()
            return auth.user ? { id: auth.user.id, roles: auth.user.roles ?? [], permissions: auth.user.permissions ?? [] } : null
          },
        },
      },
    }
  },
})
```

### Resolver serveur

```ts
// server/plugins/authorization-resolver.ts
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('request', async (event) => {
    event.context.$authorization = {
      async resolveServerUser() {
        const session = await getServerSession(event).catch(() => null)
        if (!session?.user) return null

        const laravelUser = await $fetch(`${process.env.LARAVEL_API_URL}/api/me`, {
          headers: { Authorization: `Bearer ${session.accessToken}` },
        }).catch(() => null)

        return laravelUser ? { id: String(laravelUser.id), roles: laravelUser.roles, permissions: laravelUser.permissions } : null
      },
    }
  })
})
```

### Définition des abilities

```ts
// app/plugins/authorization-abilities.ts
export default defineNuxtPlugin({
  name: 'authorization-abilities',
  parallel: true,
  setup() {
    const { defineUserAbility } = useAuthorization()

    // Basé sur les rôles
    defineUserAbility('manage-dashboard', (user) => user?.roles?.includes('admin') || user?.roles?.includes('editor'))
    defineUserAbility('manage-users', (user) => user?.roles?.includes('admin'))

    // Basé sur les permissions Spatie
    defineUserAbility('create-post', (user) => user?.permissions?.includes('create-post'))
    defineUserAbility('edit-post', (user) => user?.permissions?.includes('edit-post'))
    defineUserAbility('delete-post', (user) => user?.permissions?.includes('delete-post'))
  },
})
```

## Utilisation

### Dans un composant

```vue
<script setup lang="ts">
const { can } = useAuthorization()
</script>

<template>
  <UiButton v-if="can('create-post')">Créer</UiButton>
  <template v-if="can('manage-dashboard')">
    <p>Dashboard admin</p>
  </template>
</template>
```

### Dans un middleware

```ts
// app/middleware/admin.ts
export default defineNuxtRouteMiddleware(async () => {
  const { can } = useAuthorization()
  if (!(await can('manage-dashboard'))) {
    return navigateTo('/auth/login')
  }
})
```

### Dans une route Nitro

```ts
// server/api/posts/[id].delete.ts
export default defineEventHandler(async (event) => {
  const { can } = event.context.$authorization as any
  if (!(await can('delete-post'))) {
    throw createError({ statusCode: 403 })
  }
  // ...
})
```

## Désactiver / Supprimer

| Action | Étapes |
|--------|--------|
| Désactiver | Retirer `nuxt-authorization` des `modules` + supprimer `app/plugins/authorization-*.ts` |
| Supprimer | `bun remove nuxt-authorization` + supprimer `app/middleware/admin.ts` + supprimer `server/plugins/authorization-resolver.ts` |
