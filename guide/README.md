# Guide du projet

Ce dossier contient les guides pour configurer, personnaliser et faire évoluer le projet template.

## 📚 Guides disponibles

| Guide | Description |
|-------|-------------|
| [PWA](./pwa.md) | Configurer, personnaliser ou supprimer le support PWA |
| [Architecture](./architecture.md) | Choisir entre app full-stack, frontend-only ou API-only |
| [OpenAPI](./openapi.md) | SDK typé, composables, auth (classic + Keycloak), erreurs, BFF, connecteurs |
| [Starter Kit](../PACKAGES_ANALYSIS.md) | Guide complet : Pinia, Auth OIDC, Permissions, Sentry, Web Vitals, Cookies RGPD, i18n |

## 🏗️ Architecture par défaut

Le template est livré en mode **full-stack Nuxt** avec :

- **Frontend** : pages Vue, layouts, composants shadcn-vue
- **Backend** : dossier `server/` pour les routes API Nitro
- **State** : Pinia avec persistance via pinia-plugin-unstorage
- **Auth** : nuxt-oidc-auth (Keycloak, GitHub, Logto)
- **Permissions** : nuxt-authorization (compatible API Laravel Spatie)
- **Monitoring** : @sentry/nuxt
- **Cookies RGPD** : @dargmuesli/nuxt-cookie-control
- **i18n** : @nuxtjs/i18n (Français + Anglais)
- **PWA** : module `@vite-pwa/nuxt` activé avec `autoUpdate`
- **OpenAPI** : client API auto-généré via `nuxt-openapi-hyperfetch`

## 📦 Modules installés

| Module | Version | Statut |
|--------|---------|--------|
| @pinia/nuxt | 0.11.3 | ✅ Actif |
| pinia-plugin-unstorage | 1.0.0-beta.1 | ✅ Actif |
| nuxt-oidc-auth | 1.0.0-beta.11 | ✅ Actif (3 providers) |
| nuxt-authorization | 0.3.5 | ✅ Actif |
| @sentry/nuxt | 10.57.0 | ⏸️ Désactivé en dev |
| @nuxtjs/web-vitals | 0.2.7 | ❌ Incompatible Nuxt 4 |
| @dargmuesli/nuxt-cookie-control | 9.1.29 | ✅ Actif |
| @nuxtjs/i18n | 10.4.0 | ✅ Actif |

## 🔑 Fichier d'environnement

Copier `.env.example` vers `.env` et remplir les valeurs :

```bash
cp .env.example .env
```

### Providers OIDC supportés

- ✅ **Keycloak** — presets natifs nuxt-oidc-auth
- ✅ **GitHub** — presets natifs
- ✅ **Logto** — presets natifs
- ⚠️ **Google** — nécessite le preset générique `oidc` (pas encore dans les presets beta)

## 🚀 Démarrage rapide

```bash
bun install
cp .env.example .env  # Puis remplir .env
bun dev
```

Tu peux adapter cette architecture selon tes besoins. Voir le [guide Architecture](./architecture.md).
