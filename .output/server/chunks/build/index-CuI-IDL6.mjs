import { _ as _sfc_main$7 } from './index-CqCH2U3_.mjs';
import { _ as __nuxt_component_0$1, c as cn } from './server.mjs';
import { _ as _sfc_main$8 } from './index-4MyzTv5r.mjs';
import { _ as _sfc_main$6$1, a as _sfc_main$1$1, b as _sfc_main$9, d as _sfc_main$4$1, c as _sfc_main$3$1, e as _sfc_main$2$1 } from './CardTitle-DF-CylnM.mjs';
import { _ as _sfc_main$5$1, a as _sfc_main$3$2 } from './index-BPOQrnMz.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode, unref, resolveDynamicComponent, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, renderSlot, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderVNode, ssrInterpolate, ssrRenderSlot, ssrRenderClass } from 'vue/server-renderer';
import { reactiveOmit } from '@vueuse/core';
import { useForwardPropsEmits, AccordionRoot, useForwardProps, AccordionItem, AccordionHeader, AccordionTrigger, AccordionContent } from 'reka-ui';
import { ArrowRight, CheckCircle2, Zap, Shield, Layers, BarChart3, Users, Cloud, Star, ChevronDownIcon, ChevronUpIcon, GalleryVerticalEnd, Menu, X } from '@lucide/vue';
import { _ as __nuxt_component_0 } from './ModeToggle-DCOFDjt8.mjs';
import { _ as _sfc_main$a } from './Separator-2kwi4XBY.mjs';
import 'class-variance-authority';
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
import './composables-CULDogY5.mjs';

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Accordion",
  __ssrInlineRender: true,
  props: {
    collapsible: { type: Boolean },
    disabled: { type: Boolean },
    dir: {},
    orientation: {},
    unmountOnHide: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    type: {},
    modelValue: {},
    defaultValue: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AccordionRoot), mergeProps({ "data-slot": "accordion" }, unref(forwarded), {
        class: unref(cn)("flex w-full flex-col", props.class)
      }, _attrs), {
        default: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", slotProps, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", slotProps)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/accordion/Accordion.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "AccordionContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AccordionContent), mergeProps({ "data-slot": "accordion-content" }, unref(delegatedProps), { class: "data-open:animate-accordion-down data-closed:animate-accordion-up text-xs overflow-hidden" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(unref(cn)(
              "pt-0 pb-2.5 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
              props.class
            ))}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: unref(cn)(
                  "pt-0 pb-2.5 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
                  props.class
                )
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/accordion/AccordionContent.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "AccordionItem",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
    value: {},
    unmountOnHide: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AccordionItem), mergeProps({ "data-slot": "accordion-item" }, unref(forwardedProps), {
        class: unref(cn)("not-last:border-b", props.class)
      }, _attrs), {
        default: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", slotProps, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", slotProps)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/accordion/AccordionItem.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AccordionTrigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AccordionHeader), mergeProps({ class: "flex" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(AccordionTrigger), mergeProps({ "data-slot": "accordion-trigger" }, unref(delegatedProps), {
              class: unref(cn)(
                "focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:after:border-ring **:data-[slot=accordion-trigger-icon]:text-muted-foreground rounded-none py-2.5 text-left text-xs font-medium hover:underline focus-visible:ring-1 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 group/accordion-trigger relative flex flex-1 items-start justify-between border border-transparent transition-all outline-none disabled:pointer-events-none disabled:opacity-50",
                props.class
              )
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
                    _push3(ssrRenderComponent(unref(ChevronDownIcon), {
                      "data-slot": "accordion-trigger-icon",
                      class: "pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(ChevronUpIcon), {
                      "data-slot": "accordion-trigger-icon",
                      class: "pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
                    }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default"),
                    renderSlot(_ctx.$slots, "icon", {}, () => [
                      createVNode(unref(ChevronDownIcon), {
                        "data-slot": "accordion-trigger-icon",
                        class: "pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
                      }),
                      createVNode(unref(ChevronUpIcon), {
                        "data-slot": "accordion-trigger-icon",
                        class: "pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
                      })
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(AccordionTrigger), mergeProps({ "data-slot": "accordion-trigger" }, unref(delegatedProps), {
                class: unref(cn)(
                  "focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:after:border-ring **:data-[slot=accordion-trigger-icon]:text-muted-foreground rounded-none py-2.5 text-left text-xs font-medium hover:underline focus-visible:ring-1 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 group/accordion-trigger relative flex flex-1 items-start justify-between border border-transparent transition-all outline-none disabled:pointer-events-none disabled:opacity-50",
                  props.class
                )
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default"),
                  renderSlot(_ctx.$slots, "icon", {}, () => [
                    createVNode(unref(ChevronDownIcon), {
                      "data-slot": "accordion-trigger-icon",
                      class: "pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
                    }),
                    createVNode(unref(ChevronUpIcon), {
                      "data-slot": "accordion-trigger-icon",
                      class: "pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
                    })
                  ])
                ]),
                _: 3
              }, 16, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/accordion/AccordionTrigger.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "LandingHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const mobileMenuOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_UiButton = _sfc_main$8;
      const _component_ModeToggle = __nuxt_component_0;
      const _component_UiSeparator = _sfc_main$a;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" }, _attrs))}><div class="container mx-auto flex h-16 items-center justify-between px-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-2 font-semibold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-lg"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(GalleryVerticalEnd), { class: "size-5" }, null, _parent2, _scopeId));
            _push2(`</div><span class="hidden font-bold sm:inline-block"${_scopeId}>Acme SaaS</span>`);
          } else {
            return [
              createVNode("div", { class: "bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-lg" }, [
                createVNode(unref(GalleryVerticalEnd), { class: "size-5" })
              ]),
              createVNode("span", { class: "hidden font-bold sm:inline-block" }, "Acme SaaS")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden md:flex md:items-center md:gap-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/#features",
        class: "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Features `);
          } else {
            return [
              createTextVNode(" Features ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/#pricing",
        class: "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Pricing `);
          } else {
            return [
              createTextVNode(" Pricing ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/#testimonials",
        class: "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Testimonials `);
          } else {
            return [
              createTextVNode(" Testimonials ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/#faq",
        class: "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` FAQ `);
          } else {
            return [
              createTextVNode(" FAQ ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><div class="hidden md:flex md:items-center md:gap-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/auth/login" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiButton, {
              variant: "ghost",
              size: "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Sign In`);
                } else {
                  return [
                    createTextVNode("Sign In")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiButton, {
                variant: "ghost",
                size: "sm"
              }, {
                default: withCtx(() => [
                  createTextVNode("Sign In")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/auth/signup" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiButton, { size: "sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Get Started`);
                } else {
                  return [
                    createTextVNode("Get Started")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiButton, { size: "sm" }, {
                default: withCtx(() => [
                  createTextVNode("Get Started")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ModeToggle, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UiButton, {
        variant: "ghost",
        size: "icon",
        class: "md:hidden",
        onClick: ($event) => mobileMenuOpen.value = !mobileMenuOpen.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!mobileMenuOpen.value) {
              _push2(ssrRenderComponent(unref(Menu), null, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(unref(X), null, null, _parent2, _scopeId));
            }
          } else {
            return [
              !mobileMenuOpen.value ? (openBlock(), createBlock(unref(Menu), { key: 0 })) : (openBlock(), createBlock(unref(X), { key: 1 }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (mobileMenuOpen.value) {
        _push(`<div class="border-t border-border/40 bg-background px-4 pb-4 pt-2 md:hidden"><nav class="flex flex-col gap-3">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/#features",
          class: "text-sm font-medium text-muted-foreground",
          onClick: ($event) => mobileMenuOpen.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Features `);
            } else {
              return [
                createTextVNode(" Features ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/#pricing",
          class: "text-sm font-medium text-muted-foreground",
          onClick: ($event) => mobileMenuOpen.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Pricing `);
            } else {
              return [
                createTextVNode(" Pricing ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/#testimonials",
          class: "text-sm font-medium text-muted-foreground",
          onClick: ($event) => mobileMenuOpen.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Testimonials `);
            } else {
              return [
                createTextVNode(" Testimonials ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/#faq",
          class: "text-sm font-medium text-muted-foreground",
          onClick: ($event) => mobileMenuOpen.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` FAQ `);
            } else {
              return [
                createTextVNode(" FAQ ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiSeparator, null, null, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/auth/login",
          onClick: ($event) => mobileMenuOpen.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiButton, {
                variant: "outline",
                class: "w-full"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Sign In`);
                  } else {
                    return [
                      createTextVNode("Sign In")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiButton, {
                  variant: "outline",
                  class: "w-full"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Sign In")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/auth/signup",
          onClick: ($event) => mobileMenuOpen.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiButton, { class: "w-full" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Get Started`);
                  } else {
                    return [
                      createTextVNode("Get Started")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiButton, { class: "w-full" }, {
                  default: withCtx(() => [
                    createTextVNode("Get Started")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="flex justify-center pt-1">`);
        _push(ssrRenderComponent(_component_ModeToggle, null, null, _parent));
        _push(`</div></nav></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LandingHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const LandingHeader = Object.assign(_sfc_main$2, { __name: "LandingHeader" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LandingFooter",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_UiSeparator = _sfc_main$a;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "border-t border-border/40 bg-background" }, _attrs))}><div class="container mx-auto px-4 py-12"><div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"><div class="flex flex-col gap-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-2 font-semibold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-primary text-primary-foreground flex size-7 items-center justify-center rounded-md"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(GalleryVerticalEnd), { class: "size-4" }, null, _parent2, _scopeId));
            _push2(`</div><span${_scopeId}>Acme SaaS</span>`);
          } else {
            return [
              createVNode("div", { class: "bg-primary text-primary-foreground flex size-7 items-center justify-center rounded-md" }, [
                createVNode(unref(GalleryVerticalEnd), { class: "size-4" })
              ]),
              createVNode("span", null, "Acme SaaS")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-sm text-muted-foreground"> Build faster, scale smarter. The all-in-one platform for modern teams. </p></div><div class="flex flex-col gap-3"><h3 class="text-sm font-semibold">Product</h3><ul class="flex flex-col gap-2"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/#features",
        class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Features `);
          } else {
            return [
              createTextVNode(" Features ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/#pricing",
        class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Pricing `);
          } else {
            return [
              createTextVNode(" Pricing ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li><a href="#" class="text-sm text-muted-foreground hover:text-foreground transition-colors"> Changelog </a></li><li><a href="#" class="text-sm text-muted-foreground hover:text-foreground transition-colors"> Documentation </a></li></ul></div><div class="flex flex-col gap-3"><h3 class="text-sm font-semibold">Company</h3><ul class="flex flex-col gap-2"><li><a href="#" class="text-sm text-muted-foreground hover:text-foreground transition-colors"> About </a></li><li><a href="#" class="text-sm text-muted-foreground hover:text-foreground transition-colors"> Blog </a></li><li><a href="#" class="text-sm text-muted-foreground hover:text-foreground transition-colors"> Careers </a></li><li><a href="#" class="text-sm text-muted-foreground hover:text-foreground transition-colors"> Contact </a></li></ul></div><div class="flex flex-col gap-3"><h3 class="text-sm font-semibold">Legal</h3><ul class="flex flex-col gap-2"><li><a href="#" class="text-sm text-muted-foreground hover:text-foreground transition-colors"> Privacy Policy </a></li><li><a href="#" class="text-sm text-muted-foreground hover:text-foreground transition-colors"> Terms of Service </a></li><li><a href="#" class="text-sm text-muted-foreground hover:text-foreground transition-colors"> Cookie Policy </a></li></ul></div></div>`);
      _push(ssrRenderComponent(_component_UiSeparator, { class: "my-8" }, null, _parent));
      _push(`<div class="flex flex-col items-center justify-between gap-4 sm:flex-row"><p class="text-sm text-muted-foreground"> © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Acme SaaS. All rights reserved. </p><div class="flex items-center gap-4"><a href="#" class="text-muted-foreground hover:text-foreground transition-colors"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M22.46 6c-.85.38-1.78.64-2.73.76 1-.6 1.76-1.54 2.12-2.67-.93.55-1.96.95-3.06 1.17a4.77 4.77 0 0 0-8.13 4.35A13.56 13.56 0 0 1 1.64 4.16a4.77 4.77 0 0 0 1.48 6.37c-.74-.02-1.44-.23-2.05-.57v.06a4.77 4.77 0 0 0 3.83 4.68c-.7.19-1.44.22-2.16.08a4.78 4.78 0 0 0 4.46 3.32A9.58 9.58 0 0 1 0 19.54a13.5 13.5 0 0 0 7.33 2.15c8.8 0 13.6-7.3 13.6-13.63 0-.21 0-.42-.01-.63A9.72 9.72 0 0 0 23.36 5.6a9.6 9.6 0 0 1-2.75.75 4.8 4.8 0 0 0 2.1-2.65"></path></svg></a><a href="#" class="text-muted-foreground hover:text-foreground transition-colors"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg></a><a href="#" class="text-muted-foreground hover:text-foreground transition-colors"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg></a></div></div></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LandingFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const LandingFooter = Object.assign(_sfc_main$1, { __name: "LandingFooter" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const features = [
      {
        icon: Zap,
        title: "Lightning Fast",
        description: "Built on cutting-edge infrastructure with sub-50ms response times worldwide."
      },
      {
        icon: Shield,
        title: "Enterprise Security",
        description: "SOC 2 Type II compliant with end-to-end encryption and SSO support."
      },
      {
        icon: Layers,
        title: "Modular Architecture",
        description: "Plug and play components that adapt to your stack without vendor lock-in."
      },
      {
        icon: BarChart3,
        title: "Advanced Analytics",
        description: "Real-time dashboards with custom reports and AI-powered insights."
      },
      {
        icon: Users,
        title: "Team Collaboration",
        description: "Built-in workflows, role-based access, and real-time editing for teams."
      },
      {
        icon: Cloud,
        title: "Cloud Native",
        description: "Deploy on any cloud with auto-scaling, zero-downtime updates, and 99.99% SLA."
      }
    ];
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
          "API access"
        ],
        cta: "Start Free Trial",
        highlighted: false
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
          "SSO authentication"
        ],
        cta: "Start Free Trial",
        highlighted: true
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
          "On-premise option"
        ],
        cta: "Contact Sales",
        highlighted: false
      }
    ];
    const testimonials = [
      {
        quote: "Acme SaaS transformed how our team collaborates. We shipped 3x faster after adopting it.",
        author: "Sarah Chen",
        role: "CTO, TechFlow Inc.",
        avatar: "SC"
      },
      {
        quote: "The analytics alone paid for itself in the first month. We identified bottlenecks we never knew existed.",
        author: "Marcus Rivera",
        role: "VP Engineering, DataSync",
        avatar: "MR"
      },
      {
        quote: "Finally, a platform that doesn't force us into a specific workflow. The flexibility is unmatched.",
        author: "Emily Park",
        role: "Head of Product, CloudNine",
        avatar: "EP"
      }
    ];
    const faqs = [
      {
        question: "Can I change plans later?",
        answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features and pay only the prorated difference. Downgrades take effect at the next billing cycle."
      },
      {
        question: "Is there a free trial?",
        answer: "Absolutely! All plans include a 14-day free trial with full access to all features. No credit card required to start."
      },
      {
        question: "What kind of support do you offer?",
        answer: "Starter plans get email support with 24h response time. Pro plans include priority chat support. Enterprise plans have a dedicated account manager and 1-hour SLA."
      },
      {
        question: "How do you handle data security?",
        answer: "We encrypt data at rest and in transit using AES-256. We're SOC 2 Type II certified and GDPR compliant. All data is backed up across multiple regions."
      },
      {
        question: "Can I integrate with my existing tools?",
        answer: "Yes! We offer native integrations with 200+ tools including Slack, GitHub, Jira, and more. Our REST API and webhooks make custom integrations straightforward."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiBadge = _sfc_main$7;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_UiButton = _sfc_main$8;
      const _component_UiCard = _sfc_main$6$1;
      const _component_UiCardHeader = _sfc_main$1$1;
      const _component_UiCardTitle = _sfc_main$9;
      const _component_UiCardContent = _sfc_main$4$1;
      const _component_UiCardDescription = _sfc_main$3$1;
      const _component_UiCardFooter = _sfc_main$2$1;
      const _component_UiAvatar = _sfc_main$5$1;
      const _component_UiAvatarFallback = _sfc_main$3$2;
      const _component_UiAccordion = _sfc_main$6;
      const _component_UiAccordionItem = _sfc_main$4;
      const _component_UiAccordionTrigger = _sfc_main$3;
      const _component_UiAccordionContent = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex min-h-svh flex-col" }, _attrs))}>`);
      _push(ssrRenderComponent(LandingHeader, null, null, _parent));
      _push(`<section class="relative overflow-hidden"><div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10"></div><div class="container relative mx-auto flex flex-col items-center gap-6 px-4 py-24 text-center sm:py-32">`);
      _push(ssrRenderComponent(_component_UiBadge, {
        variant: "secondary",
        class: "rounded-full px-4 py-1.5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="mr-1 text-xs"${_scopeId}>★</span> Now available on all plans — AI-powered insights `);
          } else {
            return [
              createVNode("span", { class: "mr-1 text-xs" }, "★"),
              createTextVNode(" Now available on all plans — AI-powered insights ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"> Build products your <span class="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"> users love </span></h1><p class="max-w-2xl text-lg text-muted-foreground sm:text-xl"> The all-in-one platform for modern teams. Ship faster, scale smarter, and delight your customers with every release. </p><div class="flex flex-col gap-3 sm:flex-row">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/auth/signup" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiButton, { size: "lg" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Get Started Free `);
                  _push3(ssrRenderComponent(unref(ArrowRight), { "data-icon": "inline-end" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(" Get Started Free "),
                    createVNode(unref(ArrowRight), { "data-icon": "inline-end" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiButton, { size: "lg" }, {
                default: withCtx(() => [
                  createTextVNode(" Get Started Free "),
                  createVNode(unref(ArrowRight), { "data-icon": "inline-end" })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/#features" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiButton, {
              variant: "outline",
              size: "lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` View Features `);
                } else {
                  return [
                    createTextVNode(" View Features ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiButton, {
                variant: "outline",
                size: "lg"
              }, {
                default: withCtx(() => [
                  createTextVNode(" View Features ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p class="text-xs text-muted-foreground"> No credit card required · 14-day free trial </p><div class="mt-4 flex items-center gap-6 text-sm text-muted-foreground"><div class="flex items-center gap-1.5">`);
      _push(ssrRenderComponent(unref(CheckCircle2), { class: "size-4 text-primary" }, null, _parent));
      _push(` SOC 2 compliant </div><div class="flex items-center gap-1.5">`);
      _push(ssrRenderComponent(unref(CheckCircle2), { class: "size-4 text-primary" }, null, _parent));
      _push(` 99.99% uptime SLA </div><div class="flex items-center gap-1.5">`);
      _push(ssrRenderComponent(unref(CheckCircle2), { class: "size-4 text-primary" }, null, _parent));
      _push(` GDPR ready </div></div></div></section><section class="border-y border-border/40 py-10"><div class="container mx-auto px-4"><p class="mb-6 text-center text-sm font-medium text-muted-foreground"> Trusted by innovative teams worldwide </p><div class="flex flex-wrap items-center justify-center gap-8 opacity-50 grayscale"><span class="text-lg font-bold tracking-widest text-muted-foreground"> TECHFLOW </span><span class="text-lg font-bold tracking-widest text-muted-foreground"> DATASYNC </span><span class="text-lg font-bold tracking-widest text-muted-foreground"> CLOUDNINE </span><span class="text-lg font-bold tracking-widest text-muted-foreground"> NEXUSLAB </span><span class="text-lg font-bold tracking-widest text-muted-foreground"> CORALPAY </span></div></div></section><section id="features" class="py-20 sm:py-28"><div class="container mx-auto px-4"><div class="mx-auto mb-14 max-w-2xl text-center"><h2 class="text-3xl font-bold tracking-tight sm:text-4xl"> Everything you need to scale </h2><p class="mt-4 text-muted-foreground"> A complete platform with all the tools your team needs to build, deploy, and grow. </p></div><div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(features, (feature) => {
        _push(ssrRenderComponent(_component_UiCard, {
          key: feature.title,
          class: "group border-border/60 transition-shadow hover:shadow-md"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiCardHeader, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary"${_scopeId2}>`);
                    ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(feature.icon), { class: "size-5" }, null), _parent3, _scopeId2);
                    _push3(`</div>`);
                    _push3(ssrRenderComponent(_component_UiCardTitle, { class: "mt-3" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(feature.title)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(feature.title), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("div", { class: "flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary" }, [
                        (openBlock(), createBlock(resolveDynamicComponent(feature.icon), { class: "size-5" }))
                      ]),
                      createVNode(_component_UiCardTitle, { class: "mt-3" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(feature.title), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiCardContent, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p class="text-sm text-muted-foreground"${_scopeId2}>${ssrInterpolate(feature.description)}</p>`);
                  } else {
                    return [
                      createVNode("p", { class: "text-sm text-muted-foreground" }, toDisplayString(feature.description), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiCardHeader, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary" }, [
                      (openBlock(), createBlock(resolveDynamicComponent(feature.icon), { class: "size-5" }))
                    ]),
                    createVNode(_component_UiCardTitle, { class: "mt-3" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(feature.title), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024),
                createVNode(_component_UiCardContent, null, {
                  default: withCtx(() => [
                    createVNode("p", { class: "text-sm text-muted-foreground" }, toDisplayString(feature.description), 1)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section><section class="border-y border-border/40 bg-muted/30 py-16"><div class="container mx-auto px-4"><div class="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4"><div><div class="text-4xl font-extrabold text-primary">10K+</div><p class="mt-1 text-sm text-muted-foreground"> Active teams </p></div><div><div class="text-4xl font-extrabold text-primary">99.99%</div><p class="mt-1 text-sm text-muted-foreground"> Uptime SLA </p></div><div><div class="text-4xl font-extrabold text-primary">200+</div><p class="mt-1 text-sm text-muted-foreground"> Integrations </p></div><div><div class="text-4xl font-extrabold text-primary">50ms</div><p class="mt-1 text-sm text-muted-foreground"> Avg. response time </p></div></div></div></section><section id="pricing" class="py-20 sm:py-28"><div class="container mx-auto px-4"><div class="mx-auto mb-14 max-w-2xl text-center"><h2 class="text-3xl font-bold tracking-tight sm:text-4xl"> Simple, transparent pricing </h2><p class="mt-4 text-muted-foreground"> Choose the plan that fits your team. All plans include a 14-day free trial. </p></div><div class="grid gap-6 lg:grid-cols-3 lg:items-start"><!--[-->`);
      ssrRenderList(pricingPlans, (plan) => {
        _push(ssrRenderComponent(_component_UiCard, {
          key: plan.name,
          class: [
            "relative border-border/60",
            plan.highlighted ? "border-primary/50 shadow-lg ring-1 ring-primary/20" : ""
          ]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (plan.highlighted) {
                _push2(ssrRenderComponent(_component_UiBadge, { class: "absolute -top-3 left-1/2 -translate-x-1/2" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Most Popular `);
                    } else {
                      return [
                        createTextVNode(" Most Popular ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_component_UiCardHeader, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(plan.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(plan.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiCardDescription, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(plan.description)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(plan.description), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiCardTitle, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(plan.name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_UiCardDescription, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(plan.description), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiCardContent, { class: "flex flex-col gap-4" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-baseline gap-1"${_scopeId2}><span class="text-4xl font-extrabold"${_scopeId2}>${ssrInterpolate(plan.price)}</span>`);
                    if (plan.period) {
                      _push3(`<span class="text-sm text-muted-foreground"${_scopeId2}>${ssrInterpolate(plan.period)}</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div><ul class="flex flex-col gap-2"${_scopeId2}><!--[-->`);
                    ssrRenderList(plan.features, (feature) => {
                      _push3(`<li class="flex items-center gap-2 text-sm"${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(CheckCircle2), { class: "size-4 text-primary" }, null, _parent3, _scopeId2));
                      _push3(` ${ssrInterpolate(feature)}</li>`);
                    });
                    _push3(`<!--]--></ul>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-baseline gap-1" }, [
                        createVNode("span", { class: "text-4xl font-extrabold" }, toDisplayString(plan.price), 1),
                        plan.period ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "text-sm text-muted-foreground"
                        }, toDisplayString(plan.period), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("ul", { class: "flex flex-col gap-2" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(plan.features, (feature) => {
                          return openBlock(), createBlock("li", {
                            key: feature,
                            class: "flex items-center gap-2 text-sm"
                          }, [
                            createVNode(unref(CheckCircle2), { class: "size-4 text-primary" }),
                            createTextVNode(" " + toDisplayString(feature), 1)
                          ]);
                        }), 128))
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiCardFooter, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiButton, {
                      variant: plan.highlighted ? "default" : "outline",
                      class: "w-full"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(plan.cta)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(plan.cta), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiButton, {
                        variant: plan.highlighted ? "default" : "outline",
                        class: "w-full"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(plan.cta), 1)
                        ]),
                        _: 2
                      }, 1032, ["variant"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                plan.highlighted ? (openBlock(), createBlock(_component_UiBadge, {
                  key: 0,
                  class: "absolute -top-3 left-1/2 -translate-x-1/2"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Most Popular ")
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                createVNode(_component_UiCardHeader, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(plan.name), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_UiCardDescription, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(plan.description), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024),
                createVNode(_component_UiCardContent, { class: "flex flex-col gap-4" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex items-baseline gap-1" }, [
                      createVNode("span", { class: "text-4xl font-extrabold" }, toDisplayString(plan.price), 1),
                      plan.period ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "text-sm text-muted-foreground"
                      }, toDisplayString(plan.period), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("ul", { class: "flex flex-col gap-2" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(plan.features, (feature) => {
                        return openBlock(), createBlock("li", {
                          key: feature,
                          class: "flex items-center gap-2 text-sm"
                        }, [
                          createVNode(unref(CheckCircle2), { class: "size-4 text-primary" }),
                          createTextVNode(" " + toDisplayString(feature), 1)
                        ]);
                      }), 128))
                    ])
                  ]),
                  _: 2
                }, 1024),
                createVNode(_component_UiCardFooter, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiButton, {
                      variant: plan.highlighted ? "default" : "outline",
                      class: "w-full"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(plan.cta), 1)
                      ]),
                      _: 2
                    }, 1032, ["variant"])
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section><section id="testimonials" class="border-y border-border/40 bg-muted/30 py-20 sm:py-28"><div class="container mx-auto px-4"><div class="mx-auto mb-14 max-w-2xl text-center"><h2 class="text-3xl font-bold tracking-tight sm:text-4xl"> Loved by teams everywhere </h2><p class="mt-4 text-muted-foreground"> See what our customers have to say about building with Acme SaaS. </p></div><div class="grid gap-6 md:grid-cols-3"><!--[-->`);
      ssrRenderList(testimonials, (t) => {
        _push(ssrRenderComponent(_component_UiCard, {
          key: t.author,
          class: "border-border/60"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiCardContent, { class: "pt-6" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="mb-4 flex gap-0.5"${_scopeId2}><!--[-->`);
                    ssrRenderList(5, (n) => {
                      _push3(ssrRenderComponent(unref(Star), {
                        key: n,
                        class: "size-4 fill-primary text-primary"
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div><blockquote class="text-sm leading-relaxed"${_scopeId2}> &quot;${ssrInterpolate(t.quote)}&quot; </blockquote>`);
                  } else {
                    return [
                      createVNode("div", { class: "mb-4 flex gap-0.5" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(5, (n) => {
                          return createVNode(unref(Star), {
                            key: n,
                            class: "size-4 fill-primary text-primary"
                          });
                        }), 64))
                      ]),
                      createVNode("blockquote", { class: "text-sm leading-relaxed" }, ' "' + toDisplayString(t.quote) + '" ', 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiCardFooter, { class: "border-t border-border/40 pt-4" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center gap-3"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiAvatar, { class: "size-9" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiAvatarFallback, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(t.avatar)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(t.avatar), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiAvatarFallback, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(t.avatar), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<div${_scopeId2}><p class="text-sm font-medium"${_scopeId2}>${ssrInterpolate(t.author)}</p><p class="text-xs text-muted-foreground"${_scopeId2}>${ssrInterpolate(t.role)}</p></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center gap-3" }, [
                        createVNode(_component_UiAvatar, { class: "size-9" }, {
                          default: withCtx(() => [
                            createVNode(_component_UiAvatarFallback, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(t.avatar), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode("div", null, [
                          createVNode("p", { class: "text-sm font-medium" }, toDisplayString(t.author), 1),
                          createVNode("p", { class: "text-xs text-muted-foreground" }, toDisplayString(t.role), 1)
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiCardContent, { class: "pt-6" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "mb-4 flex gap-0.5" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(5, (n) => {
                        return createVNode(unref(Star), {
                          key: n,
                          class: "size-4 fill-primary text-primary"
                        });
                      }), 64))
                    ]),
                    createVNode("blockquote", { class: "text-sm leading-relaxed" }, ' "' + toDisplayString(t.quote) + '" ', 1)
                  ]),
                  _: 2
                }, 1024),
                createVNode(_component_UiCardFooter, { class: "border-t border-border/40 pt-4" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex items-center gap-3" }, [
                      createVNode(_component_UiAvatar, { class: "size-9" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiAvatarFallback, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(t.avatar), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode("div", null, [
                        createVNode("p", { class: "text-sm font-medium" }, toDisplayString(t.author), 1),
                        createVNode("p", { class: "text-xs text-muted-foreground" }, toDisplayString(t.role), 1)
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section><section id="faq" class="py-20 sm:py-28"><div class="container mx-auto px-4"><div class="mx-auto mb-14 max-w-2xl text-center"><h2 class="text-3xl font-bold tracking-tight sm:text-4xl"> Frequently asked questions </h2><p class="mt-4 text-muted-foreground"> Everything you need to know about the platform. </p></div><div class="mx-auto max-w-2xl">`);
      _push(ssrRenderComponent(_component_UiAccordion, {
        type: "single",
        collapsible: "",
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(faqs, (faq, i) => {
              _push2(ssrRenderComponent(_component_UiAccordionItem, {
                key: i,
                value: `item-${i}`
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiAccordionTrigger, { class: "text-left" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(faq.question)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(faq.question), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiAccordionContent, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<p class="text-muted-foreground"${_scopeId3}>${ssrInterpolate(faq.answer)}</p>`);
                        } else {
                          return [
                            createVNode("p", { class: "text-muted-foreground" }, toDisplayString(faq.answer), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiAccordionTrigger, { class: "text-left" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(faq.question), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_UiAccordionContent, null, {
                        default: withCtx(() => [
                          createVNode("p", { class: "text-muted-foreground" }, toDisplayString(faq.answer), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(faqs, (faq, i) => {
                return createVNode(_component_UiAccordionItem, {
                  key: i,
                  value: `item-${i}`
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UiAccordionTrigger, { class: "text-left" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(faq.question), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_UiAccordionContent, null, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-muted-foreground" }, toDisplayString(faq.answer), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="border-t border-border/40 py-20 sm:py-28"><div class="container mx-auto px-4"><div class="relative overflow-hidden rounded-2xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-16 sm:py-20"><div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div><div class="relative mx-auto max-w-2xl"><h2 class="text-3xl font-bold tracking-tight sm:text-4xl"> Ready to get started? </h2><p class="mt-4 text-primary-foreground/80"> Join thousands of teams already using Acme SaaS to build better products. Start your free trial today. </p><div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/auth/signup" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiButton, {
              variant: "secondary",
              size: "lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Start Free Trial `);
                  _push3(ssrRenderComponent(unref(ArrowRight), { "data-icon": "inline-end" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(" Start Free Trial "),
                    createVNode(unref(ArrowRight), { "data-icon": "inline-end" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiButton, {
                variant: "secondary",
                size: "lg"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Start Free Trial "),
                  createVNode(unref(ArrowRight), { "data-icon": "inline-end" })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/#features" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiButton, {
              variant: "ghost",
              size: "lg",
              class: "text-primary-foreground hover:bg-primary-foreground/10"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Learn More `);
                } else {
                  return [
                    createTextVNode(" Learn More ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiButton, {
                variant: "ghost",
                size: "lg",
                class: "text-primary-foreground hover:bg-primary-foreground/10"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Learn More ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></section>`);
      _push(ssrRenderComponent(LandingFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CuI-IDL6.mjs.map
