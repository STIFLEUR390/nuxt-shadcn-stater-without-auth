<script setup lang="ts">
import { Menu, X, ChevronDown, GalleryVerticalEnd } from "@lucide/vue"
import { ref } from "vue"

const mobileMenuOpen = ref(false)
</script>

<template>
  <header
    class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
  >
    <div class="container mx-auto flex h-16 items-center justify-between px-4">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2 font-semibold">
        <div
          class="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-lg"
        >
          <GalleryVerticalEnd class="size-5" />
        </div>
        <span class="hidden font-bold sm:inline-block">Acme SaaS</span>
      </NuxtLink>

      <!-- Desktop nav -->
      <nav class="hidden md:flex md:items-center md:gap-6">
        <NuxtLink
          to="/#features"
          class="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Features
        </NuxtLink>
        <NuxtLink
          to="/#pricing"
          class="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Pricing
        </NuxtLink>
        <NuxtLink
          to="/#testimonials"
          class="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Testimonials
        </NuxtLink>
        <NuxtLink
          to="/#faq"
          class="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          FAQ
        </NuxtLink>
      </nav>

      <!-- Desktop actions -->
      <div class="hidden md:flex md:items-center md:gap-3">
        <NuxtLink to="/auth/login">
          <UiButton variant="ghost" size="sm">Sign In</UiButton>
        </NuxtLink>
        <NuxtLink to="/auth/signup">
          <UiButton size="sm">Get Started</UiButton>
        </NuxtLink>
        <ModeToggle />
      </div>

      <!-- Mobile toggle -->
      <UiButton
        variant="ghost"
        size="icon"
        class="md:hidden"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <Menu v-if="!mobileMenuOpen" />
        <X v-else />
      </UiButton>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="mobileMenuOpen"
      class="border-t border-border/40 bg-background px-4 pb-4 pt-2 md:hidden"
    >
      <nav class="flex flex-col gap-3">
        <NuxtLink
          to="/#features"
          class="text-sm font-medium text-muted-foreground"
          @click="mobileMenuOpen = false"
        >
          Features
        </NuxtLink>
        <NuxtLink
          to="/#pricing"
          class="text-sm font-medium text-muted-foreground"
          @click="mobileMenuOpen = false"
        >
          Pricing
        </NuxtLink>
        <NuxtLink
          to="/#testimonials"
          class="text-sm font-medium text-muted-foreground"
          @click="mobileMenuOpen = false"
        >
          Testimonials
        </NuxtLink>
        <NuxtLink
          to="/#faq"
          class="text-sm font-medium text-muted-foreground"
          @click="mobileMenuOpen = false"
        >
          FAQ
        </NuxtLink>
        <UiSeparator />
        <NuxtLink to="/auth/login" @click="mobileMenuOpen = false">
          <UiButton variant="outline" class="w-full">Sign In</UiButton>
        </NuxtLink>
        <NuxtLink to="/auth/signup" @click="mobileMenuOpen = false">
          <UiButton class="w-full">Get Started</UiButton>
        </NuxtLink>
        <div class="flex justify-center pt-1">
          <ModeToggle />
        </div>
      </nav>
    </div>
  </header>
</template>
