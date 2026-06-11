import { _ as __nuxt_component_0$1, c as cn } from './server.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { GalleryVerticalEnd } from '@lucide/vue';
import { _ as _sfc_main$3 } from './index-4MyzTv5r.mjs';
import { _ as _sfc_main$6, a as _sfc_main$a, b as _sfc_main$4, c as _sfc_main$8 } from './index-DaKEDW1D.mjs';
import { _ as _sfc_main$2 } from './Input-DpdpNcLa.mjs';
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
import 'class-variance-authority';
import 'reka-ui';
import '@vueuse/core';
import './Separator-2kwi4XBY.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ConfirmPasswordForm",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<form${ssrRenderAttrs(mergeProps({
        class: unref(cn)("flex flex-col gap-6", props.class)
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(_sfc_main$6), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col items-center gap-1 text-center"${_scopeId}><div class="flex size-12 items-center justify-center rounded-full bg-primary/10"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-6 text-primary"${_scopeId}><rect width="18" height="11" x="3" y="11" rx="2" ry="2"${_scopeId}></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"${_scopeId}></path></svg></div><h1 class="text-2xl font-bold"${_scopeId}> Confirm your password </h1><p class="text-muted-foreground text-sm text-balance"${_scopeId}> For your security, please enter your current password to continue. </p></div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$a), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$4), { for: "password" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Current Password `);
                      } else {
                        return [
                          createTextVNode(" Current Password ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$2), {
                    id: "password",
                    type: "password",
                    placeholder: "••••••••",
                    required: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$4), { for: "password" }, {
                      default: withCtx(() => [
                        createTextVNode(" Current Password ")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$2), {
                      id: "password",
                      type: "password",
                      placeholder: "••••••••",
                      required: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$a), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$3), {
                    type: "submit",
                    class: "w-full"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Confirm `);
                      } else {
                        return [
                          createTextVNode(" Confirm ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$3), {
                      type: "submit",
                      class: "w-full"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Confirm ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$8), { class: "text-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "/auth/login",
                    class: "underline underline-offset-4 hover:text-primary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Back to Sign In `);
                      } else {
                        return [
                          createTextVNode(" Back to Sign In ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtLink, {
                      to: "/auth/login",
                      class: "underline underline-offset-4 hover:text-primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Back to Sign In ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "flex flex-col items-center gap-1 text-center" }, [
                createVNode("div", { class: "flex size-12 items-center justify-center rounded-full bg-primary/10" }, [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    class: "size-6 text-primary"
                  }, [
                    createVNode("rect", {
                      width: "18",
                      height: "11",
                      x: "3",
                      y: "11",
                      rx: "2",
                      ry: "2"
                    }),
                    createVNode("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })
                  ]))
                ]),
                createVNode("h1", { class: "text-2xl font-bold" }, " Confirm your password "),
                createVNode("p", { class: "text-muted-foreground text-sm text-balance" }, " For your security, please enter your current password to continue. ")
              ]),
              createVNode(unref(_sfc_main$a), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$4), { for: "password" }, {
                    default: withCtx(() => [
                      createTextVNode(" Current Password ")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$2), {
                    id: "password",
                    type: "password",
                    placeholder: "••••••••",
                    required: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$a), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$3), {
                    type: "submit",
                    class: "w-full"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Confirm ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$8), { class: "text-center" }, {
                default: withCtx(() => [
                  createVNode(_component_NuxtLink, {
                    to: "/auth/login",
                    class: "underline underline-offset-4 hover:text-primary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Back to Sign In ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ConfirmPasswordForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ConfirmPasswordForm = Object.assign(_sfc_main$1, { __name: "ConfirmPasswordForm" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "confirm-password",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid min-h-svh lg:grid-cols-2" }, _attrs))}><div class="flex flex-col gap-4 p-6 md:p-10"><div class="flex justify-center gap-2 md:justify-start">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-2 font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(GalleryVerticalEnd), { class: "size-4" }, null, _parent2, _scopeId));
            _push2(`</div> Acme Inc. `);
          } else {
            return [
              createVNode("div", { class: "bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md" }, [
                createVNode(unref(GalleryVerticalEnd), { class: "size-4" })
              ]),
              createTextVNode(" Acme Inc. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-1 items-center justify-center"><div class="w-full max-w-xs">`);
      _push(ssrRenderComponent(ConfirmPasswordForm, null, null, _parent));
      _push(`</div></div></div><div class="bg-muted relative hidden lg:block"><div class="absolute inset-0 bg-gradient-to-br from-sidebar-primary/20 via-background to-sidebar-primary/10"></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/confirm-password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=confirm-password-D9Q9s9Au.mjs.map
