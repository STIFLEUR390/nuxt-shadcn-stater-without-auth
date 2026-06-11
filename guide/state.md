# 🗄️ State — Pinia & Persistance unstorage

## Packages

| Package | Version | Rôle |
|---------|---------|------|
| `@pinia/nuxt` | 0.11.3 | Store management officiel Vue |
| `pinia-plugin-unstorage` | 1.0.0-beta.1 | Persistance automatique des stores |

## Installation

```bash
bun add @pinia/nuxt pinia
bun add pinia-plugin-unstorage
```

## Configuration Nuxt

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  pinia: {
    storesDirs: ['./app/stores/**'],
  },
})
```

## Stores créés

| Ficher | Store | Usage |
|--------|-------|-------|
| `app/stores/auth.ts` | `useAuthStore` | Utilisateur connecté (id, email, name, roles, permissions) |
| `app/stores/webVitals.ts` | `useWebVitalsStore` | Métriques Web Vitals pour le dashboard admin |

## Persistance unstorage

### Mode sans serveur (localStorage)

```ts
// app/plugins/pinia-unstorage.ts
import { createPiniaUnstorage } from 'pinia-plugin-unstorage'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$pinia.use(
    createPiniaUnstorage({
      namespace: 'nuxt-app',
      driver: localStorage,
    }),
  )
})
```

### Mode avec serveur (Redis)

```bash
bun add unstorage ioredis
```

```ts
import { createPiniaUnstorage } from 'pinia-plugin-unstorage'
import redisDriver from 'unstorage/drivers/redis'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$pinia.use(
    createPiniaUnstorage({
      namespace: 'nuxt-app',
      driver: redisDriver({
        url: process.env.REDIS_URL || 'redis://localhost:6379',
      }),
    }),
  )
})
```

### Quels stores persister ?

```ts
export const usePreferencesStore = defineStore('preferences', () => {
  const theme = ref<'light' | 'dark'>('light')
  const locale = ref<'fr' | 'en'>('fr')
  return { theme, locale }
}, {
  unstorage: {
    pick: ['theme', 'locale'], // Persister UNIQUEMENT ces clés
    // omit: ['secret'],       // Ou exclure des clés sensibles
  },
})
```

## Désactiver / Supprimer

| Action | Étapes |
|--------|--------|
| Désactiver | Retirer `@pinia/nuxt` des `modules` dans `nuxt.config.ts` |
| Désactiver persistance | Supprimer `app/plugins/pinia-unstorage.ts` |
| Supprimer | `bun remove @pinia/nuxt pinia-plugin-unstorage` puis `rm -rf app/stores/` |
