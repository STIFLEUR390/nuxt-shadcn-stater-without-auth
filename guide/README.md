# Guide du projet

Ce dossier contient les guides pour configurer, personnaliser et faire évoluer le projet template.

## 📚 Guides disponibles

| Guide | Description |
|-------|-------------|
| [PWA](./pwa.md) | Configurer, personnaliser ou supprimer le support PWA |
| [Architecture](./architecture.md) | Choisir entre app full-stack, frontend-only ou API-only |
| [OpenAPI](./openapi.md) | SDK typé, composables, auth (classic + Keycloak), erreurs, BFF, connecteurs |

## 🏗️ Architecture par défaut

Le template est livré en mode **full-stack Nuxt** avec :

- **Frontend** : pages Vue, layouts, composants shadcn-vue
- **Backend** : dossier `server/` pour les routes API Nitro
- **PWA** : module `@vite-pwa/nuxt` activé avec `autoUpdate`
- **OpenAPI** : client API auto-généré via `nuxt-openapi-hyperfetch`

Tu peux adapter cette architecture selon tes besoins. Voir le [guide Architecture](./architecture.md).
