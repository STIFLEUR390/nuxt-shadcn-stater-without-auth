# Guide d'architecture

Ce template est livré en mode **full-stack Nuxt 4**, mais tu peux facilement l'adapter selon l'usage souhaité.

## 🏗️ Architecture par défaut (full-stack)

```
nuxt-shadcn-openapi/
├── app/                  # Frontend Vue
│   ├── pages/            # Routes
│   ├── components/       # Composants
│   ├── layouts/          # Layouts
│   └── ...
├── server/               # Backend Nitro
│   └── api/              # Routes API
```

Le mode full-stack te permet de :
- Rendre des pages en SSR (Server-Side Rendering)
- Créer des API routes dans `server/api/`
- Utiliser `useFetch` / `$fetch` pour communiquer avec tes API
- Profiter du client OpenAPI auto-généré

## 🖥️ Mode frontend uniquement

Si tu veux une application **frontend pure** (SPA ou statique) sans serveur Nitro :

### Option A : Nuxt en mode SPA

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  ssr: false,  // Désactive le SSR
  // ...
})
```

Dans ce cas, ton app est une SPA classique. Tu peux supprimer le dossier `server/` si tu ne l'utilises pas.

### Option B : Génération statique

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  // ssr: true par défaut, mais on génère en statique
})
```

Puis lance :

```bash
bun run generate
```

Cela génère un site statique dans `dist/`. Parfait pour Netlify, Vercel, GitHub Pages, etc.

### Option C : Supprimer le serveur

Si tu n'as besoin d'aucune API côté serveur :

1. **Supprime le dossier `server/`**
2. **Supprime le module OpenAPI** si tu ne fais pas d'appels API :

```bash
bun remove nuxt-openapi-hyperfetch
```

3. Si tu n'as plus besoin de `@vite-pwa/nuxt` non plus (pas de PWA), suis le [guide PWA](./pwa.md#-désactiver-le-pwa).

## 🔌 Mode API uniquement (backend headless)

Si tu veux **uniquement le backend Nitro** sans le frontend Vue :

### Option 1 : Nitro standalone

Déplace `server/` dans un projet séparé et utilise [Nitro](https://nitro.unjs.io) directement :

```bash
bun add -D nitropack
```

```ts
// nitro.config.ts
export default defineNitroConfig({
  srcDir: 'server',
})
```

Tu perds l'intégration Nuxt mais gardes toute la puissance de Nitro (API routes, caching, storage...).

### Option 2 : Garder Nuxt mais servir uniquement l'API

Tu peux garder le projet tel quel et ne pas utiliser les pages Vue. Nuxt continuera à servir les routes API dans `server/api/` et l'IHM via les pages. C'est pratique si tu veux une API + une mini UI admin.

## 🔗 Mode API externe (frontend Nuxt + backend séparé)

Si ton backend est un service externe (FastAPI, Express, Go, etc.) :

1. **Configure l'URL de l'API** dans `nuxt.config.ts` :

```ts
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: 'https://api.mon-domaine.com',
    },
  },
})
```

2. **Utilise `$fetch` ou `useFetch`** avec cette URL :

```vue
<script setup>
const config = useRuntimeConfig()
const { data } = await useFetch(`${config.public.apiBase}/users`)
</script>
```

3. **Avec OpenAPI**, configure le client pour pointer vers ton API externe :

```ts
// Dans le fichier de config OpenAPI
export default defineOpenApiClient({
  baseURL: 'https://api.mon-domaine.com',
})
```

4. Tu peux **supprimer le dossier `server/`** si Nuxt ne fait plus office de backend.

## 📊 Tableau comparatif

| Mode | SSR | API Nitro | Pages Vue | Dossier `server/` | Use case |
|------|-----|-----------|-----------|-------------------|----------|
| Full-stack | ✅ | ✅ | ✅ | Conservé | App complète |
| SPA | ❌ | ❌ | ✅ | Supprimé | Frontend pur |
| Statique | → HTML | ❌ | ✅ | Supprimé | Site vitrine |
| API only | ❌ | ✅ | ❌ | Conservé | Backend headless |
| API externe | ✅/- | ❌ | ✅ | Supprimé | Front + backend séparé |

## 🎯 Résumé rapide

| Tu veux... | Action |
|------------|--------|
| Une app full-stack | Ne rien changer ✅ |
| Une SPA sans serveur | `ssr: false` dans `nuxt.config.ts` |
| Un site statique | `bun run generate` |
| Un backend headless | Extraire `server/` avec Nitro standalone |
| Un frontend avec API externe | Ajouter `runtimeConfig.public.apiBase` + supprimer `server/` |
| Désactiver le PWA | Voir [guide PWA](./pwa.md) |
