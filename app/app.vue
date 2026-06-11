<script setup lang="ts">
import "vue-sonner/style.css"
</script>

<template>
  <div>
    <VitePwaManifest />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UiToaster />
    <CookieControl locale="fr" />
  </div>
</template>
