# Guide du projet

Documentation complète pour configurer, personnaliser et faire évoluer le starter kit.

## 📚 Guides

| Guide | Package | Description |
|-------|---------|-------------|
| [State](./state.md) | Pinia + unstorage | Store management et persistance |
| [Auth](./auth.md) | nuxt-oidc-auth | Authentification OIDC (Keycloak, GitHub, Logto) |
| [Autorisation](./authorization.md) | nuxt-authorization | Permissions & cas d'usage Laravel Spatie |
| [Monitoring](./monitoring.md) | Sentry + Web Vitals | Capture d'erreurs, tracing, métriques de perf |
| [Cookies RGPD](./cookies.md) | nuxt-cookie-control | Bannière de consentement conforme RGPD |
| [i18n](./i18n.md) | @nuxtjs/i18n | Internationalisation français + anglais |
| [OpenAPI](./openapi.md) | nuxt-openapi-hyperfetch | SDK typé, composables, auth, erreurs, BFF |
| [PWA](./pwa.md) | @vite-pwa/nuxt | Progressive Web App, offline, manifest |
| [Architecture](./architecture.md) | — | Full-stack, frontend-only ou API-only |
| [Env](./env.md) | — | Référence des variables d'environnement |

## 🏗️ Architecture

Le template est livré en mode **full-stack Nuxt 4** :

```
app/                          # Frontend
├── components/
│   ├── ui/                   # 50+ composants shadcn-vue
│   └── AppSidebar.vue        # Sidebar avec i18n, auth, permissions
├── stores/                   # Pinia stores
│   ├── auth.ts               # Utilisateur connecté
│   └── webVitals.ts          # Métriques Web Vitals
├── plugins/
│   ├── pinia-unstorage.ts    # Persistance des stores
│   ├── authorization-resolver.ts
│   └── authorization-abilities.ts
├── middleware/
│   └── admin.ts              # Protection admin
├── pages/
│   ├── index.vue             # Landing page
│   ├── auth/login.vue        # Connexion multi-providers
│   ├── user/index.vue        # Dashboard utilisateur
│   └── admin/
│       ├── index.vue         # Dashboard admin
│       └── web-vitals.vue    # Métriques Web Vitals
└── layouts/                  # Layouts (default, auth, landing)

locales/                      # Traductions i18n
├── fr.json
└── en.json

server/                       # Backend Nitro
├── plugins/
│   └── authorization-resolver.ts
└── api/web-vitals/           # Endpoints Web Vitals
    ├── post.ts               # POST /api/web-vitals
    └── list.get.ts           # GET /api/web-vitals/list
```

## 📦 Modules installés

| Module | Version | Statut |
|--------|---------|--------|
| @pinia/nuxt | 0.11.3 | ✅ |
| pinia-plugin-unstorage | 1.0.0-beta.1 | ✅ |
| nuxt-oidc-auth | 1.0.0-beta.11 | ✅ (Keycloak, GitHub, Logto) |
| nuxt-authorization | 0.3.5 | ✅ |
| @sentry/nuxt | 10.57.0 | ⏸️ Désactivé en dev |
| @dargmuesli/nuxt-cookie-control | 9.1.29 | ✅ |
| @nuxtjs/i18n | 10.4.0 | ✅ |
| shadcn-nuxt | 2.5.1 | ✅ |
| @nuxtjs/color-mode | 4.0.1 | ✅ |
| @vite-pwa/nuxt | 1.1.1 | ✅ |
| nuxt-openapi-hyperfetch | 2.0.4 | ✅ |

## 🚀 Démarrage

```bash
cp .env.example .env   # Remplir les variables
bun dev                # http://localhost:3000
```
