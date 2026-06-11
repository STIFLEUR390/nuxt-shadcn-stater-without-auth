<script setup lang="ts">
import {
  GalleryVerticalEnd,
  Gauge,
  Globe,
  LayoutDashboard,
  LogOut,
  Settings2,
  User,
} from "@lucide/vue";

const props = withDefaults(defineProps<{ collapsible?: 'icon' | 'offcanvas' | 'none' }>(), {
  collapsible: "icon",
});

const { t, locale, setLocale } = useI18n()
const { can } = useAuthorization()
const { isAuthenticated, signOut } = useOidcAuth()
const authStore = useAuthStore()

function toggleLocale() {
  setLocale(locale.value === 'fr' ? 'en' : 'fr')
}

const data = computed(() => ({
  user: {
    name: authStore.user?.name || 'Utilisateur',
    email: authStore.user?.email || '',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    { name: "Acme Inc", logo: GalleryVerticalEnd, plan: "Enterprise" },
  ],
  navMain: [
    {
      title: t('dashboard.overview'),
      url: '/user',
      icon: LayoutDashboard,
      isActive: false,
      items: [] as any[],
    },
    {
      title: t('dashboard.webVitals'),
      url: '/admin/web-vitals',
      icon: Gauge,
      isActive: false,
      items: [] as any[],
      condition: can('manage-dashboard'),
    },
    {
      title: t('dashboard.users'),
      url: '/admin/users',
      icon: User,
      isActive: false,
      items: [] as any[],
      condition: can('manage-users'),
    },
    {
      title: t('dashboard.settings'),
      url: '/settings',
      icon: Settings2,
      isActive: false,
      items: [] as any[],
    },
  ].filter((item) => item.condition !== false),
}))
</script>

<template>
  <UiSidebar v-bind="props">
    <UiSidebarHeader>
      <div class="flex items-center justify-between px-2">
        <span class="text-sm font-semibold">{{ t('app.name') }}</span>
        <UiButton variant="ghost" size="icon" class="size-7" @click="toggleLocale">
          <Globe class="size-4" />
        </UiButton>
      </div>
    </UiSidebarHeader>
    <UiSidebarContent>
      <NavMain :items="data.navMain" />
    </UiSidebarContent>
    <UiSidebarFooter>
      <div class="flex flex-col gap-2">
        <NavUser :user="data.user" />
        <UiButton
          v-if="isAuthenticated"
          variant="ghost"
          size="sm"
          class="w-full justify-start"
          @click="signOut()"
        >
          <LogOut class="mr-2 size-4" />
          {{ t('nav.logout') }}
        </UiButton>
        <UiButton
          v-else
          variant="ghost"
          size="sm"
          class="w-full justify-start"
          as-child
        >
          <NuxtLink to="/auth/login">
            <LogOut class="mr-2 size-4" />
            {{ t('nav.login') }}
          </NuxtLink>
        </UiButton>
      </div>
    </UiSidebarFooter>
    <UiSidebarRail />
  </UiSidebar>
</template>
