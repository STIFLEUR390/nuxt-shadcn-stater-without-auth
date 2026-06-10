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

> 💡 Alternatives : tu peux aussi utiliser `<NuxtPwaManifest />` (même comportement) ou `<NuxtPwaAssets />` (plus complet — injecte aussi les liens favicon, apple-touch-icon et theme-color). Si tu utilises `<NuxtPwaAssets />`, tu n'as pas besoin d'ajouter manuellement les balises `<link>` dans `useHead`.

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

> ⚠️ En dev avec `enabled: true`, le service worker n'est **pas** enregistré automatiquement — son code est juste compilé. Pour tester en conditions réelles, fais un build + preview.

> 💡 Avec la stratégie `injectManifest`, tu **dois** utiliser `type: 'module'` si ton service worker utilise `import` plutôt que `importScripts`.

### Activer l'invite d'installation personnalisée

Par défaut, le navigateur affiche sa propre popup d'installation. Tu peux la contrôler :

```ts
pwa: {
  client: {
    installPrompt: true,
  },
}
```

Puis dans un composant :

```vue
<script setup>
const { $pwa } = useNuxtApp()

function handleInstall() {
  $pwa?.install()
}
</script>

<template>
  <button v-if="$pwa?.showInstallPrompt" @click="handleInstall">
    Installer l'application
  </button>
</template>
```

> 💡 Tu peux aussi passer une chaîne à `installPrompt` (ex: `'pwa-install-dismissed'`) — elle sera utilisée comme clé localStorage pour mémoriser si l'utilisateur a refusé l'installation.

---

## 🧠 Concepts avancés

### Stratégies de Service Worker

Deux stratégies sont disponibles via l'option `strategies` :

| Stratégie | Description | Use case |
|-----------|-------------|----------|
| `generateSW` *(défaut)* | Le plugin génère le service worker automatiquement | 95% des cas — precaching géré par Workbox |
| `injectManifest` | Tu écris ton propre service worker, le plugin injecte le precache manifest | Besoins avancés : routing custom, stratégies de cache fines |

```ts
// Stratégie par défaut (pas besoin de la spécifier)
pwa: {
  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
  },
}

// Stratégie avancée
pwa: {
  strategies: 'injectManifest',
  srcDir: 'app',
  filename: 'sw.ts',
}
```

Avec `injectManifest`, crée ton service worker dans `app/sw.ts` :

```ts
// app/sw.ts
import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { NetworkFirst, CacheFirst } from 'workbox-strategies'

declare let self: ServiceWorkerGlobalScope

// Precaching des assets statiques
precacheAndRoute(self.__WB_MANIFEST)

// Stratégie Network First pour les appels API
registerRoute(
  ({ url }) => url.pathname.startsWith('/api/'),
  new NetworkFirst({ cacheName: 'api-cache' })
)

// Stratégie Cache First pour les images
registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({ cacheName: 'image-cache' })
)
```

> ⚠️ Avec `injectManifest`, installe `workbox-precaching`, `workbox-routing` et `workbox-strategies` en devDependencies.

### L'API `$pwa` — référence complète

Le module `@vite-pwa/nuxt` injecte `$pwa` dans l'app Nuxt. Voici toutes les propriétés disponibles :

```ts
interface PwaInjection {
  // État d'installation
  isPWAInstalled: Ref<boolean>      // L'app est-elle installée en PWA ?
  isInstalled: boolean              // ⚠️ déprécié, utiliser isPWAInstalled

  // Prompt d'installation
  showInstallPrompt: Ref<boolean>   // Afficher le bouton d'installation ?
  cancelInstall: () => void         // Annuler le prompt
  install: () => Promise<void>      // Déclencher l'installation

  // État du Service Worker
  swActivated: Ref<boolean>         // SW activé avec succès ?
  registrationError: Ref<boolean>   // Erreur d'enregistrement ?
  offlineReady: Ref<boolean>        // App prête pour le offline ?
  needRefresh: Ref<boolean>         // Nouvelle version disponible ?

  // Actions
  updateServiceWorker: (reloadPage?: boolean) => Promise<void>
  cancelPrompt: () => Promise<void>
  getSWRegistration: () => ServiceWorkerRegistration | undefined
}
```

Exemple d'utilisation complète dans `app.vue` :

