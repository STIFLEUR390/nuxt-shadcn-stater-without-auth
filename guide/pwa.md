# Guide PWA (Progressive Web App)

Ce template intègre nativement le support PWA via le module [`@vite-pwa/nuxt`](https://vite-pwa-org.netlify.app/frameworks/nuxt).

## 📦 Installation (déjà faite)

```bash
bun add -D @vite-pwa/nuxt
```

## ⚙️ Configuration actuelle

La configuration se trouve dans `nuxt.config.ts`, section `pwa` :

```ts
pwa: {
  registerType: 'autoUpdate',        // Mise à jour automatique
  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
  },
  manifest: {
    name: 'Nuxt Shadcn App',
    short_name: 'NuxtApp',
    description: '...',
    theme_color: '#ffffff',
    background_color: '#ffffff',
    display: 'standalone',
    icons: [ /* pwa-192x192.png, pwa-512x512.png */ ]
  },
  devOptions: {
    enabled: false,                   // PWA désactivé en dev
  },
}
```

Le composant `<VitePwaManifest />` est déjà présent dans `app/app.vue`.

## 🔧 Personnaliser le PWA

### Changer le nom et la description

Modifie `manifest.name`, `manifest.short_name` et `manifest.description` dans `nuxt.config.ts`.

### Changer les icônes

1. Place tes icônes dans `public/` (ex: `public/icon-192.png`, `public/icon-512.png`)
2. Mets à jour `manifest.icons` dans `nuxt.config.ts` :

```ts
icons: [
  {
    src: 'icon-192x192.png',
    sizes: '192x192',
    type: 'image/png',
  },
  {
    src: 'icon-512x512.png',
    sizes: '512x512',
    type: 'image/png',
  },
  {
    src: 'icon-512x512.png',
    sizes: '512x512',
    type: 'image/png',
    purpose: 'maskable',
  },
]
```

### Générer les assets PWA automatiquement

Installe `@vite-pwa/assets-generator` et utilise-le :

```bash
bun add -D @vite-pwa/assets-generator
npx pwa-assets-generator --preset minimal-2023 public/logo.svg
```

### Passer en mode "prompt" (demander avant mise à jour)

Remplace `registerType: 'autoUpdate'` par `registerType: 'prompt'` :

```ts
pwa: {
  registerType: 'prompt',
  // ...
}
```

Ajoute ensuite la logique de prompt dans ton composant (ex: `app.vue`) :

```vue
<script setup>
const { $pwa } = useNuxtApp()

onMounted(() => {
  if ($pwa?.offlineReady)
    console.log('App prête pour le offline')
})
</script>

<template>
  <div v-if="$pwa?.needRefresh" class="pwa-toast">
    <span>Nouvelle version disponible</span>
    <button @click="$pwa.updateServiceWorker()">
      Mettre à jour
    </button>
  </div>
</template>
```

### Activer le PWA en développement

```ts
pwa: {
  devOptions: {
    enabled: true,
    type: 'module',
  },
}
```

Puis lance avec :

```bash
bun run build && bun run preview
```

## ❌ Désactiver le PWA

Si tu n'as pas besoin de PWA pour ton projet :

### Méthode 1 : Suppression complète

1. **Retire le module** de `nuxt.config.ts` :

```ts
// Avant
modules: ['shadcn-nuxt', '@nuxtjs/color-mode', '@vite-pwa/nuxt'],

// Après
modules: ['shadcn-nuxt', '@nuxtjs/color-mode'],
```

2. **Retire la configuration `pwa`** du bloc de config.

3. **Retire `<VitePwaManifest />`** de `app/app.vue`.

4. **Désinstalle le paquet** :

```bash
bun remove @vite-pwa/nuxt
```

### Méthode 2 : Désactiver temporairement

Ajoute `disabled: true` dans la config PWA pour le désactiver sans tout retirer :

```ts
pwa: {
  disabled: true,
  // le reste de la config reste...
}
```

C'est utile si tu veux le réactiver plus tard sans tout reconfigurer.

### Méthode 3 : Self-destroying (retirer un PWA déjà déployé)

Si ton PWA est déjà en production et que tu veux le retirer proprement :

```ts
pwa: {
  selfDestroying: true,
}
```

Cela remplace le service worker existant par un service worker qui se désinstalle automatiquement chez tous les utilisateurs.

> ⚠️ Ne change surtout pas le nom du service worker (`filename`) quand tu utilises `selfDestroying`.

## 🌐 Déploiement

### Vercel

Crée un fichier `vercel.json` à la racine :

```json
{
  "headers": [
    {
      "source": "/manifest.webmanifest",
      "headers": [
        { "key": "Content-Type", "value": "application/manifest+json" }
      ]
    },
    {
      "source": "/sw.js",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=0, must-revalidate" }
      ]
    }
  ]
}
```

### NGINX

Ajoute le type MIME pour le manifest :

```nginx
types {
  application/manifest+json  webmanifest;
}
```

Et configure le cache :

```nginx
location /sw.js {
    add_header Cache-Control "public, max-age=0, must-revalidate";
}
location /manifest.webmanifest {
    add_header Cache-Control "public, max-age=0, must-revalidate";
}
```

## 📖 Ressources

- [Documentation @vite-pwa/nuxt](https://vite-pwa-org.netlify.app/frameworks/nuxt)
- [Documentation vite-plugin-pwa](https://vite-pwa-org.netlify.app/guide/)
- [PWA Assets Generator](https://vite-pwa-org.netlify.app/assets-generator/)
- [Workbox](https://developer.chrome.com/docs/workbox/)
