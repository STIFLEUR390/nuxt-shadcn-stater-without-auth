<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <form :class="cn('flex flex-col gap-6', props.class)">
    <FieldGroup>
      <div class="flex flex-col items-center gap-1 text-center">
        <div
          class="flex size-12 items-center justify-center rounded-full bg-primary/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-6 text-primary"
          >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
        <h1 class="text-2xl font-bold">
          Confirm your password
        </h1>
        <p class="text-muted-foreground text-sm text-balance">
          For your security, please enter your current password to continue.
        </p>
      </div>
      <Field>
        <FieldLabel for="password">
          Current Password
        </FieldLabel>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          required
        />
      </Field>
      <Field>
        <Button type="submit" class="w-full">
          Confirm
        </Button>
      </Field>
      <FieldDescription class="text-center">
        <NuxtLink
          to="/auth/login"
          class="underline underline-offset-4 hover:text-primary"
        >
          Back to Sign In
        </NuxtLink>
      </FieldDescription>
    </FieldGroup>
  </form>
</template>