```vue
<script setup lang="ts">
const { $pwa } = useNuxtApp()
const toast = useToast() // ou vue-sonner

onMounted(() => {
  if ($pwa?.offlineReady) {
    toast.success('Application prête pour une utilisation hors-ligne')
  }
  if ($pwa?.registrationError) {
    toast.error('Erreur lors de l\'enregistrement du Service Worker')
  }
})

function handleRefresh() {
  $pwa?.updateServiceWorker()
}
</script>

<template>
  <div
    v-if="$pwa?.needRefresh"
    class="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-primary px-4 py-3 text-primary-foreground shadow-lg"
  >
    <span>Nouvelle version disponible</span>
    <UiButton size="sm" variant="secondary" class="ml-3" @click="handleRefresh">
      Mettre à jour
    </UiButton>
    <UiButton size="sm" variant="ghost" class="ml-1" @click="$pwa.cancelPrompt()">
      Plus tard
    </UiButton>
  </div>
</template>
```

### Mise à jour périodique du Service Worker

Pour vérifier périodiquement la présence d'une nouvelle version (utile si l'utilisateur garde l'onglet ouvert longtemps) :

```vue
<script setup>
import { registerSW } from 'virtual:pwa-register'

const intervalMS = 60 * 60 * 1000 // 1 heure

const updateSW = registerSW({
  onRegisteredSW(swUrl, registration) {
    if (!registration) return

    setInterval(async () => {
      // Éviter de vérifier si une installation est en cours
      if (registration.installing || !navigator) return

      // Ne pas vérifier si hors-ligne
      if ('connection' in navigator && !navigator.onLine) return

      // Vérifier si le SW a changé
      const resp = await fetch(swUrl, {
        cache: 'no-store',
        headers: { 'cache': 'no-store', 'cache-control': 'no-cache' },
      })

      if (resp?.status === 200)
        await registration.update()
    }, intervalMS)
  },
})
</script>
```

> 💡 Tu peux aussi utiliser `pwa.client.periodicSyncForUpdates` (en secondes) pour activer la sync périodique directement dans la config.

### Gestion avancée du cache

#### Inclure d'autres types de fichiers

Par défaut, seuls `js`, `css` et `html` sont précachés. Ajoute d'autres extensions :

```ts
pwa: {
  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,woff2,json}'],
  },
}
```

#### Inclure des assets statiques spécifiques

```ts
pwa: {
  includeAssets: ['favicon.ico', 'apple-touch-icon-180x180.png', 'fonts/*.woff2'],
  includeManifestIcons: true, // Inclure les icônes du manifest dans le precache (défaut: true)
}
```

#### Stratégies de cache Workbox

| Stratégie | Priorité | Usage |
|-----------|----------|-------|
| `NetworkFirst` | Réseau d'abord, fallback cache | API, données fraîches |
| `CacheFirst` | Cache d'abord, fallback réseau | Images, fonts, assets statiques |
| `StaleWhileRevalidate` | Cache + mise à jour en fond | Contenu qui peut être légèrement périmé |
| `NetworkOnly` | Réseau uniquement | Données critiques |
| `CacheOnly` | Cache uniquement | Ressources 100% statiques |

```ts
pwa: {
  workbox: {
    runtimeCaching: [
      {
        urlPattern: ({ url }) => url.pathname.startsWith('/api/'),
        handler: 'NetworkFirst',
        options: {
          cacheName: 'api-cache',
          expiration: { maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 },
        },
      },
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'image-cache',
          expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 30 },
        },
      },
    ],
  },
}
```

### Prérequis minimaux pour un PWA installable

Pour que ton PWA soit installable et passe les audits Lighthouse, vérifie ces points :

- [x] **HTTPS** — le site doit être servi en HTTPS (sauf localhost)
- [x] **Manifest valide** — `name`, `short_name`, `icons` (192×192 et 512×512), `start_url`
- [x] **Service Worker** — enregistré avec un handler `fetch`
- [x] **Icônes** — minimum 192×192 et 512×512
- [x] **Viewport** — `<meta name="viewport" content="width=device-width,initial-scale=1">`
- [x] **robots.txt** — autoriser le crawl

Crée `public/robots.txt` :

```txt
User-agent: *
Allow: /
```

### Tester le PWA

#### En développement

```bash
# Build + serve
bun run build && bun run preview
```

Ouvre [http://localhost:3000](http://localhost:3000) et utilise :

- **Chrome DevTools** → Onglet **Application** → **Service Workers**
- **Chrome DevTools** → Onglet **Application** → **Manifest**
- **Lighthouse** → Catégorie **PWA**

#### Lighthouse CI (optionnel)

```bash
bun add -D @lhci/cli
npx lhci autorun
```

#### Checklist Lighthouse PWA

| Audit | Exigence |
|-------|----------|
| Enregistre un service worker | ✅ `registerType: 'autoUpdate'` |
| Redirige HTTP vers HTTPS | ✅ Config serveur |
| Répond avec 200 quand offline | ✅ Precaching workbox |
| Contient un manifest valide | ✅ Config `manifest` |
| Icône 192×192 et 512×512 | ✅ Générées avec assets-generator |
| Thème couleur pour la barre d'adresse | ✅ `theme_color` dans manifest |
| Meta viewport | ✅ Présent par défaut dans app.vue |
| Contenu accessible sans JS | ⚠️ À vérifier selon ton contenu |

---

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
    },
    {
      "source": "/registerSW.js",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=0, must-revalidate" }
      ]
    },
    {
      "source": "/assets/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "max-age=31536000, immutable" }
      ]
    }
  ],
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Netlify

