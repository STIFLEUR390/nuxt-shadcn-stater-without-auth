# Guide OpenAPI — `nuxt-openapi-hyperfetch`

Ce template utilise [`nuxt-openapi-hyperfetch`](https://nuxt-openapi-hyperfetch.netlify.app) pour générer automatiquement un SDK typé et des composables Vue à partir d'un fichier de spécification OpenAPI.

## 📦 Configuration

### Module déjà installé

```bash
bun add -D nuxt-openapi-hyperfetch
```

### Configuration dans `nuxt.config.ts`

```ts
export default defineNuxtConfig({
  modules: ['nuxt-openapi-hyperfetch'],

  openapi: {
    input: './openapi-spec/jsonplaceholder.yaml',   // Fichier OpenAPI source
    output: './openapi',                             // Dossier de sortie du SDK
    generators: ['useFetch', 'useAsyncData', 'connectors'],  // Sorties à générer
    enableAutoImport: true,                          // Auto-import dans les composants
    baseUrl: 'https://jsonplaceholder.typicode.com', // URL de base de l'API
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'https://jsonplaceholder.typicode.com',
    },
  },
})
```

### Fichier OpenAPI source

Place ton fichier `.yaml` ou `.json` dans `openapi-spec/`. Par exemple :

```yaml
# openapi-spec/mon-api.yaml
openapi: '3.0.2'
info:
  title: Mon API
  version: '1.0'
servers:
  - url: https://api.mon-domaine.com/
paths:
  /posts:
    get:
      operationId: listPosts
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Post'
```

> ⚠️ Donne toujours un `operationId` explicite à chaque opération — il détermine le nom du composable généré.

### .gitignore

Ajoute `openapi/` dans `.gitignore` — le dossier est regénéré à chaque build :

```gitignore
openapi/
```

## 🧬 Ce qui est généré

```
openapi/
├── client.gen.ts          # Client HTTP typé
├── sdk.gen.ts             # Fonctions SDK (listPosts, createPost, ...)
├── types.gen.ts           # Types TypeScript (Post, ListPostsData, ...)
├── index.ts               # Point d'entrée
├── client/                # Client bas niveau
├── core/                  # Logique centrale
├── runtime/               # Fonctions d'exécution partagées
└── composables/
    ├── use-fetch/         # Composables useFetch (simples, SSR)
    ├── use-async-data/    # Composables useAsyncData (cache, raw responses)
    └── connectors/        # Composables connecteurs CRUD (optionnels)
```

Avec `enableAutoImport: true`, tous les composables sont automatiquement importables sans `import` explicite.

## 🚀 Utilisation

### Exemple basique — Liste et détail

```vue
<script setup lang="ts">
// Auto-importé — pas besoin d'import !
const { data: posts, pending, error, refresh } = useFetchListPosts({})

const selectedId = ref(1)
const { data: post } = useAsyncDataGetPostById(
  computed(() => ({ path: { postId: selectedId.value } }))
)
</script>

<template>
  <div v-if="pending">Chargement...</div>
  <div v-else-if="error">Erreur : {{ error }}</div>
  <div v-else>
    <ul>
      <li v-for="p in posts" :key="p.id">{{ p.title }}</li>
    </ul>
  </div>
</template>
```

### Création (mutation)

```vue
<script setup lang="ts">
const title = ref('')
const body = ref('')

const { execute: create, pending } = useFetchCreatePost(
  { body: { title: title.value, body: body.value, userId: 1 } },
  {
    immediate: false,
    onSuccess: (post) => console.log('Créé :', post.id),
    onError: (err) => console.error('Erreur création :', err),
  }
)
</script>
```

### Mise à jour

```ts
const { execute: update } = useFetchUpdatePost(
  { path: { postId: 42 }, body: { title: 'Nouveau titre', userId: 1 } },
  { immediate: false }
)
```

### Suppression

```ts
const { execute: del } = useFetchDeletePost(
  { path: { postId: 42 } },
  { immediate: false },
)

async function handleDelete() {
  await del()
  refresh() // Recharger la liste après suppression
}
```

### Réponse brute (headers, status)

Seulement disponible avec `useAsyncData...Raw()` :

```ts
const { data: response } = useAsyncDataListPostsRaw()

console.log(response.value?.status)            // 200
console.log(response.value?.headers)            // Headers
console.log(response.value?.data)              // Le body
```

## 🌐 Gérer plusieurs APIs / services

Quand ton application consomme 2, 3 services différents (ex: une API REST, un CMS headless, un service de paiement), chacun avec sa propre spec OpenAPI et son propre `baseUrl`, voici les approches possibles.

### Approche 1 : Une spec par service (recommandé)

Le module accepte un tableau de configurations. Chaque entrée a son propre fichier OpenAPI, son dossier de sortie et son `baseUrl`.

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-openapi-hyperfetch'],

  openapi: [
    {
      input: './openapi-spec/posts-api.yaml',
      output: './openapi/posts',
      baseUrl: 'https://posts-api.mon-domaine.com',
      generators: ['useFetch', 'useAsyncData'],
    },
    {
      input: './openapi-spec/users-api.yaml',
      output: './openapi/users',
      baseUrl: 'https://users-api.mon-domaine.com',
      generators: ['useFetch', 'useAsyncData', 'connectors'],
    },
    {
      input: './openapi-spec/payment-api.yaml',
      output: './openapi/payment',
      baseUrl: 'https://payment.mon-domaine.com',
      generators: ['useFetch'],
    },
  ],

  runtimeConfig: {
    public: {
      // Fallback global — chaque spec peut override
      apiBaseUrl: 'https://api.mon-domaine.com',
    },
  },
})
```

Structure générée :

```
openapi/
├── posts/
│   ├── client.gen.ts
│   ├── sdk.gen.ts
│   ├── types.gen.ts
│   └── composables/
│       ├── use-fetch/
│       │   └── composables/
│       │       ├── useFetchListPosts.ts
│       │       └── ...
│       └── use-async-data/
│           └── ...
├── users/
│   ├── ...
│   └── composables/
│       ├── use-fetch/...
│       └── connectors/
│           └── useUsersConnector.ts
└── payment/
    └── composables/
        └── use-fetch/...
