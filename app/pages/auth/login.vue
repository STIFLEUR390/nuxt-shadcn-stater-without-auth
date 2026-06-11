<!--
  Page login : choix du provider OIDC
  Keycloak, Google, GitHub, Logto
-->
<script setup lang="ts">
const { t } = useI18n()
const { signIn } = useOidcAuth()

definePageMeta({
  layout: 'auth',
})

const providers = [
  { key: 'keycloak', label: '🔑 Keycloak', variant: 'default' as const },
  { key: 'github', label: '🐙 GitHub', variant: 'outline' as const },
  { key: 'logto', label: '🛡️ Logto', variant: 'outline' as const },
  // Google nécessite le preset 'oidc' (pas encore dans les presets beta)
]
</script>

<template>
  <div class="flex min-h-screen items-center justify-center px-4">
    <UiCard class="w-full max-w-md">
      <UiCardHeader class="text-center">
        <UiCardTitle class="text-2xl">{{ t('auth.login') }}</UiCardTitle>
        <UiCardDescription>
          Choisissez votre méthode de connexion
        </UiCardDescription>
      </UiCardHeader>
      <UiCardContent class="flex flex-col gap-3">
        <UiButton
          v-for="p in providers"
          :key="p.key"
          :variant="p.variant"
          class="w-full"
          @click="signIn(p.key)"
        >
          {{ p.label }}
        </UiButton>
      </UiCardContent>
    </UiCard>
  </div>
</template>
