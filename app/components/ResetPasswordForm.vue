<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { ref } from "vue"
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

const done = ref(false)

function onSubmit() {
  done.value = true
}
</script>

<template>
  <form
    :class="cn('flex flex-col gap-6', props.class)"
    @submit.prevent="onSubmit"
  >
    <FieldGroup>
      <div class="flex flex-col items-center gap-1 text-center">
        <h1 class="text-2xl font-bold">
          Reset your password
        </h1>
        <p class="text-muted-foreground text-sm text-balance">
          Enter a new password for your account.
        </p>
      </div>

      <template v-if="!done">
        <Field>
          <FieldLabel for="password">
            New Password
          </FieldLabel>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            required
          />
          <FieldDescription>
            Must be at least 8 characters long.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel for="confirm-password">
            Confirm Password
          </FieldLabel>
          <Input
            id="confirm-password"
            type="password"
            placeholder="••••••••"
            required
          />
          <FieldDescription>Please confirm your new password.</FieldDescription>
        </Field>
        <Field>
          <Button type="submit" class="w-full">
            Reset Password
          </Button>
        </Field>
      </template>

      <template v-else>
        <div
          class="flex flex-col items-center gap-2 rounded-lg border border-border bg-muted/30 p-6 text-center"
        >
          <div
            class="flex size-10 items-center justify-center rounded-full bg-primary/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-5 text-primary"
            >
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
          <h2 class="text-sm font-semibold">Password updated</h2>
          <p class="text-muted-foreground text-sm text-balance">
            Your password has been successfully reset. You can now sign in with
            your new password.
          </p>
        </div>
        <Field>
          <NuxtLink to="/auth/login">
            <Button variant="default" type="button" class="w-full">
              Go to Sign In
            </Button>
          </NuxtLink>
        </Field>
      </template>
    </FieldGroup>
  </form>
</template>
