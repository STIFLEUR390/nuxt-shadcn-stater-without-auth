# 🍪 Cookies RGPD — Cookie Control

## Package

| Package | Version | Rôle |
|---------|---------|------|
| `@dargmuesli/nuxt-cookie-control` | 9.1.29 | Bannière de consentement cookies conforme RGPD |

## Installation

```bash
bun add @dargmuesli/nuxt-cookie-control
```

## Configuration

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@dargmuesli/nuxt-cookie-control'],
  cookieControl: {
    closeModalOnClickOutside: true,
    mode: 'consent',        // 'consent' = opt-in, 'info' = informatif
    barPosition: 'bottom-full',

    cookies: {
      necessary: [{
        name: { fr: 'Cookies nécessaires', en: 'Necessary Cookies' },
        description: {
          fr: 'Cookies essentiels au fonctionnement du site.',
          en: 'Essential cookies for the site to function.',
        },
        targetCookieIds: ['nuxt-session', 'oidc-session'],
      }],
      analytics: [{
        name: { fr: 'Cookies analytiques', en: 'Analytics Cookies' },
        description: {
          fr: 'Cookies de mesure d\'audience et performance.',
          en: 'Audience measurement and performance cookies.',
        },
        targetCookieIds: ['_ga', '_ga_*', '_gid'],
      }],
    },

    localeTexts: {
      fr: {
        acceptAll: 'Tout accepter',
        acceptNecessary: 'Accepter les nécessaires',
        barTitle: '🍪 Cookies & confidentialité',
        manageCookies: 'Personnaliser',
        save: 'Enregistrer',
        declineAll: 'Tout refuser',
      },
      en: {
        acceptAll: 'Accept all',
        acceptNecessary: 'Accept necessary',
        barTitle: '🍪 Cookies & Privacy',
        manageCookies: 'Customize',
        save: 'Save',
        declineAll: 'Decline all',
      },
    },
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

## Désactiver / Supprimer

| Action | Étapes |
|--------|--------|
| Désactiver | Retirer `<CookieControl>` de `app.vue` + retirer `@dargmuesli/nuxt-cookie-control` des `modules` |
| Supprimer | `bun remove @dargmuesli/nuxt-cookie-control` |
