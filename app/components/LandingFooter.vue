<script setup lang="ts">
import { GalleryVerticalEnd } from "@lucide/vue"
</script>

<template>
  <footer class="border-t border-border/40 bg-background">
    <div class="container mx-auto px-4 py-12">
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <!-- Brand -->
        <div class="space-y-3">
          <NuxtLink to="/" class="flex items-center gap-2 font-semibold">
            <div
              class="bg-primary text-primary-foreground flex size-7 items-center justify-center rounded-md"
            >
              <GalleryVerticalEnd class="size-4" />
            </div>
            <span>Acme SaaS</span>
          </NuxtLink>
          <p class="text-sm text-muted-foreground">
            Build faster, scale smarter. The all-in-one platform for modern
            teams.
          </p>
        </div>

        <!-- Product -->
        <div class="space-y-3">
          <h3 class="text-sm font-semibold">Product</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink
                to="/#features"
                class="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/#pricing"
                class="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </NuxtLink>
            </li>
            <li>
              <a
                href="#"
                class="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Changelog
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Documentation
              </a>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div class="space-y-3">
          <h3 class="text-sm font-semibold">Company</h3>
          <ul class="space-y-2">
            <li>
              <a
                href="#"
                class="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <!-- Legal -->
        <div class="space-y-3">
          <h3 class="text-sm font-semibold">Legal</h3>
          <ul class="space-y-2">
            <li>
              <a
                href="#"
                class="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <UiSeparator class="my-8" />

      <div
        class="flex flex-col items-center justify-between gap-4 sm:flex-row"
      >
        <p class="text-sm text-muted-foreground">
          &copy; {{ new Date().getFullYear() }} Acme SaaS. All rights reserved.
        </p>
        <div class="flex items-center gap-4">
          <a href="#" class="text-muted-foreground hover:text-foreground transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-4"
            >
              <path
                d="M22.46 6c-.85.38-1.78.64-2.73.76 1-.6 1.76-1.54 2.12-2.67-.93.55-1.96.95-3.06 1.17a4.77 4.77 0 0 0-8.13 4.35A13.56 13.56 0 0 1 1.64 4.16a4.77 4.77 0 0 0 1.48 6.37c-.74-.02-1.44-.23-2.05-.57v.06a4.77 4.77 0 0 0 3.83 4.68c-.7.19-1.44.22-2.16.08a4.78 4.78 0 0 0 4.46 3.32A9.58 9.58 0 0 1 0 19.54a13.5 13.5 0 0 0 7.33 2.15c8.8 0 13.6-7.3 13.6-13.63 0-.21 0-.42-.01-.63A9.72 9.72 0 0 0 23.36 5.6a9.6 9.6 0 0 1-2.75.75 4.8 4.8 0 0 0 2.1-2.65"
              />
            </svg>
          </a>
          <a href="#" class="text-muted-foreground hover:text-foreground transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-4"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>
          </a>
          <a href="#" class="text-muted-foreground hover:text-foreground transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-4"
            >
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
