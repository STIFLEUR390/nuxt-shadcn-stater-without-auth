<template>
  <UiSidebarProvider>
    <AppSidebar />
    <main class="flex-1 w-full">
      <slot />
    </main>
  </UiSidebarProvider>
</template>
