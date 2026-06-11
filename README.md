# Nuxt Modern Starter

Application full-stack moderne construite avec **Nuxt 4**, **Vue 3**, **shadcn-vue** (Reka UI), **Tailwind CSS v4**, **PWA**, **OpenAPI**, et un socle complet de modules production-ready.

> 🔧 Utilisable comme **template GitHub** — consulte le [guide](./guide/) pour personnaliser chaque module.

## ✨ Fonctionnalités

| Catégorie | Package | Description |
|-----------|---------|-------------|
| 🎨 UI | shadcn-vue + Tailwind CSS v4 | 50+ composants, thème OKLCH clair/sombre |
| 🗄️ State | Pinia + unstorage | Store management + persistance (localStorage / Redis) |
| 🔐 Auth | nuxt-oidc-auth | OIDC : Keycloak, GitHub, Logto |
| 🛡️ Permissions | nuxt-authorization | Abilities compatibles API Laravel Spatie |
| 🐛 Monitoring | @sentry/nuxt | Erreurs, tracing, session replay |
| 📊 Perfs | Web Vitals | Dashboard admin LCP/CLS/INP/FCP/TTFB |
| 🍪 RGPD | nuxt-cookie-control | Bannière cookies 35+ langues |
| 🌍 i18n | @nuxtjs/i18n | Français + Anglais, routes localisées, SEO |
| 📱 PWA | @vite-pwa/nuxt | Offline, manifest, icônes, auto-update |
| 🔌 API | nuxt-openapi-hyperfetch | Client OpenAPI auto-généré et typé |
| ✅ Validation | vee-validate + Zod | Formulaires validés côté client |
| 📊 Tableaux | TanStack Vue Table | Tableaux triables, filtrables, paginés |
| 🎠 Carrousel | embla-carousel-vue | Carrousel accessible |
| 🔔 Notifications | vue-sonner | Toasts élégants |

## 📦 Stack technique

| Catégorie | Technologie |
|-----------|-------------|
| Framework | Nuxt 4 |
| UI | Vue 3.5 + shadcn-vue (Reka UI) |
| Style | Tailwind CSS v4 (OKLCH) |
| Icônes | Lucide |
| Store | Pinia 3 + pinia-plugin-unstorage |
| Auth | nuxt-oidc-auth (Keycloak, GitHub, Logto) |
| Permissions | nuxt-authorization |
| Monitoring | @sentry/nuxt |
| Cookies | @dargmuesli/nuxt-cookie-control |
| i18n | @nuxtjs/i18n (fr + en) |
| Validation | vee-validate + Zod |
| API | nuxt-openapi-hyperfetch |
| Tableaux | TanStack Vue Table |
| PWA | @vite-pwa/nuxt |
| Notifications | vue-sonner |

## 🚀 Démarrage rapide

```bash
# 1. Cloner
git clone https://github.com/STIFLEUR390/nuxt-modern-starter.git
cd nuxt-modern-starter

# 2. Installer
bun install

# 3. Configurer l'environnement
cp .env.example .env
# Remplir .env avec les clés Keycloak/GitHub/Logto/Sentry

# 4. Lancer
bun dev
```

L'application est accessible sur [http://localhost:3000](http://localhost:3000).

## 📁 Structure

```
nuxt-modern-starter/
├── app/
│   ├── components/
│   │   ├── ui/                   # 50+ composants shadcn-vue
│   │   └── AppSidebar.vue        # Sidebar i18n + auth
│   ├── stores/
│   │   ├── auth.ts               # Store utilisateur
│   │   └── webVitals.ts          # Store métriques
│   ├── plugins/
│   │   ├── pinia-unstorage.ts    # Persistance stores
│   │   ├── authorization-resolver.ts
│   │   └── authorization-abilities.ts
│   ├── middleware/admin.ts        # Protection admin
│   ├── pages/
│   │   ├── index.vue             # Landing page
│   │   ├── auth/login.vue        # Login multi-providers
│   │   ├── user/index.vue        # Dashboard utilisateur
│   │   └── admin/web-vitals.vue  # Dashboard Web Vitals
│   └── app.vue
├── server/
│   ├── plugins/authorization-resolver.ts
│   └── api/web-vitals/
├── locales/                      # i18n (fr.json, en.json)
├── guide/                        # Documentation complète
├── nuxt.config.ts
├── .env.example
└── package.json
```

## 📚 Documentation

Voir le dossier [`guide/`](./guide/) pour la documentation complète :

| Guide | Sujet |
|-------|-------|
| [State](./guide/state.md) | Pinia & persistance |
| [Auth](./guide/auth.md) | OIDC (Keycloak, GitHub, Logto) |
| [Autorisation](./guide/authorization.md) | Permissions & Spatie |
| [Monitoring](./guide/monitoring.md) | Sentry & Web Vitals |
| [Cookies](./guide/cookies.md) | RGPD |
| [i18n](./guide/i18n.md) | Internationalisation |
| [OpenAPI](./guide/openapi.md) | Client API typé |
| [PWA](./guide/pwa.md) | Progressive Web App |
| [Architecture](./guide/architecture.md) | Full-stack, frontend, API |
| [Env](./guide/env.md) | Variables d'environnement |

## 📜 Licence

MIT
