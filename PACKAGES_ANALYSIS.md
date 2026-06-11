# 📦 Guide Complet — Starter Kit Nuxt 4 Moderne

> Audit réalisé le 11 juin 2026 via `agent-browser` sur 17 URLs.
> Projet : **Nuxt 4 + Vue 3.5 + shadcn-vue + Tailwind CSS v4 + OpenAPI + PWA**
> Package manager : **Bun**
> 
> 🔴 **Statut : Implémenté** — Tous les modules sont installés et le build passe ✅

---

## 🧠 Résumé du projet actuel

| Catégorie | Package(s) déjà en place |
|-----------|--------------------------|
| Framework | Nuxt 4 |
| UI | Vue 3.5, shadcn-vue (Reka UI), Tailwind CSS v4 |
| Icônes | Lucide |
| Validation | vee-validate + Zod |
| API Client | nuxt-openapi-hyperfetch (OpenAPI auto-généré) |
| Tableaux | TanStack Vue Table |
| Carrousel | embla-carousel-vue |
| Notifications | vue-sonner |
| PWA | @vite-pwa/nuxt |
| Dark Mode | @nuxtjs/color-mode |
| Store | ❌ Aucun |
| Auth | ❌ Aucun |
| Autorisation | ❌ Aucun |
| i18n | ❌ Aucun |
| Monitoring | ❌ Aucun |
| Analytics/Perfs | ❌ Aucun |
| Cookies RGPD | ❌ Aucun |

---

## 📋 Stack finale du Starter Kit

```
┌─────────────────────────────────────────────────────────────┐
│                    Nuxt 4 Modern Base                        │
├──────────────┬──────────────┬──────────────┬────────────────┤
│  State       │  Auth        │  Permissions │  Monitoring    │
│  Pinia       │  OIDC Auth   │  nuxt-authz  │  Sentry        │
│  + unstorage │  Keycloak    │  + Spatie    │  + Web Vitals  │
│              │  Google/GH   │              │                │
│              │  Logto       │              │                │
├──────────────┼──────────────┼──────────────┼────────────────┤
│  i18n        │  Cookies     │  UI          │  API           │
│  Nuxt I18n   │  CookieCtrl  │  shadcn-vue  │  OpenAPI       │
│  fr + en     │  RGPD        │  Tailwind 4  │  Hyperfetch    │
└──────────────┴──────────────┴──────────────┴────────────────┘
```

---

## 🚀 Installation groupée

```bash
# Tout installer d'un coup
bun x nuxi module add pinia
bun add pinia-plugin-unstorage
bun x nuxi module add nuxt-oidc-auth
bun x nuxi module add nuxt-authorization
bun x nuxi module add @sentry/nuxt
bun x nuxi module add web-vitals
bun x nuxi module add cookie-control
bun x nuxi module add i18n
```

---

# 1. 🗄️ Pinia — State Management

## Installation

```bash
bun x nuxi module add pinia
```

## Configuration

`nuxt.config.ts` :

```ts
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  pinia: {
    storesDirs: ['./app/stores/**'],
  },
})
```

## Premier store

`app/stores/auth.ts` :

```ts
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<null | { id: string; email: string; name: string }>(null)
  const isAuthenticated = computed(() => !!user.value)

  function setUser(payload: typeof user.value) {
    user.value = payload
  }

  function logout() {
    user.value = null
  }

  return { user, isAuthenticated, setUser, logout }
})
```

### Utilisation dans un composant

```vue
<script setup lang="ts">
const auth = useAuthStore()
</script>

<template>
  <UiButton v-if="!auth.isAuthenticated" @click="auth.setUser({ id: '1', email: 'x@y.com', name: 'Alice' })">
    Se connecter
  </UiButton>
  <p v-else>Bonjour {{ auth.user?.name }}</p>
</template>
```

---

## Comment désactiver / supprimer Pinia

| Action | Commande / Étapes |
|--------|-------------------|
| Désactiver temporairement | Retirer `@pinia/nuxt` du tableau `modules` dans `nuxt.config.ts` |
| Supprimer définitivement | `bun remove @pinia/nuxt` puis supprimer `app/stores/` |

---

# 2. 💾 pinia-plugin-unstorage — Persistance des stores

## Pourquoi ?

`pinia-plugin-unstorage` persiste automatiquement un ou plusieurs stores Pinia vers un stockage de ton choix. Basé sur `unstorage`, il supporte des **drivers** variés :

| Driver | Usage | Type |
|--------|-------|------|
| `localStorage` | Stockage navigateur | Sans serveur |
| `indexedDb` | Stockage navigateur volumineux | Sans serveur |
| `memory` | Volatile (tests) | Sans serveur |
| `redis` | Stockage serveur (cache) | Avec serveur |
| `fs` | Fichiers locaux (dév) | Avec serveur |
| `cloudflare-kv-http` | Cloudflare KV | Avec serveur |
| `vercel-kv` | Vercel KV | Avec serveur |
| `mongodb` | Base de données MongoDB | Avec serveur |
| `planetscale` | Base de données PlanetScale | Avec serveur |

## Installation

```bash
bun add pinia-plugin-unstorage
```

## Configuration

### Mode sans serveur (localStorage / IndexedDB)

Pour une app frontend-only ou PWA, persiste dans le navigateur :

