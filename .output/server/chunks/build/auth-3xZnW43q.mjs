import { _ as __nuxt_component_0 } from './ModeToggle-DCOFDjt8.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './composables-CULDogY5.mjs';
import 'reka-ui';
import '@lucide/vue';
import '@vueuse/core';
import './server.mjs';
import '../nitro/nitro.mjs';
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
import 'pinia';
import 'perfect-debounce';
import '@vue/shared';
import 'pinia-plugin-unstorage';
import 'vue-sonner';
import 'clsx';
import 'tailwind-merge';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import './index-4MyzTv5r.mjs';
import 'class-variance-authority';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ModeToggle = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="fixed top-4 right-4 z-50">`);
  _push(ssrRenderComponent(_component_ModeToggle, null, null, _parent));
  _push(`</div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/auth.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const auth = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { auth as default };
//# sourceMappingURL=auth-3xZnW43q.mjs.map
