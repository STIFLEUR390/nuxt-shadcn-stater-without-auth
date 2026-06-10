# Nuxt Shadcn OpenAPI

Application full-stack moderne construite avec **Nuxt 4**, **Vue 3**, **shadcn-vue** (Reka UI), **Tailwind CSS v4** et intégration **OpenAPI** via `nuxt-openapi-hyperfetch`.

## ✨ Fonctionnalités

- 🎨 **UI riche** — 50+ composants shadcn-vue prêts à l'emploi (accordéon, formulaires, tableaux, modales, sidebars, charts, carrousels...)
- 🌗 **Dark mode** — thème clair/sombre natif via `@nuxtjs/color-mode` et variables CSS OKLCH
- 🔐 **Authentification complète** — pages login, signup, mot de passe oublié, réinitialisation, vérification d'email, confirmation
- 📊 **Dashboards** — espaces utilisateur et admin avec sidebar responsive
- 🏠 **Landing page** — page d'accueil SaaS avec sections features, pricing, témoignages, FAQ et CTA
- 🔌 **OpenAPI** — client API auto-généré avec `nuxt-openapi-hyperfetch`
- ✅ **Validation** — formulaires validés avec `vee-validate` + `zod`
- 🧩 **Composition API** — tout en `<script setup lang="ts">` avec TypeScript

## 📦 Stack technique