```ts
// app/plugins/pinia-unstorage.ts
import { createPiniaUnstorage } from 'pinia-plugin-unstorage'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$pinia.use(
    createPiniaUnstorage({
      namespace: 'myapp',
      driver: localStorage, // ou indexedDb pour gros volumes
    }),
  )
})
```

### Mode avec serveur (Redis)

Pour une app full-stack avec sessions partagées :

```bash
bun add unstorage ioredis
```

```ts
// app/plugins/pinia-unstorage.server.ts
import { createPiniaUnstorage } from 'pinia-plugin-unstorage'
import redisDriver from 'unstorage/drivers/redis'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$pinia.use(
    createPiniaUnstorage({
      namespace: 'myapp',
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
    pick: ['theme', 'locale'], // UNIQUEMENT ces clés sont persistées
    // omit: ['password'],    // Ou liste ce qu'il ne faut PAS persister
  },
})
```

## Comment désactiver / supprimer

| Action | Étapes |
|--------|--------|
| Désactiver | Supprimer le fichier `app/plugins/pinia-unstorage.ts` |
| Supprimer | `bun remove pinia-plugin-unstorage` |

---

# 3. 🔐 nuxt-oidc-auth — Authentification OIDC

## Installation

```bash
bun x nuxi module add nuxt-oidc-auth
```

## Vue d'ensemble des providers

`nuxt-oidc-auth` supporte nativement **Keycloak**, **Google**, **GitHub**, **Logto**, et bien d'autres (Auth0, Microsoft, Azure, Apple, Discord, GitLab, LinkedIn, Okta, PingIdentity, etc.).

---

## 3.1 Configuration Keycloak

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-oidc-auth'],
  oidc: {
    defaultProvider: 'keycloak',
    providers: {
      keycloak: {
        clientId: process.env.KEYCLOAK_CLIENT_ID!,
        clientSecret: process.env.KEYCLOAK_CLIENT_SECRET!,
        // URL de ton royaume Keycloak
        baseUrl: 'https://auth.monsite.fr/realms/mon-realm',
        redirectUri: 'https://monsite.fr/auth/callback',
        logoutRedirectUri: 'https://monsite.fr',
        // Scopes par défaut
        additionalScopes: ['profile', 'email'],
        // PKCE pour plus de sécurité (recommandé)
        pkce: true,
        // Refresh automatique du token
        enableRefreshTokenRotation: true,
        refreshTokenRotationInterval: 60, // secondes
        // Timeout de session
        sessionConfiguration: {
          expirationCheck: true,
          refreshGracePeriod: 30, // secondes avant expiration
        },
      },
    },
    // Toutes les pages sont protégées par défaut (optionnel)
    middleware: {
      globalMiddlewareEnabled: false, // true = tout protégé
    },
  },
})
```

Variables d'environnement (`.env`) :

```bash
KEYCLOAK_CLIENT_ID=nuxt-app
KEYCLOAK_CLIENT_SECRET=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
NUXT_SESSION_SECRET=une-phrase-secrete-longue-et-aleatoire
```

---

## 3.2 Configuration Google OAuth

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  oidc: {
    defaultProvider: 'google',
    providers: {
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        redirectUri: 'https://monsite.fr/auth/callback',
        logoutRedirectUri: 'https://monsite.fr',
        additionalScopes: ['profile', 'email'],
      },
    },
  },
})
```

`.env` :

```bash
GOOGLE_CLIENT_ID=xxxxxxxxxxxx.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-xxxxxxxxxxxxxxxxxxxx
```

---

## 3.3 Configuration GitHub OAuth

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  oidc: {
    defaultProvider: 'github',
    providers: {
      github: {
        clientId: process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        redirectUri: 'https://monsite.fr/auth/callback',
        logoutRedirectUri: 'https://monsite.fr',
      },
    },
  },
})
```

`.env` :

```bash
GITHUB_CLIENT_ID=Iv23xxxxxxxxxxxx
GITHUB_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

---

## 3.4 Configuration Logto

[Logto](https://logto.io) est une plateforme d'authentification open-source complète.

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  oidc: {
    defaultProvider: 'logto',
    providers: {
      logto: {
        clientId: process.env.LOGTO_CLIENT_ID!,
        clientSecret: process.env.LOGTO_CLIENT_SECRET!,
        baseUrl: 'https://auth.monsite.fr', // Ton instance Logto
        redirectUri: 'https://monsite.fr/auth/callback',
        logoutRedirectUri: 'https://monsite.fr',
        additionalScopes: ['profile', 'email', 'roles'],
      },
    },
  },
})
```

---

## Multi-providers simultanés

Tu peux configurer **tous** les providers en même temps :

```ts
export default defineNuxtConfig({
  oidc: {
    defaultProvider: 'keycloak',
    providers: {
      keycloak: { /* config keycloak */ },
      google: { /* config google */ },
      github: { /* config github */ },
      logto: { /* config logto */ },
    },
    // Page avec boutons pour choisir le provider
    pages: {
      login: '/auth/login',
    },
  },
})
```

Page `app/pages/auth/login.vue` :

```vue
<script setup lang="ts">
const { signIn } = useOidcAuth()
</script>

