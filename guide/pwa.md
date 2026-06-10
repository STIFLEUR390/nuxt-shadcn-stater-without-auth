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

### 🎨 Générer les icônes PWA automatiquement

Le template utilise [`@vite-pwa/assets-generator`](https://vite-pwa-org.netlify.app/assets-generator/) pour produire toutes les icônes requises à partir d'un seul fichier SVG.

#### 1. Installer le générateur

```bash
bun add -D @vite-pwa/assets-generator
```

#### 2. Créer un logo source

Place un fichier SVG dans `public/` (ex: `public/logo.svg`). Voici un exemple minimal :

```svg
<!-- public/logo.svg -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="128" fill="#10b981"/>
  <text x="256" y="340" font-size="320" font-weight="bold"
        font-family="Arial,sans-serif" fill="white" text-anchor="middle">
    N
  </text>
</svg>
```

> 💡 Utilise un SVG comme source — il sera redimensionné sans perte de qualité.

#### 3. Créer la configuration `pwa-assets.config.ts`

```ts
// pwa-assets.config.ts (à la racine du projet)
import {
  defineConfig,
  minimal2023Preset as preset,
} from '@vite-pwa/assets-generator/config'

export default defineConfig({
  headLinkOptions: {
    preset: '2023',
  },
  preset,
  images: ['public/logo.svg'],
})
```

Le preset `minimal-2023` génère :

| Type | Tailles | Nom du fichier |
|------|---------|----------------|
| Icône transparente | 64×64 | `pwa-64x64.png` |
| Icône transparente | 192×192 | `pwa-192x192.png` |
| Icône transparente | 512×512 | `pwa-512x512.png` |
| Icône maskable | 512×512 | `maskable-icon-512x512.png` |
| Apple touch icon | 180×180 | `apple-touch-icon-180x180.png` |
| Favicon ICO | 48×48 | `favicon.ico` |

#### 4. Ajouter le script dans `package.json`

```json
{
  "scripts": {
    "generate-pwa-assets": "pwa-assets-generator"
  }
}
```

#### 5. Lancer la génération

```bash
bun run generate-pwa-assets
```

Toutes les icônes sont créées dans `public/`, prêtes à être utilisées.

#### 6. Mettre à jour `nuxt.config.ts`

Après génération, vérifie que les icônes du manifest pointent bien vers les fichiers produits :

```ts
pwa: {
  manifest: {
    // ...
    icons: [
      {
        src: 'pwa-64x64.png',
        sizes: '64x64',
        type: 'image/png',
      },
      {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: 'maskable-icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  },
}
```

#### 7. (Optionnel) Icône dans `app.vue`

Le générateur CLI affiche aussi les balises `<link>` à ajouter dans le `<head>`. Tu peux les intégrer dans `app.vue` :

```vue
<script setup>
useHead({
  link: [
    { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
    { rel: 'icon', href: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon-180x180.png' },
  ],
})
</script>
```

> ⚠️ Si tu utilises `NuxtPwaAssets` (qui remplace `VitePwaManifest`), ces liens sont injectés automatiquement — pas besoin de `useHead`.

#### Personnaliser le preset

Tu peux créer ton propre preset dans `pwa-assets.config.ts` :

```ts
import { defineConfig } from '@vite-pwa/assets-generator/config'
import type { Preset } from '@vite-pwa/assets-generator/config'

const monPreset: Preset = {
  transparent: {
    sizes: [64, 192, 512],
    favicons: [[48, 'favicon.ico']],
    padding: 0.05,
  },
  maskable: {
    sizes: [512],
    padding: 0.3,
  },
  apple: {
    sizes: [180],
    padding: 0.3,
  },
}

export default defineConfig({
  headLinkOptions: { preset: '2023' },
  preset: monPreset,
  images: ['public/logo.svg'],
})
```

#### Générer les splash screens iOS

Pour ajouter les écrans de démarrage iOS :

```ts
import {
  combinePresetAndAppleSplashScreens,
  defineConfig,
  minimal2023Preset,
} from '@vite-pwa/assets-generator/config'

export default defineConfig({
  headLinkOptions: { preset: '2023' },
  preset: combinePresetAndAppleSplashScreens(minimal2023Preset, {
    padding: 0.3,
    resizeOptions: { background: 'white', fit: 'contain' },
    // Pour les splash screens en mode sombre :
    darkResizeOptions: { background: 'black', fit: 'contain' },
    linkMediaOptions: {
      log: true,
      addMediaScreen: true,
      basePath: '/',
    },
  }),
  images: ['public/logo.svg'],
})
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
