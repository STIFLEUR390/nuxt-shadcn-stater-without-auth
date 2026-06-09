<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
} from "@/components/ui/field"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div :class="cn('flex flex-col gap-6', props.class)">
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
            <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            <path d="M19 16v6" />
            <path d="M16 19h6" />
          </svg>
        </div>
        <h1 class="text-2xl font-bold">
          Check your email
        </h1>
        <p class="text-muted-foreground text-sm text-balance">
          We've sent a verification link to your email address. Please check
          your inbox and click the link to verify your account.
        </p>
      </div>

      <div
        class="flex flex-col items-center gap-2 rounded-lg border border-border bg-muted/30 p-6 text-center"
      >
        <p class="text-muted-foreground text-sm text-balance">
          Didn't receive the email? Check your spam folder or try resending the
          verification email.
        </p>
      </div>

      <Field>
        <Button variant="outline" type="button" class="w-full">
          Resend Verification Email
        </Button>
      </Field>

      <FieldDescription class="text-center">
        Already verified?
        <NuxtLink
          to="/auth/login"
          class="underline underline-offset-4 hover:text-primary"
        >
          Sign in
        </NuxtLink>
      </FieldDescription>
    </FieldGroup>
  </div>
</template>