<template>
  <div class="flex flex-col gap-4 p-8">
    <h1 class="text-2xl font-bold">Connexion</h1>
    <UiButton @click="signIn('keycloak')">🔑 Keycloak</UiButton>
    <UiButton @click="signIn('google')">🔵 Google</UiButton>
    <UiButton @click="signIn('github')">🐙 GitHub</UiButton>
    <UiButton @click="signIn('logto')">🛡️ Logto</UiButton>
  </div>
</template>
```

## Composables disponibles

```ts
const { user, isAuthenticated, signIn, signOut, refreshToken, hasRole } = useOidcAuth()

// Informations utilisateur
user.value?.email
user.value?.sub       // ID unique
user.value?.name
user.value?.roles     // si le provider renvoie des rôles

// Actions
await signIn('keycloak')
await signOut()
await refreshToken()
```

## Comment désactiver / supprimer

| Action | Étapes |
|--------|--------|
| Désactiver temporairement | Retirer `nuxt-oidc-auth` du tableau `modules` dans `nuxt.config.ts` |
| Supprimer | `bun remove nuxt-oidc-auth` + supprimer le bloc `oidc` dans la config |

---

# 4. 🛡️ nuxt-authorization — Permissions (Style Laravel Spatie)

## Concept

`nuxt-authorization` est **agnostique de l'authentification**. Il fournit des primitives bas niveau pour vérifier ce qu'un utilisateur **peut faire**. Tu définis des `abilities` et tu les vérifies côté client ET serveur Nitro.

Le module ne fait **pas** de RBAC ou ACL lui-même — **c'est toi qui écris la logique**.

---

## Cas d'usage : API Laravel avec Spatie Permissions

Ton backend Laravel expose une route qui renvoie les rôles et permissions de l'utilisateur :

```json
// GET /api/me
{
  "id": 42,
  "name": "Alice",
  "email": "alice@example.com",
  "roles": ["admin", "editor"],
  "permissions": ["create-post", "edit-post", "delete-post", "view-dashboard"]
}
```

Le module `nuxt-authorization` va consommer cette réponse pour vérifier les abilities.

---

## Installation

```bash
bun x nuxi module add nuxt-authorization
```

## Configuration

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-authorization'],
  authorization: {
    // Optionnel : rediriger si non autorisé
    redirect: {
      onClient: '/auth/login',
      onServer: '/auth/login',
    },
  },
})
```

## Resolver — fournir l'utilisateur au module

### Côté client (Nuxt)

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
            // Récupère l'utilisateur stocké après login
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
```

### Côté serveur (Nitro)

```ts
// server/plugins/authorization-resolver.ts
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('request', async (event) => {
    event.context.$authorization = {
      async resolveServerUser() {
        // Récupère l'utilisateur depuis la session OIDC
        const session = await getServerSession(event)
        if (!session?.user) return null

        // Appelle l'API Laravel pour récupérer rôles + permissions
        const laravelUser = await $fetch('https://api.monsite.fr/api/me', {
          headers: { Authorization: `Bearer ${session.accessToken}` },
        }).catch(() => null)

        return laravelUser
          ? {
              id: laravelUser.id,
              roles: laravelUser.roles,
              permissions: laravelUser.permissions,
            }
          : null
      },
    }
  })
})
```

## Définir les abilities

```ts
// app/plugins/authorization-abilities.ts
export default defineNuxtPlugin({
  name: 'authorization-abilities',
  parallel: true,
  setup() {
    const { defineAbility, defineUserAbility } = useAuthorization()

    // Abilities basées sur les rôles
    defineUserAbility('manage-dashboard', (user) => {
      return user.roles?.includes('admin') || user.roles?.includes('editor')
    })

    defineUserAbility('manage-users', (user) => {
      return user.roles?.includes('admin')
    })

    defineUserAbility('view-reports', (user) => {
      return user.roles?.includes('admin') || user.roles?.includes('viewer')
    })

    // Abilities basées sur les permissions Spatie
    defineUserAbility('create-post', (user) => {
      return user.permissions?.includes('create-post')
    })

    defineUserAbility('edit-post', (user) => {
      return user.permissions?.includes('edit-post')
    })

    defineUserAbility('delete-post', (user) => {
      return user.permissions?.includes('delete-post')
    })

    // Ability serveur uniquement
    defineAbility('server-health-check', (user) => {
      return user?.roles?.includes('admin')
    }, { serverOnly: true })
  },
})
```

## Utilisation dans les composants

```vue
<script setup lang="ts">
const { can } = useAuthorization()
</script>

<template>
  <!-- Bouton conditionnel -->
  <UiButton v-if="can('create-post')" @click="createPost()">
    Créer un article
  </UiButton>

  <!-- Bloc complet protégé -->
  <template v-if="can('manage-dashboard')">
    <UiCard>
      <h2>Dashboard Admin</h2>
      <p>Stats réservées aux admins et éditeurs</p>
    </UiCard>
  </template>

  <!-- Icône de suppression conditionnelle -->
  <UiButton v-if="can('delete-post')" variant="destructive" size="icon">
    <Trash2 class="size-4" />
  </UiButton>