Crée un fichier `public/_headers` :

```
/manifest.webmanifest
  Content-Type: application/manifest+json
  Cache-Control: public, max-age=0, must-revalidate

/sw.js
  Cache-Control: public, max-age=0, must-revalidate

/registerSW.js
  Cache-Control: public, max-age=0, must-revalidate

/assets/*
  Cache-Control: max-age=31536000, immutable
```

Et `public/_redirects` :

```
/*  /index.html  200
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
location /registerSW.js {
    add_header Cache-Control "public, max-age=0, must-revalidate";
}
location /manifest.webmanifest {
    add_header Cache-Control "public, max-age=0, must-revalidate";
}
location /assets/ {
    add_header Cache-Control "public, max-age=31536000, immutable";
}
```

### Apache

```apache
<IfModule mod_mime.c>
   AddType application/manifest+json webmanifest
</IfModule>

<Files "sw.js">
    Header set Cache-Control "public, max-age=0, must-revalidate"
</Files>

<Files "manifest.webmanifest">
    Header set Cache-Control "public, max-age=0, must-revalidate"
</Files>
```

---

## 🐛 Dépannage / FAQ

### "Le site ne s'installe pas en PWA"

Vérifie dans Chrome DevTools → Application → Manifest :
- Le manifest est bien chargé (pas d'erreur 404)
- Les icônes sont accessibles
- `display: standalone` est présent
- Le site est servi en **HTTPS**

### "Site cannot be installed: no matching service worker detected"

- Le service worker doit être enregistré et actif
- Vérifie dans DevTools → Application → Service Workers
- Si tu utilises `injectManifest`, assure-toi que le SW inclut `precacheAndRoute(self.__WB_MANIFEST)`

### "Les icônes ne s'affichent pas"

- Vérifie que les fichiers PNG sont bien dans `public/`
- Les chemins dans `manifest.icons` doivent être relatifs à la racine (ex: `pwa-192x192.png`, pas `/public/pwa-192x192.png`)
- Vérifie la taille réelle des images — elle doit correspondre à `sizes`

### "Nouveau contenu non détecté"

- En dev avec `enabled: false`, le PWA n'est pas actif → fais `bun run build && bun run preview`
- Le SW a un cycle de vie : `install` → `waiting` → `activate`. Ouvre DevTools et clique sur "Skip waiting" si nécessaire
- Si `registerType: 'prompt'`, tu dois implémenter la logique de `needRefresh` pour déclencher la mise à jour

### "Erreur 404 sur manifest.webmanifest en dev"

- Avec `devOptions.enabled: false`, le manifest n'est pas généré en dev
- Active `devOptions.enabled: true` ou fais un build complet

### "Le SW ne se désinstalle pas chez les utilisateurs"

- Utilise `selfDestroying: true` (voir section Désactiver)
- **Ne change pas** le nom du service worker (option `filename`)
- Laisse la config PWA intacte, le plugin s'occupe du reste

### "WorkboxError: non-precached-url"

- Tu as oublié d'inclure un type de fichier dans `globPatterns`
- Ajoute l'extension manquante, par exemple : `globPatterns: ['**/*.{js,css,html,ico,png,svg}']`

### "Comment ajouter le PWA à un projet Nuxt existant ?"

```bash
bun add -D @vite-pwa/nuxt
```

Ajoute `@vite-pwa/nuxt` aux modules et configure la section `pwa` dans `nuxt.config.ts`. Ajoute `<VitePwaManifest />` ou `<NuxtPwaAssets />` dans `app.vue`. C'est tout !

---

## 📖 Ressources

- [Documentation @vite-pwa/nuxt](https://vite-pwa-org.netlify.app/frameworks/nuxt)
- [Documentation vite-plugin-pwa](https://vite-pwa-org.netlify.app/guide/)
- [PWA Assets Generator](https://vite-pwa-org.netlify.app/assets-generator/)
- [Workbox Strategies](https://developer.chrome.com/docs/workbox/caching-strategies-overview/)
- [Service Worker Lifecycle](https://web.dev/articles/service-worker-lifecycle)
- [Learn PWA (Google)](https://web.dev/learn/pwa/)
- [PWA Builder](https://www.pwabuilder.com/)
