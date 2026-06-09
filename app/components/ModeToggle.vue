<script setup lang="ts">
import { Moon, Sun, Monitor } from "@lucide/vue"

const colorMode = useColorMode()
</script>

<template>
  <UiDropdownMenu>
    <UiDropdownMenuTrigger as-child>
      <UiButton variant="outline" size="icon">
        <Sun class="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon class="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span class="sr-only">Toggle theme</span>
      </UiButton>
    </UiDropdownMenuTrigger>
    <UiDropdownMenuContent align="end">
      <UiDropdownMenuGroup>
        <UiDropdownMenuItem @click="colorMode.preference = 'light'">
          <Sun />
          Light
        </UiDropdownMenuItem>
        <UiDropdownMenuItem @click="colorMode.preference = 'dark'">
          <Moon />
          Dark
        </UiDropdownMenuItem>
        <UiDropdownMenuItem @click="colorMode.preference = 'system'">
          <Monitor />
          System
        </UiDropdownMenuItem>
      </UiDropdownMenuGroup>
    </UiDropdownMenuContent>
  </UiDropdownMenu>
</template>