| Catégorie | Technologie |
|-----------|-------------|
| Framework | [Nuxt 4](https://nuxt.com) |
| UI | [Vue 3.5](https://vuejs.org) |
| Composants | [shadcn-vue](https://www.shadcn-vue.com) / [Reka UI](https://reka-ui.com) |
| Style | [Tailwind CSS v4](https://tailwindcss.com) |
| Icônes | [Lucide](https://lucide.dev) |
| Validation | [vee-validate](https://vee-validate.logaretm.com) + [Zod](https://zod.dev) |
| API Client | [nuxt-openapi-hyperfetch](https://github.com/johannschopplich/nuxt-openapi-hyperfetch) |
| Tableaux | [TanStack Vue Table](https://tanstack.com/table) |
| Carrousel | [embla-carousel-vue](https://embla-carousel.vercel.app) |
| Notifications | [vue-sonner](https://vue-sonner.vercel.app) |
| Utilitaires | [VueUse](https://vueuse.org), clsx, tailwind-merge, class-variance-authority |

## 🚀 Démarrage rapide

### Prérequis

- [Bun](https://bun.sh) (gestionnaire de paquets et runtime)
- Node.js ≥ 18

### Installation

```bash
# Installer les dépendances
bun install
```

### Développement

```bash
# Lancer le serveur de développement
bun dev
```

L'application est accessible sur [http://localhost:3000](http://localhost:3000).

### Build

```bash
# Build production
bun run build

# Génération statique
bun run generate

# Prévisualisation du build
bun run preview
```

## 📁 Structure du projet

```
.
├── app/
│   ├── assets/
│   │   └── css/
│   │       └── tailwind.css          # CSS principal + thème OKLCH
│   ├── components/
│   │   ├── ui/                       # 50+ composants shadcn-vue
│   │   │   ├── accordion/            # Accordéon
│   │   │   ├── alert/                # Alertes
│   │   │   ├── alert-dialog/         # Dialogues d'alerte
│   │   │   ├── avatar/               # Avatars
│   │   │   ├── badge/                # Badges
│   │   │   ├── button/               # Boutons
│   │   │   ├── card/                 # Cartes
│   │   │   ├── chart/                # Graphiques
│   │   │   ├── dialog/               # Modales
│   │   │   ├── dropdown-menu/        # Menus déroulants
│   │   │   ├── form/                 # Formulaires
│   │   │   ├── sidebar/              # Barre latérale
│   │   │   ├── table/                # Tableaux
│   │   │   └── ...                   # +40 autres composants
│   │   ├── AppSidebar.vue            # Sidebar principale
│   │   ├── LoginForm.vue             # Formulaire de connexion
│   │   ├── SignupForm.vue            # Formulaire d'inscription
│   │   ├── ForgotPasswordForm.vue    # Mdp oublié
│   │   ├── LandingHeader.vue         # Header landing page
│   │   └── LandingFooter.vue         # Footer landing page
│   ├── composables/                  # Composables Vue
│   ├── layouts/
│   │   ├── default.vue               # Layout avec sidebar
│   │   ├── auth.vue                  # Layout pages d'auth
│   │   └── landing.vue               # Layout landing page
│   ├── lib/
│   │   └── utils.ts                  # Utilitaire cn() (clsx + tailwind-merge)
│   ├── middleware/                    # Middlewares Nuxt
│   └── pages/
│       ├── index.vue                 # Landing page
│       ├── auth/
│       │   ├── login.vue
│       │   ├── signup.vue
│       │   ├── forgot-password.vue
│       │   ├── reset-password.vue
│       │   ├── verify-email.vue
│       │   └── confirm-password.vue
│       ├── user/
│       │   └── index.vue             # Dashboard utilisateur
│       └── admin/
│           └── index.vue             # Dashboard administrateur
├── public/                           # Assets statiques
├── server/                           # Routes API server-side
├── nuxt.config.ts                    # Configuration Nuxt
├── components.json                   # Configuration shadcn-vue
├── tailwind.config.ts                # Configuration Tailwind
└── package.json
```

## 🎨 Design System

Le design system est configuré dans `components.json` :

- **Style** : `reka-lyra` (shadcn-vue avec Reka UI)
- **Palette** : `mist` (teinte verte subtile)
- **Typographie** : JetBrains Mono
- **Icônes** : Lucide
- **Préfixe composants** : `Ui` (ex: `<UiButton>`, `<UiCard>`)
- **Variables CSS** : activées (mode OKLCH)

## 🔧 Configuration

### Nuxt (`nuxt.config.ts`)

```ts
export default defineNuxtConfig({
  modules: ['shadcn-nuxt', '@nuxtjs/color-mode'],
  colorMode: { classSuffix: '' },    // Classes .light / .dark
  shadcn: {
    prefix: 'Ui',
    componentDir: '@/components/ui',
  },
})
```

### Couleurs (`tailwind.css`)

Les couleurs utilisent l'espace OKLCH avec support clair/sombre natif :

```css
:root {
  --primary: oklch(0.527 0.154 150.069);     /* Vert */
  --background: oklch(1 0 0);                 /* Blanc */
  --foreground: oklch(0.148 0.004 228.8);     /* Presque noir */
}
.dark {
  --primary: oklch(0.448 0.119 151.328);
  --background: oklch(0.148 0.004 228.8);
  --foreground: oklch(0.987 0.002 197.1);
}
```

## 📚 Scripts disponibles

| Commande | Description |
|----------|-------------|
| `bun dev` | Lance le serveur de développement avec HMR |
| `bun run build` | Build de production (SSR) |
| `bun run generate` | Génération statique |
| `bun run preview` | Prévisualise le build de production |

## 🧩 Composants shadcn-vue disponibles

<details>
<summary>Voir la liste complète (50+)</summary>

- **Accordion** — contenu accordéon
- **Alert** — notifications
- **Alert Dialog** — dialogues de confirmation
- **Aspect Ratio** — ratio d'aspect
- **Avatar** — avatars avec fallback
- **Badge** — badges
- **Breadcrumb** — fil d'Ariane
- **Button** — boutons (variants + tailles)
- **Button Group** — groupes de boutons
- **Calendar** — calendrier
- **Card** — cartes
- **Carousel** — carrousel (Embla)
- **Chart** — graphiques (Recharts)
- **Checkbox** — cases à cocher
- **Collapsible** — contenu repliable
- **Combobox** — sélection avec recherche
- **Command** — palette de commandes
- **Context Menu** — menu contextuel
- **Dialog** — modales
- **Drawer** — tiroirs (Vaul)
- **Dropdown Menu** — menus déroulants
- **Empty** — états vides
- **Field** — champs de formulaire
- **Form** — formulaires (vee-validate)
- **Hover Card** — cartes au survol
- **Input** — champs texte
- **Input Group** — groupes de champs
- **Input OTP** — saisie OTP
- **Item** — éléments de liste
- **Kbd** — raccourcis clavier
- **Label** — labels
- **Menubar** — barre de menus
- **Native Select** — select natif
- **Navigation Menu** — menu de navigation
- **Number Field** — champ numérique
- **Pagination** — pagination
- **Pin Input** — saisie PIN
- **Popover** — popovers
- **Progress** — barres de progression
- **Radio Group** — boutons radio
- **Range Calendar** — sélection de plage de dates
- **Resizable** — panneaux redimensionnables
- **Scroll Area** — zone de défilement
- **Select** — liste déroulante
- **Separator** — séparateurs
- **Sheet** — panneaux latéraux
- **Sidebar** — barre latérale complète
- **Skeleton** — états de chargement
- **Slider** — curseurs
- **Sonner** — toasts
- **Spinner** — indicateurs de chargement
- **Stepper** — étapes
- **Switch** — interrupteurs
- **Table** — tableaux (TanStack)
- **Tabs** — onglets
- **Tags Input** — saisie de tags
- **Textarea** — zone de texte
- **Toggle** — boutons toggle
- **Toggle Group** — groupes de toggle
- **Tooltip** — infobulles

</details>

## 🤝 Contribution

1. Fork le projet
2. Crée une branche (`git checkout -b feature/ma-feature`)
3. Commit tes changements (`git commit -m 'feat: ma feature'`)
4. Push (`git push origin feature/ma-feature`)
5. Ouvre une Pull Request

## 📄 Licence

Ce projet est sous licence MIT.
