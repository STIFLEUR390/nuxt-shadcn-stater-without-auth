import { defineStore } from 'pinia'

export interface AppUser {
  id: string
  email: string
  name: string
  roles?: string[]
  permissions?: string[]
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<AppUser | null>(null)
  const isAuthenticated = computed(() => !!user.value)

  function setUser(payload: AppUser) {
    user.value = { ...payload }
  }

  function patchUser(payload: Partial<AppUser>) {
    if (user.value) {
      user.value = { ...user.value, ...payload }
    }
  }

  function logout() {
    user.value = null
  }

  return { user, isAuthenticated, setUser, patchUser, logout }
})