</template>
```

## Utilisation dans les middlewares Nuxt

```ts
// app/middleware/admin.ts
export default defineNuxtRouteMiddleware(async () => {
  const { can } = useAuthorization()
  const canAccess = await can('manage-dashboard')

  if (!canAccess) {
    return navigateTo('/auth/login')
  }
})
```

```vue
<!-- Sur une page protégée -->
<script setup lang="ts">
definePageMeta({
  middleware: ['admin'],
})
</script>
```

## Utilisation côté serveur (routes Nitro)

```ts
// server/api/posts/[id].delete.ts
export default defineEventHandler(async (event) => {
  const { can } = event.context.$authorization as any

  if (!(await can('delete-post'))) {
    throw createError({ statusCode: 403, statusMessage: 'Non autorisé' })
  }

  // Logique de suppression...
  return { success: true }
})
```

## Comment désactiver / supprimer

| Action | Étapes |
|--------|--------|
| Désactiver | Retirer `nuxt-authorization` des `modules` + supprimer `app/plugins/authorization-*.ts` |
| Supprimer | `bun remove nuxt-authorization` |

---

# 5. 🐛 @sentry/nuxt — Monitoring d'erreurs

## Installation

```bash
bun x nuxi module add @sentry/nuxt
```

## Configuration

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@sentry/nuxt'],
  sentry: {
    // DSN Sentry (obligatoire)
    dsn: process.env.SENTRY_DSN,

    // Environnement
    environment: process.env.NODE_ENV || 'production',

    // Taux d'échantillonnage (1.0 = 100% en prod, baisser pour réduire le volume)
    tracesSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,  // Session Replay (10%)
    replaysOnErrorSampleRate: 1.0,  // Replay complet sur erreur

    // Source maps en production (optionnel mais recommandé)
    sourceMapsUploadOptions: {
      org: process.env.SENTRY_ORG,
      project: process.env.SENTRY_PROJECT,
      authToken: process.env.SENTRY_AUTH_TOKEN,
    },

    // Désactiver en développement
    disabled: process.env.NODE_ENV === 'development',
  },
})
```

`.env` :

```bash
SENTRY_DSN=https://xxxxxxxxxxxxxxxxxxxx@xxxxx.ingest.sentry.io/xxxxxxx
SENTRY_ORG=mon-organisation
SENTRY_PROJECT=nuxt-app
SENTRY_AUTH_TOKEN=sntrys_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## Ce que Sentry capture automatiquement

| Source | Type d'erreur |
|--------|--------------|
| `app/` (frontend) | Erreurs Vue, promesses non gérées, exceptions JavaScript |
| `server/` (Nitro) | Erreurs API, timeouts, exceptions serveur |
| Hydratation | Erreurs de mismatch SSR/client |
| Performance | Traces distribuées, temps de réponse API, LCP/FCP |
| Session Replay | Rejeu vidéo des sessions avec erreurs (debug visuel) |

## Erreurs manuelles

```ts
// Capturer une erreur manuelle
import * as Sentry from '@sentry/nuxt'

try {
  await fetchData()
} catch (err) {
  Sentry.captureException(err, {
    tags: { feature: 'dashboard' },
    extra: { userId: '42' },
  })
}
```

## Comment désactiver / supprimer

| Action | Étapes |
|--------|--------|
| Désactiver temporairement | `sentry: { disabled: true }` dans `nuxt.config.ts` |
| Supprimer | `bun remove @sentry/nuxt` + supprimer le bloc `sentry` |

---

# 6. 📊 @nuxtjs/web-vitals — Métriques de performance

## Installation

```bash
bun x nuxi module add web-vitals
```

## Configuration — envoi vers une API custom

Pour pouvoir afficher les métriques dans ton propre dashboard, on utilise le provider `api` :

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/web-vitals'],
  webVitals: {
    provider: 'api',
    debug: false,
    disabled: false,
    api: {
      url: '/api/web-vitals', // Route Nitro qui stocke les métriques
    },
  },
})
```

## Route Nitro pour collecter les métriques

```ts
// server/api/web-vitals.post.ts
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const metric = {
    id: body.id,
    name: body.name,           // LCP, CLS, INP, FCP, TTFB
    value: body.value,         // Valeur en ms (ou score pour CLS)
    rating: body.rating,       // 'good', 'needs-improvement', 'poor'
    delta: body.delta,
    href: body.href,           // Page concernée
    navigationType: body.navigationType,
    timestamp: new Date().toISOString(),
  }

  console.log('[Web Vitals]', metric)
  // TODO : stocker en base de données (Redis, Postgres, etc.)
  // Exemple : await useStorage('web-vitals').setItem(metric.id, metric)

  return { success: true }
})
```

## Dashboard Admin — Vues Web Vitals

### Store pour les métriques

