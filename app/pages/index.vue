<script setup lang="ts">
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Cloud,
  CreditCard,
  Layers,
  Shield,
  Star,
  Users,
  Zap,
} from "@lucide/vue"
import LandingHeader from "@/components/LandingHeader.vue"
import LandingFooter from "@/components/LandingFooter.vue"

definePageMeta({
  layout: "landing",
})

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Built on cutting-edge infrastructure with sub-50ms response times worldwide.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "SOC 2 Type II compliant with end-to-end encryption and SSO support.",
  },
  {
    icon: Layers,
    title: "Modular Architecture",
    description:
      "Plug and play components that adapt to your stack without vendor lock-in.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Real-time dashboards with custom reports and AI-powered insights.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Built-in workflows, role-based access, and real-time editing for teams.",
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    description:
      "Deploy on any cloud with auto-scaling, zero-downtime updates, and 99.99% SLA.",
  },
]

const pricingPlans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for small teams getting started.",
    features: [
      "Up to 5 team members",
      "10 GB storage",
      "Basic analytics",
      "Email support",
      "API access",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$79",
    period: "/month",
    description: "For growing teams that need more power.",
    features: [
      "Up to 20 team members",
      "100 GB storage",
      "Advanced analytics",
      "Priority support",
      "API access",
      "Custom integrations",
      "SSO authentication",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with custom needs.",
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "Custom analytics",
      "Dedicated support",
      "Advanced API access",
      "Custom integrations",
      "SSO & SAML",
      "SLA guarantee",
      "On-premise option",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

const testimonials = [
  {
    quote:
      "Acme SaaS transformed how our team collaborates. We shipped 3x faster after adopting it.",
    author: "Sarah Chen",
    role: "CTO, TechFlow Inc.",
    avatar: "SC",
  },
  {
    quote:
      "The analytics alone paid for itself in the first month. We identified bottlenecks we never knew existed.",
    author: "Marcus Rivera",
    role: "VP Engineering, DataSync",
    avatar: "MR",
  },
  {
    quote:
      "Finally, a platform that doesn't force us into a specific workflow. The flexibility is unmatched.",
    author: "Emily Park",
    role: "Head of Product, CloudNine",
    avatar: "EP",
  },
]

const faqs = [
  {
    question: "Can I change plans later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features and pay only the prorated difference. Downgrades take effect at the next billing cycle.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Absolutely! All plans include a 14-day free trial with full access to all features. No credit card required to start.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "Starter plans get email support with 24h response time. Pro plans include priority chat support. Enterprise plans have a dedicated account manager and 1-hour SLA.",
  },
  {
    question: "How do you handle data security?",
    answer:
      "We encrypt data at rest and in transit using AES-256. We're SOC 2 Type II certified and GDPR compliant. All data is backed up across multiple regions.",
  },
  {
    question: "Can I integrate with my existing tools?",
    answer:
      "Yes! We offer native integrations with 200+ tools including Slack, GitHub, Jira, and more. Our REST API and webhooks make custom integrations straightforward.",
  },
]
</script>

<template>
  <div class="flex min-h-svh flex-col">
    <LandingHeader />

    <!-- Hero -->
    <section class="relative overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10"
      />
      <div
        class="container relative mx-auto flex flex-col items-center gap-6 px-4 py-24 text-center sm:py-32"
      >
        <UiBadge variant="secondary" class="rounded-full px-4 py-1.5">
          <span class="mr-1 text-xs">&starf;</span>
          Now available on all plans — AI-powered insights
        </UiBadge>
        <h1
          class="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Build products your
          <span
            class="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
          >
            users love
          </span>
        </h1>
        <p
          class="max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          The all-in-one platform for modern teams. Ship faster, scale smarter,
          and delight your customers with every release.
        </p>
        <div class="flex flex-col gap-3 sm:flex-row">
          <NuxtLink to="/auth/signup">
            <UiButton size="lg" class="gap-2">
              Get Started Free
              <ArrowRight class="size-4" />
            </UiButton>
          </NuxtLink>
          <NuxtLink to="/#features">
            <UiButton variant="outline" size="lg">
              View Features
            </UiButton>
          </NuxtLink>
        </div>
        <p class="text-xs text-muted-foreground">
          No credit card required &middot; 14-day free trial
        </p>
        <div class="mt-4 flex items-center gap-6 text-sm text-muted-foreground">
          <div class="flex items-center gap-1.5">
            <CheckCircle2 class="size-4 text-primary" />
            SOC 2 compliant
          </div>
          <div class="flex items-center gap-1.5">
            <CheckCircle2 class="size-4 text-primary" />
            99.99% uptime SLA
          </div>
          <div class="flex items-center gap-1.5">
            <CheckCircle2 class="size-4 text-primary" />
            GDPR ready
          </div>
        </div>
      </div>
    </section>

    <!-- Trusted by -->
    <section class="border-y border-border/40 py-10">
      <div class="container mx-auto px-4">
        <p
          class="mb-6 text-center text-sm font-medium text-muted-foreground"
        >
          Trusted by innovative teams worldwide
        </p>
        <div
          class="flex flex-wrap items-center justify-center gap-8 opacity-50 grayscale"
        >
          <span class="text-lg font-bold tracking-widest text-muted-foreground">
            TECHFLOW
          </span>
          <span class="text-lg font-bold tracking-widest text-muted-foreground">
            DATASYNC
          </span>
          <span class="text-lg font-bold tracking-widest text-muted-foreground">
            CLOUDNINE
          </span>
          <span class="text-lg font-bold tracking-widest text-muted-foreground">
            NEXUSLAB
          </span>
          <span class="text-lg font-bold tracking-widest text-muted-foreground">
            CORALPAY
          </span>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section id="features" class="py-20 sm:py-28">
      <div class="container mx-auto px-4">
        <div class="mx-auto mb-14 max-w-2xl text-center">
          <h2
            class="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Everything you need to scale
          </h2>
          <p class="mt-4 text-muted-foreground">
            A complete platform with all the tools your team needs to build,
            deploy, and grow.
          </p>
        </div>
        <div
          class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <UiCard
            v-for="feature in features"
            :key="feature.title"
            class="group border-border/60 transition-shadow hover:shadow-md"
          >
            <UiCardHeader>
              <div
                class="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary"
              >
                <component :is="feature.icon" class="size-5" />
              </div>
              <UiCardTitle class="mt-3">{{ feature.title }}</UiCardTitle>
            </UiCardHeader>
            <UiCardContent>
              <p class="text-sm text-muted-foreground">
                {{ feature.description }}
              </p>
            </UiCardContent>
          </UiCard>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="border-y border-border/40 bg-muted/30 py-16">
      <div class="container mx-auto px-4">
        <div
          class="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4"
        >
          <div>
            <div class="text-4xl font-extrabold text-primary">10K+</div>
            <p class="mt-1 text-sm text-muted-foreground">
              Active teams
            </p>
          </div>
          <div>
            <div class="text-4xl font-extrabold text-primary">99.99%</div>
            <p class="mt-1 text-sm text-muted-foreground">
              Uptime SLA
            </p>
          </div>
          <div>
            <div class="text-4xl font-extrabold text-primary">200+</div>
            <p class="mt-1 text-sm text-muted-foreground">
              Integrations
            </p>
          </div>
          <div>
            <div class="text-4xl font-extrabold text-primary">50ms</div>
            <p class="mt-1 text-sm text-muted-foreground">
              Avg. response time
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section id="pricing" class="py-20 sm:py-28">
      <div class="container mx-auto px-4">
        <div class="mx-auto mb-14 max-w-2xl text-center">
          <h2
            class="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Simple, transparent pricing
          </h2>
          <p class="mt-4 text-muted-foreground">
            Choose the plan that fits your team. All plans include a 14-day free
            trial.
          </p>
        </div>
        <div
          class="grid gap-6 lg:grid-cols-3 lg:items-start"
        >
          <UiCard
            v-for="plan in pricingPlans"
            :key="plan.name"
            :class="[
              'relative border-border/60',
              plan.highlighted
                ? 'border-primary/50 shadow-lg ring-1 ring-primary/20'
                : '',
            ]"
          >
            <UiBadge
              v-if="plan.highlighted"
              class="absolute -top-3 left-1/2 -translate-x-1/2"
            >
              Most Popular
            </UiBadge>
            <UiCardHeader>
              <UiCardTitle>{{ plan.name }}</UiCardTitle>
              <UiCardDescription>{{ plan.description }}</UiCardDescription>
            </UiCardHeader>
            <UiCardContent class="space-y-4">
              <div class="flex items-baseline gap-1">
                <span class="text-4xl font-extrabold">{{ plan.price }}</span>
                <span
                  v-if="plan.period"
                  class="text-sm text-muted-foreground"
                >
                  {{ plan.period }}
                </span>
              </div>
              <ul class="space-y-2">
                <li
                  v-for="feature in plan.features"
                  :key="feature"
                  class="flex items-center gap-2 text-sm"
                >
                  <CheckCircle2 class="size-4 text-primary" />
                  {{ feature }}
                </li>
              </ul>
            </UiCardContent>
            <UiCardFooter>
              <UiButton
                :variant="plan.highlighted ? 'default' : 'outline'"
                class="w-full"
              >
                {{ plan.cta }}
              </UiButton>
            </UiCardFooter>
          </UiCard>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section
      id="testimonials"
      class="border-y border-border/40 bg-muted/30 py-20 sm:py-28"
    >
      <div class="container mx-auto px-4">
        <div class="mx-auto mb-14 max-w-2xl text-center">
          <h2
            class="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Loved by teams everywhere
          </h2>
          <p class="mt-4 text-muted-foreground">
            See what our customers have to say about building with Acme SaaS.
          </p>
        </div>
        <div
          class="grid gap-6 md:grid-cols-3"
        >
          <UiCard
            v-for="t in testimonials"
            :key="t.author"
            class="border-border/60"
          >
            <UiCardContent class="pt-6">
              <div class="mb-4 flex gap-0.5">
                <Star
                  v-for="n in 5"
                  :key="n"
                  class="size-4 fill-primary text-primary"
                />
              </div>
              <blockquote class="text-sm leading-relaxed">
                "{{ t.quote }}"
              </blockquote>
            </UiCardContent>
            <UiCardFooter class="border-t border-border/40 pt-4">
              <div class="flex items-center gap-3">
                <UiAvatar class="size-9">
                  <UiAvatarFallback>{{ t.avatar }}</UiAvatarFallback>
                </UiAvatar>
                <div>
                  <p class="text-sm font-medium">{{ t.author }}</p>
                  <p class="text-xs text-muted-foreground">{{ t.role }}</p>
                </div>
              </div>
            </UiCardFooter>
          </UiCard>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="py-20 sm:py-28">
      <div class="container mx-auto px-4">
        <div class="mx-auto mb-14 max-w-2xl text-center">
          <h2
            class="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p class="mt-4 text-muted-foreground">
            Everything you need to know about the platform.
          </p>
        </div>
        <div class="mx-auto max-w-2xl">
          <UiAccordion type="single" collapsible class="w-full">
            <UiAccordionItem
              v-for="(faq, i) in faqs"
              :key="i"
              :value="`item-${i}`"
            >
              <UiAccordionTrigger class="text-left">
                {{ faq.question }}
              </UiAccordionTrigger>
              <UiAccordionContent>
                <p class="text-muted-foreground">
                  {{ faq.answer }}
                </p>
              </UiAccordionContent>
            </UiAccordionItem>
          </UiAccordion>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="border-t border-border/40 py-20 sm:py-28">
      <div class="container mx-auto px-4">
        <div
          class="relative overflow-hidden rounded-2xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-16 sm:py-20"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"
          />
          <div class="relative mx-auto max-w-2xl">
            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to get started?
            </h2>
            <p class="mt-4 text-primary-foreground/80">
              Join thousands of teams already using Acme SaaS to build better
              products. Start your free trial today.
            </p>
            <div
              class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <NuxtLink to="/auth/signup">
                <UiButton
                  variant="secondary"
                  size="lg"
                  class="gap-2"
                >
                  Start Free Trial
                  <ArrowRight class="size-4" />
                </UiButton>
              </NuxtLink>
              <NuxtLink to="/#features">
                <UiButton
                  variant="ghost"
                  size="lg"
                  class="text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Learn More
                </UiButton>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <LandingFooter />
  </div>
</template>