```

> ⚠️ Chaque service a son propre dossier `output`. Les composables sont auto-importés indépendamment.

### Approche 2 : Une seule spec avec `baseURL` par appel

Si tous tes services sont décrits dans une seule spec ouverte (avec plusieurs `servers`), tu peux override le `baseURL` au cas par cas via le paramètre `baseURL` du composable :

```ts
// Appel vers le serveur de prod
const { data: posts } = useFetchListPosts({}, {
  baseURL: 'https://prod-api.mon-domaine.com',
})

// Appel vers le serveur de staging
const { data: draftPosts } = useFetchListPosts({}, {
  baseURL: 'https://staging-api.mon-domaine.com',
})
```

Ordre de résolution du `baseURL` :
1. `baseURL` passé en option du composable (prioritaire)
2. `baseUrl` configuré dans la section `openapi` de `nuxt.config.ts`
3. `runtimeConfig.public.apiBaseUrl` (fallback global)

### Approche 3 : Runtime switching (prod / staging / local)

Pour basculer entre environnements au runtime :

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      // Utilisé comme fallback par tous les composables générés
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'http://localhost:8080',
    },
  },
})
```

```bash
# .env (local)
NUXT_PUBLIC_API_BASE_URL=http://localhost:8080

# .env.staging
NUXT_PUBLIC_API_BASE_URL=https://staging-api.mon-domaine.com

# .env.production
NUXT_PUBLIC_API_BASE_URL=https://api.mon-domaine.com
```

Ou via un composable helper :