```ts
// app/stores/webVitals.ts
import { defineStore } from 'pinia'
import { useOpenapiFetch } from '~~/openapi/composables/useOpenapiFetch'

export interface WebVitalMetric {
  id: string
  name: 'LCP' | 'CLS' | 'INP' | 'FCP' | 'TTFB'
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
  delta: number
  href: string
  navigationType: string
  timestamp: string
}

export const useWebVitalsStore = defineStore('webVitals', () => {
  const metrics = ref<WebVitalMetric[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  // Seuils Google Core Web Vitals
  const thresholds: Record<string, { good: number; poor: number }> = {
    LCP: { good: 2500, poor: 4000 },
    CLS: { good: 0.1, poor: 0.25 },
    INP: { good: 200, poor: 500 },
    FCP: { good: 1800, poor: 3000 },
    TTFB: { good: 800, poor: 1800 },
  }

  // Score agrégé moyen par type de métrique
  const avgByType = computed(() => {
    const grouped: Record<string, { total: number; count: number; ratings: Record<string, number> }> = {}
    for (const m of metrics.value) {
      if (!grouped[m.name]) {
        grouped[m.name] = { total: 0, count: 0, ratings: { good: 0, 'needs-improvement': 0, poor: 0 } }
      }
      grouped[m.name].total += m.value
      grouped[m.name].count++
      grouped[m.name].ratings[m.rating]++
    }
    return Object.entries(grouped).map(([name, data]) => ({
      name,
      avgValue: Math.round(data.total / data.count),
      count: data.count,
      threshold: thresholds[name] || { good: 0, poor: 0 },
      goodPct: Math.round((data.ratings.good / data.count) * 100),
      poorPct: Math.round((data.ratings.poor / data.count) * 100),
    }))
  })

  // Score de santé global
  const healthScore = computed(() => {
    if (avgByType.value.length === 0) return 100
    const scores = avgByType.value.map((m) => (m.goodPct > 90 ? 100 : m.goodPct > 70 ? 75 : m.goodPct > 50 ? 50 : 25))
    return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
  })

  async function fetchMetrics() {
    isLoading.value = true
    error.value = null
    try {
      // Endpoint qui retourne les métriques stockées
      const response = await $fetch<WebVitalMetric[]>('/api/web-vitals/list')
      metrics.value = response
    } catch (err) {
      error.value = 'Impossible de charger les métriques'
    } finally {
      isLoading.value = false
    }
  }

  return { metrics, isLoading, error, avgByType, healthScore, thresholds, fetchMetrics }
})
```

### Page Dashboard Admin — Métriques

```vue
<!-- app/pages/admin/web-vitals.vue -->
<script setup lang="ts">
import { useWebVitalsStore } from '~~/app/stores/webVitals'
import { useAuthorization } from '#imports'

const { can } = useAuthorization()
if (!can('manage-dashboard')) {
  await navigateTo('/auth/login')
}

const store = useWebVitalsStore()
await store.fetchMetrics()

const ratingColor = (rating: string) => ({
  good: 'text-green-500',
  'needs-improvement': 'text-yellow-500',
  poor: 'text-red-500',
}[rating] || 'text-gray-500')

const ratingBg = (rating: string) => ({
  good: 'bg-green-500',
  'needs-improvement': 'bg-yellow-500',
  poor: 'bg-red-500',
}[rating] || 'bg-gray-500')
</script>

<template>
  <div class="space-y-6 p-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold">Web Vitals</h1>
        <p class="text-muted-foreground">Métriques de performance réelles des utilisateurs</p>
      </div>
      <UiButton variant="outline" @click="store.fetchMetrics()">
        <RefreshCw class="mr-2 size-4" :class="{ 'animate-spin': store.isLoading }" />
        Actualiser
      </UiButton>
    </div>

    <!-- Score de santé -->
    <UiCard>
      <UiCardHeader>
        <UiCardTitle>Score de santé</UiCardTitle>
        <UiCardDescription>Pourcentage de métriques dans le vert</UiCardDescription>
      </UiCardHeader>
      <UiCardContent>
        <div class="flex items-center gap-4">
          <div class="text-5xl font-bold" :class="store.healthScore >= 90 ? 'text-green-500' : store.healthScore >= 70 ? 'text-yellow-500' : 'text-red-500'">
            {{ store.healthScore }}%
          </div>
          <div class="text-muted-foreground text-sm">
            {{ store.healthScore >= 90 ? '✨ Excellent' : store.healthScore >= 70 ? '⚠️ Correct' : '🔴 À améliorer' }}
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
          <!-- Valeur moyenne -->
          <div class="flex items-baseline justify-between">
            <span class="text-2xl font-bold">{{ m.avgValue }}</span>
            <span class="text-muted-foreground text-sm">
              Bon &lt; {{ m.threshold.good }} / Mauvais &gt; {{ m.threshold.poor }}
            </span>
          </div>
          <!-- Barre good / poor -->
          <div class="bg-muted h-2 overflow-hidden rounded-full">
            <div class="flex h-full">
              <div class="bg-green-500 h-full transition-all" :style="{ width: `${m.goodPct}%` }" />
              <div class="bg-yellow-500 h-full transition-all" :style="{ width: `${100 - m.goodPct - m.poorPct}%` }" />
              <div class="bg-red-500 h-full transition-all" :style="{ width: `${m.poorPct}%` }" />
            </div>
          </div>
          <div class="flex justify-between text-xs">
            <span class="text-green-600">Bon {{ m.goodPct }}%</span>
            <span class="text-red-600">Mauvais {{ m.poorPct }}%</span>
          </div>
        </UiCardContent>
      </UiCard>
    </div>

    <!-- Dernières mesures -->
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
                <UiBadge :variant="m.rating === 'good' ? 'default' : m.rating === 'needs-improvement' ? 'secondary' : 'destructive'">
                  {{ m.rating }}
                </UiBadge>
              </UiTableCell>
              <UiTableCell class="max-w-48 truncate text-xs">{{ m.href }}</UiTableCell>
              <UiTableCell class="text-xs">{{ new Date(m.timestamp).toLocaleDateString('fr-FR') }}</UiTableCell>
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
```

