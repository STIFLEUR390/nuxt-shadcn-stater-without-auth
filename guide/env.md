# 🔑 Variables d'environnement

Copier `.env.example` → `.env` et remplir les valeurs.

```bash
cp .env.example .env
```

## Toutes les variables

| Variable | Obligatoire | Description |
|----------|-------------|-------------|
| `NUXT_PUBLIC_API_BASE_URL` | ✅ | URL de base pour l'API OpenAPI |
| `NUXT_SESSION_SECRET` | ✅ | Clé de chiffrement des sessions OIDC |
| `KEYCLOAK_CLIENT_ID` | Si Keycloak | Client ID OIDC Keycloak |
| `KEYCLOAK_CLIENT_SECRET` | Si Keycloak | Client Secret Keycloak |
| `KEYCLOAK_BASE_URL` | Si Keycloak | URL du royaume Keycloak |
| `GITHUB_CLIENT_ID` | Si GitHub | Client ID OAuth GitHub |
| `GITHUB_CLIENT_SECRET` | Si GitHub | Client Secret GitHub |
| `LOGTO_CLIENT_ID` | Si Logto | Client ID Logto |
| `LOGTO_CLIENT_SECRET` | Si Logto | Client Secret Logto |
| `LOGTO_BASE_URL` | Si Logto | URL de l'instance Logto |
| `SENTRY_DSN` | Si Sentry | DSN du projet Sentry |
| `SENTRY_ORG` | Si Sentry | Organisation Sentry |
| `SENTRY_PROJECT` | Si Sentry | Projet Sentry |
| `SENTRY_AUTH_TOKEN` | Si Sentry | Token d'authentification Sentry |
| `LARAVEL_API_URL` | Si Spatie | URL de l'API Laravel pour les permissions |
| `REDIS_URL` | Si persistance Redis | URL de connexion Redis |

## Fichier `.env.example` complet

```bash
# ── Général
NUXT_PUBLIC_API_BASE_URL="https://jsonplaceholder.typicode.com"
NUXT_SESSION_SECRET="une-phrase-secrete-longue-et-aleatoire"

# ── Keycloak
KEYCLOAK_CLIENT_ID="nuxt-app"
KEYCLOAK_CLIENT_SECRET="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
KEYCLOAK_BASE_URL="http://localhost:8080/realms/mon-realm"

# ── GitHub
GITHUB_CLIENT_ID="Iv23xxxxxxxxxxxx"
GITHUB_CLIENT_SECRET="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

# ── Logto
LOGTO_CLIENT_ID="xxxxxxxxxxxx"
LOGTO_CLIENT_SECRET="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
LOGTO_BASE_URL="http://localhost:3001"

# ── Sentry
SENTRY_DSN="https://xxxxxxxxxx@xxxxx.ingest.sentry.io/xxxxxxx"
SENTRY_ORG="mon-organisation"
SENTRY_PROJECT="nuxt-app"
SENTRY_AUTH_TOKEN="sntrys_xxxxxxxxxxxxxxxxxxxxxxxxxx"

# ── Laravel API (Permissions Spatie)
LARAVEL_API_URL="https://api.monsite.fr"
```