```ts
// composables/useApiBaseUrl.ts
export const useApiBaseUrl = (service: 'posts' | 'users' | 'payment') => {
  const config = useRuntimeConfig()
  const env = useCookie('api-env') // 'prod' | 'staging' | 'dev'

  const urls: Record<string, Record<string, string>> = {
    dev: {
      posts: 'http://localhost:3001',
      users: 'http://localhost:3002',
      payment: 'http://localhost:3003',
    },
    staging: {
      posts: 'https://staging-posts.mon-domaine.com',
      users: 'https://staging-users.mon-domaine.com',
      payment: 'https://staging-payment.mon-domaine.com',
    },
    production: {
      posts: 'https://posts.mon-domaine.com',
      users: 'https://users.mon-domaine.com',
      payment: 'https://payment.mon-domaine.com',
    },
  }

  return urls[env.value ?? 'production'][service]
}
```

Utilisation :

```ts
const apiUrl = useApiBaseUrl('posts')
const { data: posts } = useFetchListPosts({}, { baseURL: apiUrl })
```

### Approche 4 : Auth différente par service

Quand chaque service a sa propre méthode d'authentification, combine les callbacks globaux avec des filtres par URL :

```ts
// plugins/api-callbacks.ts
export default defineNuxtPlugin(() => {
  return {
    provide: {
      getGlobalApiCallbacks: () => [
        // Service Posts : Bearer token classique
        {
          patterns: ['https://posts-api.mon-domaine.com/**'],
          onRequest: ({ headers }) => {
            const token = useCookie('auth-token').value
            return { headers: { ...headers, Authorization: `Bearer ${token}` } }
          },
        },

        // Service Payment : API Key
        {
          patterns: ['https://payment.mon-domaine.com/**'],
          onRequest: ({ headers }) => ({
            headers: {
              ...headers,
              'X-API-Key': useRuntimeConfig().public.paymentApiKey,
            },
          }),
        },

        // Service Users : Keycloak
        {
          patterns: ['https://users-api.mon-domaine.com/**'],
          onRequest: ({ headers }) => {
            const { keycloak } = useKeycloak()
            if (!keycloak.authenticated) throw new Error('Not authenticated')
            return {
              headers: {
                ...headers,
                Authorization: `Bearer ${keycloak.token}`,
              },
            }
          },
          onError: (error) => {
            if (error.status === 401) {
              const { keycloak } = useKeycloak()
              keycloak.login()
              return false
            }
          },
        },

        // Règle globale sans filtre : s'applique à tous
        {
          onError: (error) => {
            if (error.status >= 500) {
              useToast().error('Erreur serveur')
            }
          },
        },
      ],
    },
  }
})
```

### Résumé : quelle approche choisir ?

| Situation | Approche |
|-----------|----------|
| 1 service | Config simple, pas besoin de multi |
| 2-3 services, specs séparées | **Approche 1** (tableau de configs) |
| Même service, environnements différents | **Approche 3** (runtime switching) |
| Auth différente par service | **Approche 4** (callbacks filtrés) |
| Override ponctuel | **Approche 2** (`baseURL` par appel) |

## 🔐 Authentification

### Approche 1 : Par requête (locale)

Ajoute un token `Bearer` via `onRequest` sur chaque appel :

```ts
const token = useCookie('auth-token')

const { data: posts } = useFetchListPosts({}, {
  onRequest: ({ headers }) => ({
    headers: {
      ...headers,
      Authorization: `Bearer ${token.value}`,
    },
  }),
})
```

### Approche 2 : Globale avec `useApiHeaders()`

Crée `composables/useApiHeaders.ts` :

```ts
// composables/useApiHeaders.ts
export const useApiHeaders = () => {
  const token = useCookie('auth-token')

  return {
    ...(token.value ? { Authorization: `Bearer ${token.value}` } : {}),
    'X-Client-Version': '1.0.0',
  }
}
```

Tous les composables générés utilisent automatiquement ces headers.

### Approche 3 : Globale avec plugin `getGlobalApiCallbacks`

Crée `plugins/api-callbacks.ts` :

```ts
// plugins/api-callbacks.ts
export default defineNuxtPlugin(() => {
  return {
    provide: {
      getGlobalApiCallbacks: () => ({
        onRequest: ({ headers }) => {
          const token = useCookie('auth-token').value
          if (!token) return
          return { headers: { ...headers, Authorization: `Bearer ${token}` } }
        },
        onError: (error) => {
          if (error.status === 401) {
            useCookie('auth-token').value = null
            navigateTo('/auth/login')
            return false // Empêche le onError local de s'exécuter aussi
          }
        },
      }),
    },
  }
})
```