### Route API pour lister les métriques

```ts
// server/api/web-vitals/list.get.ts
export default defineEventHandler(async () => {
  const { can } = event.context.$authorization as any
  if (!(await can('manage-dashboard'))) {
    throw createError({ statusCode: 403 })
  }

  // TODO : lire depuis ta base de données
  // const metrics = await useStorage('web-vitals').getKeys().then(...)
  return { metrics: [] }
})
```

## Comment désactiver / supprimer

| Action | Étapes |
|--------|--------|
| Désactiver temporairement | `webVitals: { disabled: true }` dans `nuxt.config.ts` |
| Supprimer | `bun remove @nuxtjs/web-vitals` + supprimer routes `server/api/web-vitals.*` + pages `admin/web-vitals.vue` + store `app/stores/webVitals.ts` |

---

# 7. 🍪 @dargmuesli/nuxt-cookie-control — Conformité RGPD

## Installation

```bash
bun x nuxi module add cookie-control
```

## Configuration

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@dargmuesli/nuxt-cookie-control'],
  cookieControl: {
    // Ferme la bannière après acceptation
    closeModalOnClickOutside: true,

    // Types de cookies que tu utilises
    cookies: {
      necessary: [
        {
          name: { fr: 'Cookies nécessaires', en: 'Necessary Cookies' },
          description: {
            fr: 'Cookies essentiels au fonctionnement du site (session, sécurité).',
            en: 'Essential cookies for the site to function (session, security).',
          },
          targetCookieIds: ['nuxt-session', 'oidc-session'],
        },
      ],
      analytics: [
        {
          name: { fr: 'Cookies analytiques', en: 'Analytics Cookies' },
          description: {
            fr: 'Cookies de mesure d\'audience et performance.',
            en: 'Audience measurement and performance cookies.',
          },
          targetCookieIds: ['_ga', '_ga_*', '_gid'],
        },
      ],
    },

    // Apparence
    barPosition: 'bottom-full',
    colors: {
      barBackground: '#1a1a2e',
      barTextColor: '#e0e0e0',
      checkboxActiveBackground: '#22c55e',
      checkboxInactiveBackground: '#4b5563',
      controlButtonBackground: '#22c55e',
      controlButtonIconColor: '#ffffff',
      modalBackground: '#1a1a2e',
      modalOverlay: 'rgba(0,0,0,0.7)',
    },

    // Locales (déjà fournies par le module)
    localeTexts: {
      fr: {
        acceptAll: 'Tout accepter',
        acceptNecessary: 'Accepter les nécessaires',
        barDescription: 'Nous utilisons des cookies pour améliorer votre expérience.',
        barTitle: '🍪 Cookies & confidentialité',
        manageCookies: 'Personnaliser',
        save: 'Enregistrer',
        declineAll: 'Tout refuser',
      },
      en: {
        acceptAll: 'Accept all',
        acceptNecessary: 'Accept necessary',
        barDescription: 'We use cookies to improve your experience.',
        barTitle: '🍪 Cookies & Privacy',
        manageCookies: 'Customize',
        save: 'Save',
        declineAll: 'Decline all',
      },
    },

    // Mode : 'consent' (opt-in) ou 'info' (juste informatif)
    mode: 'consent',
    isCookieIdVisible: false,
    isDashInDescription: false,
    isIframeBlocked: false,
  },
})
```

## Utilisation

```vue
<!-- app/app.vue -->
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <CookieControl locale="fr" />
  </div>
</template>
```

## Comment désactiver / supprimer

| Action | Étapes |
|--------|--------|
| Désactiver | Retirer `<CookieControl>` de `app.vue` + retirer `@dargmuesli/nuxt-cookie-control` des `modules` |
| Supprimer | `bun remove @dargmuesli/nuxt-cookie-control` |


---

# 8. 🌍 @nuxtjs/i18n — Internationalisation (Français + Anglais)

## Installation

```bash
bun x nuxi module add i18n
```

## Configuration

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n'],
  i18n: {
    // Stratégie : préfixe dans l'URL (/fr/..., /en/...)
    strategy: 'prefix_except_default',
    defaultLocale: 'fr', // Le français est la langue par défaut (pas de préfixe)
    lazy: true,          // Chargement paresseux des traductions
    langDir: 'locales/', // Dossier des fichiers de traduction
    locales: [
      { code: 'fr', iso: 'fr-FR', name: 'Français', file: 'fr.json' },
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
    ],
    // Détection automatique de la langue du navigateur
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // Redirige uniquement à la racine
    },
    // SEO : balises hreflang automatiques
    seo: true,
    // Routes personnalisées par locale
    customRoutes: 'config',
    pages: {
      // Exemple : traduction des slugs de page
      // 'about': { fr: '/a-propos', en: '/about' },
    },
  },
})
```

## Fichiers de traduction

`app/locales/fr.json` :

