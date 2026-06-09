<script setup lang="ts">
import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Monitor,
  Moon,
  Sparkles,
  Sun,
} from "@lucide/vue";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { useSidebar } from "@/components/ui/sidebar";

const props = defineProps<{
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}>();

const { isMobile } = useSidebar();
const colorMode = useColorMode();
</script>

<template>
  <UiSidebarMenu>
    <UiSidebarMenuItem>
      <UiDropdownMenu>
        <UiDropdownMenuTrigger as-child>
          <UiSidebarMenuButton
            size="lg"
            class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <Avatar class="h-8 w-8 rounded-lg">
              <AvatarImage :src="user.avatar" :alt="user.name" />
              <AvatarFallback class="rounded-lg"> CN </AvatarFallback>
            </Avatar>
            <div class="grid flex-1 text-left text-sm leading-tight">
              <span class="truncate font-medium">{{ user.name }}</span>
              <span class="truncate text-xs">{{ user.email }}</span>
            </div>
            <ChevronsUpDown class="ml-auto size-4" />
          </UiSidebarMenuButton>
        </UiDropdownMenuTrigger>
        <UiDropdownMenuContent
          class="w-(--reka-dropdown-menu-trigger-width) min-w-56 rounded-lg"
          :side="isMobile ? 'bottom' : 'right'"
          align="end"
          :side-offset="4"
        >
          <UiDropdownMenuLabel class="p-0 font-normal">
            <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
              <Avatar class="h-8 w-8 rounded-lg">
                <AvatarImage :src="user.avatar" :alt="user.name" />
                <AvatarFallback class="rounded-lg"> CN </AvatarFallback>
              </Avatar>
              <div class="grid flex-1 text-left text-sm leading-tight">
                <span class="truncate font-semibold">{{ user.name }}</span>
                <span class="truncate text-xs">{{ user.email }}</span>
              </div>
            </div>
          </UiDropdownMenuLabel>
          <UiDropdownMenuSeparator />
          <UiDropdownMenuGroup>
            <UiDropdownMenuItem>
              <Sparkles />
              Upgrade to Pro
            </UiDropdownMenuItem>
          </UiDropdownMenuGroup>
          <UiDropdownMenuSeparator />
          <UiDropdownMenuGroup>
            <UiDropdownMenuItem>
              <BadgeCheck />
              Account
            </UiDropdownMenuItem>
            <UiDropdownMenuItem>
              <CreditCard />
              Billing
            </UiDropdownMenuItem>
            <UiDropdownMenuItem>
              <Bell />
              Notifications
            </UiDropdownMenuItem>
          </UiDropdownMenuGroup>
          <UiDropdownMenuSeparator />
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
          <UiDropdownMenuSeparator />
          <UiDropdownMenuItem>
            <LogOut />
            Log out
          </UiDropdownMenuItem>
        </UiDropdownMenuContent>
      </UiDropdownMenu>
    </UiSidebarMenuItem>
  </UiSidebarMenu>
</template>