### Approche 4 : Authentification Keycloak

Avec Keycloak (OpenID Connect / OAuth 2.0), le flow est le suivant :

#### 1. Installer `keycloak-js`

```bash
bun add keycloak-js
```

#### 2. Initialiser Keycloak dans un composable

```ts
// composables/useKeycloak.ts
import Keycloak from 'keycloak-js'

const keycloak = new Keycloak({
  url: 'https://auth.mon-domaine.com',
  realm: 'mon-realm',
  clientId: 'mon-client',
})

export const useKeycloak = () => {
  const authenticated = ref(false)
  const token = ref<string | null>(null)

  const init = async () => {
    const auth = await keycloak.init({
      onLoad: 'check-sso',
      silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`,
    })
    authenticated.value = auth
    if (auth) token.value = keycloak.token ?? null
  }

  return { keycloak, authenticated, token, init }
}
```

#### 3. Injecter le token Keycloak globalement

```ts
// composables/useApiHeaders.ts
export const useApiHeaders = () => {
  const { token } = useKeycloak()

  return {
    ...(token.value ? { Authorization: `Bearer ${token.value}` } : {}),
  }
}
```

Ou via un plugin :

```ts
// plugins/api-callbacks.ts
export default defineNuxtPlugin(() => {
  const { keycloak } = useKeycloak()

  return {
    provide: {
      getGlobalApiCallbacks: () => ({
        onRequest: ({ headers }) => {
          if (!keycloak.authenticated) {
            keycloak.login()
            throw new Error('Redirecting to login')
          }

          // Rafraîchir le token si expiré
          keycloak.updateToken(30)

          return {
            headers: {
              ...headers,
              Authorization: `Bearer ${keycloak.token}`,
            },
          }
        },
        onError: (error) => {
          if (error.status === 401 || error.status === 403) {
            keycloak.logout()
          }
        },
      }),
    },
  }
})
```

#### 4. Rafraîchissement automatique du token

```ts
// plugins/keycloak-refresh.ts
export default defineNuxtPlugin(() => {
  const { keycloak } = useKeycloak()

  // Rafraîchir le token toutes les 30 secondes si nécessaire
  setInterval(() => {
    if (keycloak.authenticated) {
      keycloak.updateToken(60).catch(() => {
        keycloak.login()
      })
    }
  }, 30_000)
})
```

## ⚠️ Gestion des erreurs

### Locale (par appel)

```ts
const { data, error } = useFetchListPosts({}, {
  onError: (err) => {
    switch (err.status) {
      case 401: return navigateTo('/login')
      case 404: console.warn('Non trouvé')
      case 500: console.error('Erreur serveur')
      default: console.error(err)
    }
  },
})
```

### Globale avec callback `onError`

```ts
// plugins/api-callbacks.ts
export default defineNuxtPlugin(() => {
  const toast = useToast()

  return {
    provide: {
      getGlobalApiCallbacks: () => ({
        onError: (error) => {
          switch (error.status) {
            case 400: toast.error('Requête invalide')
            case 401: navigateTo('/auth/login'); return false
            case 403: toast.error('Accès refusé'); return false
            case 404: toast.error('Ressource introuvable'); return false
            case 422: toast.error('Erreur de validation'); break
            case 500:
            case 502:
            case 503: toast.error('Erreur serveur, réessayez plus tard'); break
            default: toast.error(error.message || 'Erreur inconnue')
          }
        },
      }),
    },
  }
})
```

### Désactiver les callbacks globaux pour un appel

```ts
// Désactiver tout
useFetchGetPublicPosts({}, { skipGlobalCallbacks: true })

// Désactiver seulement onRequest et onError
useFetchListPosts({}, { skipGlobalCallbacks: ['onRequest', 'onError'] })
```

### Logique de retry

```vue
<script setup lang="ts">
const retries = ref(0)
const maxRetries = 3