```json
{
  "app": {
    "name": "Mon Application",
    "description": "Application Nuxt 4 moderne"
  },
  "nav": {
    "home": "Accueil",
    "dashboard": "Tableau de bord",
    "admin": "Administration",
    "login": "Connexion",
    "logout": "Déconnexion",
    "profile": "Profil",
    "settings": "Paramètres"
  },
  "landing": {
    "title": "Construisez plus vite",
    "subtitle": "Un starter kit Nuxt 4 complet pour vos applications modernes",
    "cta": "Commencer",
    "features": "Fonctionnalités",
    "pricing": "Tarifs",
    "testimonials": "Témoignages",
    "faq": "FAQ"
  },
  "auth": {
    "login": "Connexion",
    "signup": "Inscription",
    "forgotPassword": "Mot de passe oublié",
    "resetPassword": "Réinitialiser le mot de passe",
    "verifyEmail": "Vérifier l'email",
    "email": "Email",
    "password": "Mot de passe",
    "confirmPassword": "Confirmer le mot de passe",
    "rememberMe": "Se souvenir de moi",
    "noAccount": "Pas de compte ?",
    "hasAccount": "Déjà un compte ?",
    "signUp": "S'inscrire"
  },
  "dashboard": {
    "welcome": "Bonjour {name}",
    "overview": "Vue d'ensemble",
    "analytics": "Analytiques",
    "webVitals": "Web Vitals",
    "users": "Utilisateurs",
    "posts": "Articles",
    "settings": "Paramètres"
  },
  "errors": {
    "notFound": "Page introuvable",
    "notFoundDesc": "La page que vous cherchez n'existe pas ou a été déplacée.",
    "forbidden": "Accès refusé",
    "forbiddenDesc": "Vous n'avez pas les permissions nécessaires.",
    "serverError": "Erreur serveur",
    "serverErrorDesc": "Une erreur inattendue s'est produite.",
    "backHome": "Retour à l'accueil"
  },
  "common": {
    "save": "Enregistrer",
    "cancel": "Annuler",
    "delete": "Supprimer",
    "edit": "Modifier",
    "create": "Créer",
    "search": "Rechercher",
    "loading": "Chargement...",
    "noData": "Aucune donnée",
    "confirm": "Confirmer",
    "yes": "Oui",
    "no": "Non",
    "close": "Fermer"
  },
  "theme": {
    "light": "Clair",
    "dark": "Sombre",
    "system": "Système"
  },
  "language": {
    "fr": "Français",
    "en": "English",
    "switch": "Changer de langue"
  }
}
```

`app/locales/en.json` :

```json
{
  "app": {
    "name": "My Application",
    "description": "Modern Nuxt 4 Application"
  },
  "nav": {
    "home": "Home",
    "dashboard": "Dashboard",
    "admin": "Administration",
    "login": "Login",
    "logout": "Logout",
    "profile": "Profile",
    "settings": "Settings"
  },
  "landing": {
    "title": "Build faster",
    "subtitle": "A complete Nuxt 4 starter kit for your modern applications",
    "cta": "Get started",
    "features": "Features",
    "pricing": "Pricing",
    "testimonials": "Testimonials",
    "faq": "FAQ"
  },
  "auth": {
    "login": "Login",
    "signup": "Sign up",
    "forgotPassword": "Forgot password",
    "resetPassword": "Reset password",
    "verifyEmail": "Verify email",
    "email": "Email",
    "password": "Password",
    "confirmPassword": "Confirm password",
    "rememberMe": "Remember me",
    "noAccount": "No account?",
    "hasAccount": "Already have an account?",
    "signUp": "Sign up"
  },
  "dashboard": {
    "welcome": "Hello {name}",
    "overview": "Overview",
    "analytics": "Analytics",
    "webVitals": "Web Vitals",
    "users": "Users",
    "posts": "Posts",
    "settings": "Settings"
  },
  "errors": {
    "notFound": "Page not found",
    "notFoundDesc": "The page you're looking for doesn't exist or has been moved.",
    "forbidden": "Access denied",
    "forbiddenDesc": "You don't have the required permissions.",
    "serverError": "Server error",
    "serverErrorDesc": "An unexpected error occurred.",
    "backHome": "Back to home"
  },
  "common": {
    "save": "Save",
    "cancel": "Cancel",
    "delete": "Delete",
    "edit": "Edit",
    "create": "Create",
    "search": "Search",
    "loading": "Loading...",
    "noData": "No data",
    "confirm": "Confirm",
    "yes": "Yes",
    "no": "No",
    "close": "Close"
  },
  "theme": {
    "light": "Light",
    "dark": "Dark",
    "system": "System"
  },
  "language": {
    "fr": "Français",
    "en": "English",
    "switch": "Switch language"
  }
}
```

## Utilisation dans les composants

```vue
<script setup lang="ts">
const { t, locale, locales, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

function toggleLocale() {
  const next = locale.value === 'fr' ? 'en' : 'fr'
  setLocale(next)
}
</script>

<template>
  <!-- Traduction simple -->
  <h1>{{ t('landing.title') }}</h1>

  <!-- Traduction avec interpolation -->
  <p>{{ t('dashboard.welcome', { name: user?.name }) }}</p>

  <!-- Sélecteur de langue -->
  <UiButton variant="ghost" size="sm" @click="toggleLocale">
    {{ locale === 'fr' ? '🇫🇷' : '🇬🇧' }}
    {{ locale === 'fr' ? 'FR' : 'EN' }}
  </UiButton>

  <!-- Navigation avec locale -->
  <NuxtLink :to="switchLocalePath('fr')">Français</NuxtLink>
  <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
</template>
```

## SEO automatique

Avec `seo: true`, le module ajoute automatiquement dans le `<head>` :

