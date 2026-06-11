import { _ as __nuxt_component_0$1, c as cn } from './server.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { GalleryVerticalEnd } from '@lucide/vue';
import { _ as _sfc_main$3 } from './index-4MyzTv5r.mjs';
import { _ as _sfc_main$6, a as _sfc_main$a, b as _sfc_main$4, c as _sfc_main$8, d as _sfc_main$2$1 } from './index-DaKEDW1D.mjs';
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
  __name: "SignupForm",
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
            _push2(`<div class="flex flex-col items-center gap-1 text-center"${_scopeId}><h1 class="text-2xl font-bold"${_scopeId}> Create your account </h1><p class="text-muted-foreground text-sm text-balance"${_scopeId}> Fill in the form below to create your account </p></div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$a), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$4), { for: "name" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Full Name `);
                      } else {
                        return [
                          createTextVNode(" Full Name ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$2), {
                    id: "name",
                    type: "text",
                    placeholder: "John Doe",
                    required: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$4), { for: "name" }, {
                      default: withCtx(() => [
                        createTextVNode(" Full Name ")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$2), {
                      id: "name",
                      type: "text",
                      placeholder: "John Doe",
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
                  _push3(ssrRenderComponent(unref(_sfc_main$4), { for: "email" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Email `);
                      } else {
                        return [
                          createTextVNode(" Email ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$2), {
                    id: "email",
                    type: "email",
                    placeholder: "m@example.com",
                    required: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$8), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` We&#39;ll use this to contact you. We will not share your email with anyone else. `);
                      } else {
                        return [
                          createTextVNode(" We'll use this to contact you. We will not share your email with anyone else. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$4), { for: "email" }, {
                      default: withCtx(() => [
                        createTextVNode(" Email ")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$2), {
                      id: "email",
                      type: "email",
                      placeholder: "m@example.com",
                      required: ""
                    }),
                    createVNode(unref(_sfc_main$8), null, {
                      default: withCtx(() => [
                        createTextVNode(" We'll use this to contact you. We will not share your email with anyone else. ")
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
                  _push3(ssrRenderComponent(unref(_sfc_main$4), { for: "password" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Password `);
                      } else {
                        return [
                          createTextVNode(" Password ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$2), {
                    id: "password",
                    type: "password",
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
                        createTextVNode(" Password ")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$2), {
                      id: "password",
                      type: "password",
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
                    required: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$8), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Please confirm your password.`);
                      } else {
                        return [
                          createTextVNode("Please confirm your password.")
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
                      required: ""
                    }),
                    createVNode(unref(_sfc_main$8), null, {
                      default: withCtx(() => [
                        createTextVNode("Please confirm your password.")
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
                  _push3(ssrRenderComponent(unref(_sfc_main$3), { type: "submit" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Create Account `);
                      } else {
                        return [
                          createTextVNode(" Create Account ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$3), { type: "submit" }, {
                      default: withCtx(() => [
                        createTextVNode(" Create Account ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$2$1), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Or continue with`);
                } else {
                  return [
                    createTextVNode("Or continue with")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$a), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$3), {
                    variant: "outline",
                    type: "button"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-4"${_scopeId3}><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"${_scopeId3}></path></svg> Sign up with GitHub `);
                      } else {
                        return [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            class: "size-4"
                          }, [
                            createVNode("path", {
                              d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
                              fill: "currentColor"
                            })
                          ])),
                          createTextVNode(" Sign up with GitHub ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$8), { class: "px-6 text-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Already have an account? `);
                        _push4(ssrRenderComponent(_component_NuxtLink, {
                          to: "/auth/login",
                          class: "underline underline-offset-4 hover:text-primary"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Sign in `);
                            } else {
                              return [
                                createTextVNode(" Sign in ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createTextVNode(" Already have an account? "),
                          createVNode(_component_NuxtLink, {
                            to: "/auth/login",
                            class: "underline underline-offset-4 hover:text-primary"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Sign in ")
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
                    createVNode(unref(_sfc_main$3), {
                      variant: "outline",
                      type: "button"
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 24 24",
                          class: "size-4"
                        }, [
                          createVNode("path", {
                            d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
                            fill: "currentColor"
                          })
                        ])),
                        createTextVNode(" Sign up with GitHub ")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$8), { class: "px-6 text-center" }, {
                      default: withCtx(() => [
                        createTextVNode(" Already have an account? "),
                        createVNode(_component_NuxtLink, {
                          to: "/auth/login",
                          class: "underline underline-offset-4 hover:text-primary"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Sign in ")
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
          } else {
            return [
              createVNode("div", { class: "flex flex-col items-center gap-1 text-center" }, [
                createVNode("h1", { class: "text-2xl font-bold" }, " Create your account "),
                createVNode("p", { class: "text-muted-foreground text-sm text-balance" }, " Fill in the form below to create your account ")
              ]),
              createVNode(unref(_sfc_main$a), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$4), { for: "name" }, {
                    default: withCtx(() => [
                      createTextVNode(" Full Name ")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$2), {
                    id: "name",
                    type: "text",
                    placeholder: "John Doe",
                    required: ""
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$a), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$4), { for: "email" }, {
                    default: withCtx(() => [
                      createTextVNode(" Email ")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$2), {
                    id: "email",
                    type: "email",
                    placeholder: "m@example.com",
                    required: ""
                  }),
                  createVNode(unref(_sfc_main$8), null, {
                    default: withCtx(() => [
                      createTextVNode(" We'll use this to contact you. We will not share your email with anyone else. ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$a), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$4), { for: "password" }, {
                    default: withCtx(() => [
                      createTextVNode(" Password ")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$2), {
                    id: "password",
                    type: "password",
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
                    required: ""
                  }),
                  createVNode(unref(_sfc_main$8), null, {
                    default: withCtx(() => [
                      createTextVNode("Please confirm your password.")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$a), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$3), { type: "submit" }, {
                    default: withCtx(() => [
                      createTextVNode(" Create Account ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$2$1), null, {
                default: withCtx(() => [
                  createTextVNode("Or continue with")
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$a), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$3), {
                    variant: "outline",
                    type: "button"
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        class: "size-4"
                      }, [
                        createVNode("path", {
                          d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
                          fill: "currentColor"
                        })
                      ])),
                      createTextVNode(" Sign up with GitHub ")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$8), { class: "px-6 text-center" }, {
                    default: withCtx(() => [
                      createTextVNode(" Already have an account? "),
                      createVNode(_component_NuxtLink, {
                        to: "/auth/login",
                        class: "underline underline-offset-4 hover:text-primary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Sign in ")
                        ]),
                        _: 1
                      })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SignupForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SignupForm = Object.assign(_sfc_main$1, { __name: "SignupForm" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "signup",
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
      _push(ssrRenderComponent(SignupForm, null, null, _parent));
      _push(`</div></div></div><div class="bg-muted relative hidden lg:block"><div class="absolute inset-0 bg-gradient-to-br from-sidebar-primary/20 via-background to-sidebar-primary/10"></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/signup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=signup-sKWHPuJx.mjs.map