const { refresh } = useFetchListPosts({}, {
  onError: async (error) => {
    if (error.status >= 500 && retries.value < maxRetries) {
      retries.value++
      await new Promise(r => setTimeout(r, 1000 * 2 ** retries.value))
      refresh()
    }
  },
})
</script>
```

## 🏗️ Architecture — avec ou sans serveur

### Mode frontend-only (appel direct à l'API externe)

Utilisé par défaut dans ce template. Le navigateur appelle directement l'API distante :

```
Browser ──$fetch──▶ https://jsonplaceholder.typicode.com/posts
```

- **Avantage** : Simple, pas de proxy serveur
- **Inconvénient** : CORS requis côté API, tokens exposés au client
- **Config** :

```ts
openapi: {
  baseUrl: 'https://api.externe.com',
  generators: ['useFetch', 'useAsyncData'],
}
```

### Mode BFF (Backend For Frontend) avec `nuxtServer`

Le navigateur appelle les routes serveur Nuxt, qui proxient vers l'API externe :

```
Browser ──▶ Nuxt server (/api/posts) ──▶ https://api.externe.com/posts
```

- **Avantage** : Tokens côté serveur uniquement, pas de CORS, transformation des données
- **Inconvénient** : Latence supplémentaire, un point de plus à maintenir
- **Config** :

```ts
openapi: {
  generators: ['nuxtServer'],
  serverRoutePath: 'server/routes/api',
  enableBff: false, // true pour les transformers et auth context
}
```

Les routes sont générées dans `server/routes/api/` :

```
server/routes/api/
├── posts/
│   ├── index.get.ts        # GET /api/posts
│   ├── index.post.ts       # POST /api/posts
│   └── [postId]/
│       ├── index.get.ts     # GET /api/posts/:postId
│       ├── index.patch.ts   # PATCH /api/posts/:postId
│       └── index.delete.ts  # DELETE /api/posts/:postId
```

### Mode BFF avec transformers

Active `enableBff: true` pour générer les stubs de transformation :

```ts
openapi: {
  generators: ['nuxtServer'],
  enableBff: true,
}
```

Génère en plus :

```
server/
├── auth/
│   ├── context.ts       # Résolution du contexte d'authentification (edit this)
│   └── types.ts         # Interface AuthContext
└── bff/
    └── transformers/
        └── post.ts      # Transformation des données avant le client (edit this)
```

#### Exemple de transformer

```ts
// server/bff/transformers/post.ts
import type { H3Event } from 'h3'
import type { AuthContext } from '~/server/auth/types'

export async function transformPost<T = any>(
  data: T,
  event: H3Event,
  auth: AuthContext | null,
): Promise<T> {
  const post = data as any

  // Enrichir avec des permissions
  return {
    ...post,
    canEdit: auth?.userId === post.ownerId || auth?.roles.includes('admin'),
    canDelete: auth?.roles.includes('admin'),
  } as T
}
```

#### Exemple de contexte d'authentification (JWT)

```ts
// server/auth/context.ts
import { getCookie } from 'h3'
import jwt from 'jsonwebtoken'
import type { AuthContext } from './types'

export async function getAuthContext(event: H3Event): Promise<AuthContext> {
  const token = getCookie(event, 'auth-token')

  if (!token) {
    return { isAuthenticated: false, userId: null, roles: [], permissions: [] }
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any
    return {
      isAuthenticated: true,
      userId: decoded.sub,
      roles: decoded.roles ?? [],
      permissions: decoded.permissions ?? [],
    }
  } catch {
    return { isAuthenticated: false, userId: null, roles: [], permissions: [] }
  }
}
```

#### Variables d'environnement

```bash
# .env
API_BASE_URL=https://api.externe.com
API_SECRET=votre-token-backend
JWT_SECRET=votre-secret-jwt
```

```ts
// nuxt.config.ts
runtimeConfig: {
  apiBaseUrl: process.env.API_BASE_URL,
  apiSecret: process.env.API_SECRET,
}
```

## 🔌 Connecteurs (CRUD headless)

Les connecteurs groupent les opérations CRUD pour une ressource dans un seul composable.

### Activer les connecteurs

```ts
openapi: {
  generators: ['useAsyncData', 'connectors'],
  connectors: {
    strategy: 'hybrid', // ou 'manual'
  },
}
```

### Utilisation

```vue
<script setup lang="ts">
const { getAll, create, update, del } = usePostsConnector()