```html
<link rel="alternate" hreflang="fr" href="https://monsite.fr/ma-page" />
<link rel="alternate" hreflang="en" href="https://monsite.fr/en/ma-page" />
<link rel="alternate" hreflang="x-default" href="https://monsite.fr/ma-page" />
```

## Comment désactiver / supprimer

| Action | Étapes |
|--------|--------|
| Désactiver temporairement | Retirer `@nuxtjs/i18n` des `modules` dans `nuxt.config.ts` |
| Supprimer | `bun remove @nuxtjs/i18n` + supprimer `app/locales/` + retirer `useI18n()` des composants |

---

## 🧭 Navigation du dashboard admin

Avec tous les packages en place, le dashboard admin se structure ainsi :

```
/admin
├── index.vue              # Vue d'ensemble (métriques clés, santé app)
├── web-vitals.vue         # Web Vitals (LCP, CLS, INP, FCP, TTFB)
├── users.vue              # Gestion utilisateurs (si admin)
└── settings.vue           # Paramètres globaux

/user
└── index.vue              # Dashboard utilisateur
```

---

## 📊 Tableau récapitulatif final

| # | Package | Rôle | Module Nuxt | Commande |
|---|---------|------|-------------|----------|
| 1 | **Pinia** | State management | `@pinia/nuxt` | `bun x nuxi module add pinia` |
| 2 | **pinia-plugin-unstorage** | Persistance stores | Plugin Pinia | `bun add pinia-plugin-unstorage` |
| 3 | **nuxt-oidc-auth** | Auth OIDC (Keycloak, Google, GitHub, Logto) | `nuxt-oidc-auth` | `bun x nuxi module add nuxt-oidc-auth` |
| 4 | **nuxt-authorization** | Permissions (Spatie-like) | `nuxt-authorization` | `bun x nuxi module add nuxt-authorization` |
| 5 | **@sentry/nuxt** | Monitoring erreurs | `@sentry/nuxt` | `bun x nuxi module add @sentry/nuxt` |
| 6 | **@nuxtjs/web-vitals** | Métriques performance | `@nuxtjs/web-vitals` | `bun x nuxi module add web-vitals` |
| 7 | **@dargmuesli/nuxt-cookie-control** | Bannière cookies RGPD | `@dargmuesli/nuxt-cookie-control` | `bun x nuxi module add cookie-control` |
| 8 | **@nuxtjs/i18n** | Internationalisation (fr + en) | `@nuxtjs/i18n` | `bun x nuxi module add i18n` |

---

## 🔄 Flux d'adoption

```
Phase 1 — Fondations (Jour 1)
├── bun x nuxi module add pinia
├── bun add pinia-plugin-unstorage
├── bun x nuxi module add nuxt-oidc-auth
├── bun x nuxi module add nuxt-authorization
└── bun x nuxi module add i18n
    → Créer app/stores/, app/locales/fr.json + en.json
    → Configurer Keycloak (ou Google/GitHub/Logto)
    → Définir les abilities
    → Remplacer les textes en dur par t('...')

Phase 2 — Production readiness
├── bun x nuxi module add @sentry/nuxt
├── bun x nuxi module add web-vitals
├── bun x nuxi module add cookie-control
    → Configurer SENTRY_DSN
    → Créer server/api/web-vitals.post.ts
    → Créer app/pages/admin/web-vitals.vue
    → Ajouter <CookieControl locale="fr" /> dans app.vue

Phase 3 — Scaling (optionnel, si le besoin émerge)
├── bun x nuxi module add nuxt-umami       # Analytics
├── bun add @pinia/colada                   # Data fetching avancé
└── bun add -D @oro.ad/nuxt-claude-devtools # DX en développement
```

---

## 🗑️ Désactiver ou supprimer un package — Résumé rapide

| Package | Désactiver | Supprimer |
|---------|-----------|-----------|
| Pinia | Retirer `@pinia/nuxt` des modules | `bun remove @pinia/nuxt` + supprimer `app/stores/` |
| pinia-plugin-unstorage | Supprimer `app/plugins/pinia-unstorage.ts` | `bun remove pinia-plugin-unstorage` |
| nuxt-oidc-auth | Retirer `nuxt-oidc-auth` des modules | `bun remove nuxt-oidc-auth` + supprimer bloc `oidc` |
| nuxt-authorization | Retirer `nuxt-authorization` des modules + supprimer plugins `authorization-*` | `bun remove nuxt-authorization` |
| @sentry/nuxt | `sentry: { disabled: true }` | `bun remove @sentry/nuxt` |
| @nuxtjs/web-vitals | `webVitals: { disabled: true }` | `bun remove @nuxtjs/web-vitals` + supprimer routes/pages associées |
| @dargmuesli/nuxt-cookie-control | Retirer `<CookieControl>` de `app.vue` + retirer des modules | `bun remove @dargmuesli/nuxt-cookie-control` |
| @nuxtjs/i18n | Retirer `@nuxtjs/i18n` des modules | `bun remove @nuxtjs/i18n` + supprimer `app/locales/` |

---

## 📁 Fichier généré

- **Emplacement** : `PACKAGES_ANALYSIS.md`
- **Date** : 11 juin 2026
- **Packages vérifiés** : 17/17 via `agent-browser`
- **Package manager** : Bun
