# 🐛 Monitoring — Sentry & Web Vitals

## Packages

| Package | Version | Rôle | Statut |
|---------|---------|------|--------|
| `@sentry/nuxt` | 10.57.0 | Capture d'erreurs, tracing, session replay | ✅ Actif (désactivé en dev) |
| `@nuxtjs/web-vitals` | 0.2.7 | Collecte Core Web Vitals (LCP, CLS, INP, FCP, TTFB) | ❌ Incompatible Nuxt 4 |

## Installation

```bash
bun add @sentry/nuxt
# bun add @nuxtjs/web-vitals  # En attente de compatibilité Nuxt 4
```

---

## Sentry

### Configuration

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@sentry/nuxt'],
  sentry: {
    dsn: process.env.SENTRY_DSN,
    environment: process.env.NODE_ENV || 'production',
    tracesSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
    sourceMapsUploadOptions: {
      org: process.env.SENTRY_ORG,
      project: process.env.SENTRY_PROJECT,
      authToken: process.env.SENTRY_AUTH_TOKEN,
    },
    disabled: process.env.NODE_ENV === 'development',
  },
})
```

### Variables d'environnement

```bash
SENTRY_DSN="https://xxxxxxxxxx@xxxxx.ingest.sentry.io/xxxxxxx"
SENTRY_ORG="mon-organisation"
SENTRY_PROJECT="nuxt-app"
SENTRY_AUTH_TOKEN="sntrys_xxxxxxxxxxxxxxxxxxxxxxxxxx"
```

### Ce que Sentry capture automatiquement

| Source | Erreurs capturées |
|--------|-------------------|
| Frontend (app/) | Erreurs Vue, promesses non gérées, exceptions JS |
| Serveur (server/) | Erreurs API, timeouts, exceptions Nitro |
| Hydratation | Mismatch SSR/client |
| Performance | Traces distribuées, temps de réponse API |
| Session Replay | Rejeu vidéo des sessions avec erreurs |

### Capture manuelle

```ts
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

---

## Web Vitals

> ⚠️ `@nuxtjs/web-vitals` 0.2.7 n'est pas compatible avec Nuxt 4. Le module est installé mais commenté dans les modules. Les routes API et la page dashboard restent prêtes pour le jour où le module sera mis à jour.

### Routes API (prêtes)

| Route | Méthode | Rôle |
|-------|---------|------|
| `/api/web-vitals` | POST | Réceptionne les métriques du navigateur |
| `/api/web-vitals/list` | GET | Liste les métriques (protégé admin) |

### Dashboard admin (prêt)

- **Page** : `app/pages/admin/web-vitals.vue`
- **Store** : `app/stores/webVitals.ts`
- **Protection** : réservé aux utilisateurs avec l'ability `manage-dashboard`

---

## Désactiver / Supprimer Sentry

| Action | Étapes |
|--------|--------|
| Désactiver en dev | Déjà fait (`disabled: process.env.NODE_ENV === 'development'`) |
| Désactiver partout | `sentry: { disabled: true }` |
| Supprimer | `bun remove @sentry/nuxt` + supprimer le bloc `sentry` |

## Désactiver / Supprimer Web Vitals

| Action | Étapes |
|--------|--------|
| Supprimer | `bun remove @nuxtjs/web-vitals` + supprimer `server/api/web-vitals.*.ts` + `app/pages/admin/web-vitals.vue` + `app/stores/webVitals.ts` |
