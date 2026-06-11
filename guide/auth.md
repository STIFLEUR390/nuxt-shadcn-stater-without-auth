# 🔐 Auth — OIDC (Keycloak, GitHub, Logto)

## Package

| Package | Version | Rôle |
|---------|---------|------|
| `nuxt-oidc-auth` | 1.0.0-beta.11 | Authentification OpenID Connect pour Nuxt SSR |

## Installation

```bash
bun add nuxt-oidc-auth
```

## Providers supportés

| Provider | Preset natif | Statut |
|----------|-------------|--------|
| Keycloak | ✅ | Configuré |
| GitHub | ✅ | Configuré |
| Logto | ✅ | Configuré |
| Google | ⚠️ Preset `oidc` générique | À configurer manuellement |
| Auth0, Microsoft, Apple, Zitadel, Cognito, Entra, PayPal | ✅ | Disponibles |

## Configuration Nuxt

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
        baseUrl: process.env.KEYCLOAK_BASE_URL || 'http://localhost:8080/realms/mon-realm',
        redirectUri: 'http://localhost:3000/auth/callback',
        logoutRedirectUri: 'http://localhost:3000',
      },
      github: {
        clientId: process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      },
      logto: {
        clientId: process.env.LOGTO_CLIENT_ID!,
        clientSecret: process.env.LOGTO_CLIENT_SECRET!,
        baseUrl: process.env.LOGTO_BASE_URL || 'http://localhost:3001',
      },
    },
    middleware: { globalMiddlewareEnabled: false },
  },
})
```

## Variables d'environnement

```bash
# Keycloak
KEYCLOAK_CLIENT_ID="nuxt-app"
KEYCLOAK_CLIENT_SECRET="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
KEYCLOAK_BASE_URL="http://localhost:8080/realms/mon-realm"

# GitHub OAuth
GITHUB_CLIENT_ID="Iv23xxxxxxxxxxxx"
GITHUB_CLIENT_SECRET="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

# Logto
LOGTO_CLIENT_ID="xxxxxxxxxxxx"
LOGTO_CLIENT_SECRET="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
LOGTO_BASE_URL="http://localhost:3001"

# Session
NUXT_SESSION_SECRET="une-phrase-secrete-longue-et-aleatoire"
```

## Composables

```ts
const {
  user,           // Ref<{ sub, email, name, roles?, ... }>
  isAuthenticated,// Computed<boolean>
  signIn,         // (provider?: string) => Promise<void>
  signOut,        // () => Promise<void>
  refreshToken,   // () => Promise<void>
} = useOidcAuth()

// Exemple
await signIn('keycloak')
await signIn('github')
await signIn('logto')
await signOut()
```

## Page login

```vue
<!-- app/pages/auth/login.vue -->
<script setup lang="ts">
const { signIn } = useOidcAuth()
</script>

<template>
  <UiButton @click="signIn('keycloak')">🔑 Keycloak</UiButton>
  <UiButton @click="signIn('github')">🐙 GitHub</UiButton>
  <UiButton @click="signIn('logto')">🛡️ Logto</UiButton>
</template>
```

## Désactiver / Supprimer

| Action | Étapes |
|--------|--------|
| Désactiver | Retirer `nuxt-oidc-auth` des `modules` dans `nuxt.config.ts` |
| Supprimer | `bun remove nuxt-oidc-auth` + supprimer le bloc `oidc` dans `nuxt.config.ts` + supprimer `app/pages/auth/login.vue` |
