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

const sent = ref(false)

function onSubmit() {
  sent.value = true
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
          Forgot your password?
        </h1>
        <p class="text-muted-foreground text-sm text-balance">
          Enter your email address and we'll send you a link to reset your
          password.
        </p>
      </div>

      <template v-if="!sent">
        <Field>
          <FieldLabel for="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
          />
        </Field>
        <Field>
          <Button type="submit" class="w-full">
            Send Reset Link
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
              <path
                d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8"
              />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              <path d="M19 16v6" />
              <path d="M16 19h6" />
            </svg>
          </div>
          <h2 class="text-sm font-semibold">Check your email</h2>
          <p class="text-muted-foreground text-sm text-balance">
            If an account exists for that email, we've sent a password reset
            link. Please check your inbox and spam folder.
          </p>
        </div>
        <Field>
          <Button variant="outline" type="button" @click="sent = false">
            Try another email
          </Button>
        </Field>
      </template>

      <FieldDescription class="text-center">
        Remember your password?
        <NuxtLink
          to="/auth/login"
          class="underline underline-offset-4 hover:text-primary"
        >
          Sign in
        </NuxtLink>
      </FieldDescription>
      <FieldDescription class="text-center">
        Don't have an account?
        <NuxtLink
          to="/auth/signup"
          class="underline underline-offset-4 hover:text-primary"
        >
          Sign up
        </NuxtLink>
      </FieldDescription>
    </FieldGroup>
  </form>
</template>
