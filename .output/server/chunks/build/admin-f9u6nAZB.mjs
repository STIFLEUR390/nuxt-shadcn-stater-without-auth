import { U as executeAsync } from '../nitro/nitro.mjs';
import { i as defineNuxtRouteMiddleware, n as navigateTo } from './server.mjs';
import 'node:http';
import 'node:https';
import 'node:crypto';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'undio';
import 'jose';
import 'consola';
import 'vue-router';
import 'node:url';
import 'vue';
import 'pinia';
import 'perfect-debounce';
import '@vue/shared';
import 'pinia-plugin-unstorage';
import 'vue/server-renderer';
import '@lucide/vue';
import 'vue-sonner';
import 'clsx';
import 'tailwind-merge';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const admin = defineNuxtRouteMiddleware(async () => {
  let __temp, __restore;
  const { can } = useAuthorization();
  const canAccess = ([__temp, __restore] = executeAsync(() => can("manage-dashboard")), __temp = await __temp, __restore(), __temp);
  if (!canAccess) {
    return navigateTo("/auth/login");
  }
});

export { admin as default };
//# sourceMappingURL=admin-f9u6nAZB.mjs.map