// Liste avec SSR
const { items, loading, selected } = getAll

// Création avec validation Zod (si schema dans l'OpenAPI)
create.setValues({ status: 'available' })

// Mise à jour
await update.load(5)

// Suppression avec confirmation
del.ui.open(row)

// Coordination : recharger la liste après mutation
create.onSuccess(() => void getAll.load())
update.onSuccess(() => void getAll.load())
del.onSuccess(() => void getAll.load())
</script>

<template>
  <div v-if="loading">Chargement...</div>
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.title }}
      <button @click="update.ui.open(item)">Modifier</button>
      <button @click="del.ui.open(item)">Supprimer</button>
    </li>
  </ul>
</template>
```

### Configuration hybride vs manuelle

```ts
// Stratégie "hybrid" : détection auto + overrides
connectors: {
  strategy: 'hybrid',
  resources: {
    posts: {
      operations: {
        getAll: { operationId: 'listPosts' },
        get: { operationId: 'getPostById' },
        create: { operationId: 'createPost' },
        update: { operationId: 'updatePost' },
        delete: { operationId: 'deletePost' },
      },
    },
  },
}

// Stratégie "manual" : uniquement ce qui est déclaré
connectors: {
  strategy: 'manual',
  resources: {
    posts: {
      operations: {
        getAll: { operationId: 'listPosts' },
        create: { operationId: 'createPost' },
      },
    },
  },
}
```

## 🧪 Tester l'API

### En développement

Lance `bun run dev` et ouvre `/openapi-demo` pour voir la page de démonstration.

### Avec les DevTools

- **Onglet Network** : Vérifie les appels API
- **Console** : Les composables générés loggent les erreurs

### Avec Vitest

```ts
// tests/api/posts.test.ts
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('Posts API', async () => {
  await setup()

  it('retourne la liste des posts', async () => {
    const posts = await $fetch('https://jsonplaceholder.typicode.com/posts')
    expect(Array.isArray(posts)).toBe(true)
    expect(posts.length).toBeGreaterThan(0)
  })
})
```

## 🐛 Dépannage

### "useFetchListPosts is not defined"

- Vérifie que `enableAutoImport: true` est dans la config `openapi`
- Relance `bun run nuxt prepare`

### "Types not found"

- Vérifie que `tsconfig.json` pointe vers les bons paths
- Le dossier `openapi/` doit exister après `nuxt prepare`

### "CORS error"

- En mode frontend-only, l'API externe doit autoriser les CORS
- Solution : passer en mode BFF avec `nuxtServer`

### "Le connecteur ne génère pas certaines opérations"

- Vérifie que l'OpenAPI spec a les bons `operationId`
- Les endpoints sans `operationId` reçoivent des noms générés automatiquement
- En mode `manual`, seules les opérations déclarées sont générées

### "baseUrl n'est pas pris en compte"

- Le `baseURL` est résolu dans l'ordre : option du composable > `openapi.baseUrl` > `runtimeConfig.public.apiBaseUrl`

## 📖 Références

- [Documentation nuxt-openapi-hyperfetch](https://nuxt-openapi-hyperfetch.netlify.app)
- [Guide Getting Started](https://nuxt-openapi-hyperfetch.netlify.app/guide/getting-started)
- [Choosing a Generator](https://nuxt-openapi-hyperfetch.netlify.app/guide/choosing-a-generator)
- [Composables Reference](https://nuxt-openapi-hyperfetch.netlify.app/composables/)
- [Server Routes](https://nuxt-openapi-hyperfetch.netlify.app/server/)
- [Connectors](https://nuxt-openapi-hyperfetch.netlify.app/connectors/)
- [Page de demo](./openapi-demo) (locale, accessible après `bun run dev`)
