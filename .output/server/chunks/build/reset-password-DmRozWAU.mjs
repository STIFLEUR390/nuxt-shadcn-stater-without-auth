import { _ as __nuxt_component_0$1, c as cn } from './server.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, ref, openBlock, createBlock, Fragment, useSSRContext } from 'vue';
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
  __name: "ResetPasswordForm",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    const done = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<form${ssrRenderAttrs(mergeProps({
        class: unref(cn)("flex flex-col gap-6", props.class)
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(_sfc_main$6), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col items-center gap-1 text-center"${_scopeId}><h1 class="text-2xl font-bold"${_scopeId}> Reset your password </h1><p class="text-muted-foreground text-sm text-balance"${_scopeId}> Enter a new password for your account. </p></div>`);
            if (!done.value) {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(unref(_sfc_main$a), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$4), { for: "password" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` New Password `);
                        } else {
                          return [
                            createTextVNode(" New Password ")
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
                    _push3(ssrRenderComponent(unref(_sfc_main$8), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Must be at least 8 characters long. `);
                        } else {
                          return [
                            createTextVNode(" Must be at least 8 characters long. ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$4), { for: "password" }, {
                        default: withCtx(() => [
                          createTextVNode(" New Password ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$2), {
                        id: "password",
                        type: "password",
                        placeholder: "••••••••",
                        required: ""
                      }),
                      createVNode(unref(_sfc_main$8), null, {
                        default: withCtx(() => [
                          createTextVNode(" Must be at least 8 characters long. ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(_sfc_main$a), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$4), { for: "confirm-password" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Confirm Password `);
                        } else {
                          return [
                            createTextVNode(" Confirm Password ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$2), {
                      id: "confirm-password",
                      type: "password",
                      placeholder: "••••••••",
                      required: ""
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$8), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Please confirm your new password.`);
                        } else {
                          return [
                            createTextVNode("Please confirm your new password.")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$4), { for: "confirm-password" }, {
                        default: withCtx(() => [
                          createTextVNode(" Confirm Password ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$2), {
                        id: "confirm-password",
                        type: "password",
                        placeholder: "••••••••",
                        required: ""
                      }),
                      createVNode(unref(_sfc_main$8), null, {
                        default: withCtx(() => [
                          createTextVNode("Please confirm your new password.")
                        ]),
                        _: 1
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
                          _push4(` Reset Password `);
                        } else {
                          return [
                            createTextVNode(" Reset Password ")
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
                          createTextVNode(" Reset Password ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(`<!--[--><div class="flex flex-col items-center gap-2 rounded-lg border border-border bg-muted/30 p-6 text-center"${_scopeId}><div class="flex size-10 items-center justify-center rounded-full bg-primary/10"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-5 text-primary"${_scopeId}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"${_scopeId}></path><path d="m9 12 2 2 4-4"${_scopeId}></path></svg></div><h2 class="text-sm font-semibold"${_scopeId}>Password updated</h2><p class="text-muted-foreground text-sm text-balance"${_scopeId}> Your password has been successfully reset. You can now sign in with your new password. </p></div>`);
              _push2(ssrRenderComponent(unref(_sfc_main$a), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtLink, { to: "/auth/login" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$3), {
                            variant: "default",
                            type: "button",
                            class: "w-full"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Go to Sign In `);
                              } else {
                                return [
                                  createTextVNode(" Go to Sign In ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$3), {
                              variant: "default",
                              type: "button",
                              class: "w-full"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Go to Sign In ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtLink, { to: "/auth/login" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$3), {
                            variant: "default",
                            type: "button",
                            class: "w-full"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Go to Sign In ")
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
              }, _parent2, _scopeId));
              _push2(`<!--]-->`);
            }
          } else {
            return [
              createVNode("div", { class: "flex flex-col items-center gap-1 text-center" }, [
                createVNode("h1", { class: "text-2xl font-bold" }, " Reset your password "),
                createVNode("p", { class: "text-muted-foreground text-sm text-balance" }, " Enter a new password for your account. ")
              ]),
              !done.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createVNode(unref(_sfc_main$a), null, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$4), { for: "password" }, {
                      default: withCtx(() => [
                        createTextVNode(" New Password ")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$2), {
                      id: "password",
                      type: "password",
                      placeholder: "••••••••",
                      required: ""
                    }),
                    createVNode(unref(_sfc_main$8), null, {
                      default: withCtx(() => [
                        createTextVNode(" Must be at least 8 characters long. ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(unref(_sfc_main$a), null, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$4), { for: "confirm-password" }, {
                      default: withCtx(() => [
                        createTextVNode(" Confirm Password ")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$2), {
                      id: "confirm-password",
                      type: "password",
                      placeholder: "••••••••",
                      required: ""
                    }),
                    createVNode(unref(_sfc_main$8), null, {
                      default: withCtx(() => [
                        createTextVNode("Please confirm your new password.")
                      ]),
                      _: 1
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
                        createTextVNode(" Reset Password ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                createVNode("div", { class: "flex flex-col items-center gap-2 rounded-lg border border-border bg-muted/30 p-6 text-center" }, [
                  createVNode("div", { class: "flex size-10 items-center justify-center rounded-full bg-primary/10" }, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      class: "size-5 text-primary"
                    }, [
                      createVNode("path", { d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" }),
                      createVNode("path", { d: "m9 12 2 2 4-4" })
                    ]))
                  ]),
                  createVNode("h2", { class: "text-sm font-semibold" }, "Password updated"),
                  createVNode("p", { class: "text-muted-foreground text-sm text-balance" }, " Your password has been successfully reset. You can now sign in with your new password. ")
                ]),
                createVNode(unref(_sfc_main$a), null, {
                  default: withCtx(() => [
                    createVNode(_component_NuxtLink, { to: "/auth/login" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$3), {
                          variant: "default",
                          type: "button",
                          class: "w-full"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Go to Sign In ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ], 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ResetPasswordForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ResetPasswordForm = Object.assign(_sfc_main$1, { __name: "ResetPasswordForm" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "reset-password",
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
      _push(ssrRenderComponent(ResetPasswordForm, null, null, _parent));
      _push(`</div></div></div><div class="bg-muted relative hidden lg:block"><div class="absolute inset-0 bg-gradient-to-br from-sidebar-primary/20 via-background to-sidebar-primary/10"></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/reset-password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=reset-password-DmRozWAU.mjs.map
