import { b as _sfc_main$p, c as _sfc_main$m, d as _sfc_main$i, e as _sfc_main$9, f as _sfc_main$a, g as _sfc_main$6$1, h as _sfc_main$4$1, i as _sfc_main$5$1, u as useSidebar, j as _sfc_main$s, k as _sfc_main$l, l as _sfc_main$r, m as _sfc_main$q, n as _sfc_main$2$1, o as _sfc_main$3$2 } from './index-DRjisF_K.mjs';
import { _ as _sfc_main$c } from './index-4MyzTv5r.mjs';
import { useSSRContext, defineComponent, unref, mergeProps, withCtx, renderSlot, createTextVNode, createVNode, resolveDynamicComponent, openBlock, createBlock, createCommentVNode, toDisplayString, Fragment, renderList, computed } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrRenderVNode, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { useForwardPropsEmits, CollapsibleRoot, CollapsibleContent, CollapsibleTrigger } from 'reka-ui';
import { ChevronRight, ChevronsUpDown, Sparkles, BadgeCheck, CreditCard, Bell, Sun, Moon, Monitor, LogOut, GalleryVerticalEnd, LayoutDashboard, Gauge, User, Settings2, Globe } from '@lucide/vue';
import { u as useColorMode, _ as _sfc_main$d, a as _sfc_main$7, b as _sfc_main$b, e as _sfc_main$8$1, f as _sfc_main$5$3, c as _sfc_main$a$1, d as _sfc_main$9$1 } from './composables-CULDogY5.mjs';
import { _ as _sfc_main$5$2, b as _sfc_main$8, a as _sfc_main$3$1 } from './index-BPOQrnMz.mjs';
import { a as useI18n, b as useOidcAuth, _ as __nuxt_component_0$1 } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'class-variance-authority';
import '@vueuse/core';
import './Input-DpdpNcLa.mjs';
import './Separator-2kwi4XBY.mjs';
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

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Collapsible",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    disabled: { type: Boolean },
    unmountOnHide: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(CollapsibleRoot), mergeProps({ "data-slot": "collapsible" }, unref(forwarded), _attrs), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/collapsible/Collapsible.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "CollapsibleContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(CollapsibleContent), mergeProps({ "data-slot": "collapsible-content" }, props, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/collapsible/CollapsibleContent.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CollapsibleTrigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(CollapsibleTrigger), mergeProps({ "data-slot": "collapsible-trigger" }, props, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/collapsible/CollapsibleTrigger.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "NavMain",
  __ssrInlineRender: true,
  props: {
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiSidebarGroup = _sfc_main$p;
      const _component_UiSidebarGroupLabel = _sfc_main$m;
      const _component_UiSidebarMenu = _sfc_main$i;
      const _component_UiCollapsible = _sfc_main$6;
      const _component_UiSidebarMenuItem = _sfc_main$9;
      const _component_UiCollapsibleTrigger = _sfc_main$4;
      const _component_UiSidebarMenuButton = _sfc_main$a;
      const _component_UiCollapsibleContent = _sfc_main$5;
      const _component_UiSidebarMenuSub = _sfc_main$6$1;
      const _component_UiSidebarMenuSubItem = _sfc_main$4$1;
      const _component_UiSidebarMenuSubButton = _sfc_main$5$1;
      _push(ssrRenderComponent(_component_UiSidebarGroup, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiSidebarGroupLabel, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Platform`);
                } else {
                  return [
                    createTextVNode("Platform")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiSidebarMenu, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(__props.items, (item) => {
                    _push3(ssrRenderComponent(_component_UiCollapsible, {
                      key: item.title,
                      "as-child": "",
                      "default-open": item.isActive,
                      class: "group/collapsible"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiSidebarMenuItem, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiCollapsibleTrigger, { "as-child": "" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiSidebarMenuButton, {
                                        tooltip: item.title
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            if (item.icon) {
                                              ssrRenderVNode(_push7, createVNode(resolveDynamicComponent(item.icon), null, null), _parent7, _scopeId6);
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                            _push7(`<span${_scopeId6}>${ssrInterpolate(item.title)}</span>`);
                                            _push7(ssrRenderComponent(unref(ChevronRight), { class: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              item.icon ? (openBlock(), createBlock(resolveDynamicComponent(item.icon), { key: 0 })) : createCommentVNode("", true),
                                              createVNode("span", null, toDisplayString(item.title), 1),
                                              createVNode(unref(ChevronRight), { class: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" })
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiSidebarMenuButton, {
                                          tooltip: item.title
                                        }, {
                                          default: withCtx(() => [
                                            item.icon ? (openBlock(), createBlock(resolveDynamicComponent(item.icon), { key: 0 })) : createCommentVNode("", true),
                                            createVNode("span", null, toDisplayString(item.title), 1),
                                            createVNode(unref(ChevronRight), { class: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" })
                                          ]),
                                          _: 2
                                        }, 1032, ["tooltip"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiCollapsibleContent, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiSidebarMenuSub, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<!--[-->`);
                                            ssrRenderList(item.items, (subItem) => {
                                              _push7(ssrRenderComponent(_component_UiSidebarMenuSubItem, {
                                                key: subItem.title
                                              }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(_component_UiSidebarMenuSubButton, { "as-child": "" }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(`<a${ssrRenderAttr("href", subItem.url)}${_scopeId8}><span${_scopeId8}>${ssrInterpolate(subItem.title)}</span></a>`);
                                                        } else {
                                                          return [
                                                            createVNode("a", {
                                                              href: subItem.url
                                                            }, [
                                                              createVNode("span", null, toDisplayString(subItem.title), 1)
                                                            ], 8, ["href"])
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  } else {
                                                    return [
                                                      createVNode(_component_UiSidebarMenuSubButton, { "as-child": "" }, {
                                                        default: withCtx(() => [
                                                          createVNode("a", {
                                                            href: subItem.url
                                                          }, [
                                                            createVNode("span", null, toDisplayString(subItem.title), 1)
                                                          ], 8, ["href"])
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            });
                                            _push7(`<!--]-->`);
                                          } else {
                                            return [
                                              (openBlock(true), createBlock(Fragment, null, renderList(item.items, (subItem) => {
                                                return openBlock(), createBlock(_component_UiSidebarMenuSubItem, {
                                                  key: subItem.title
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_UiSidebarMenuSubButton, { "as-child": "" }, {
                                                      default: withCtx(() => [
                                                        createVNode("a", {
                                                          href: subItem.url
                                                        }, [
                                                          createVNode("span", null, toDisplayString(subItem.title), 1)
                                                        ], 8, ["href"])
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1024);
                                              }), 128))
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiSidebarMenuSub, null, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(item.items, (subItem) => {
                                              return openBlock(), createBlock(_component_UiSidebarMenuSubItem, {
                                                key: subItem.title
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_UiSidebarMenuSubButton, { "as-child": "" }, {
                                                    default: withCtx(() => [
                                                      createVNode("a", {
                                                        href: subItem.url
                                                      }, [
                                                        createVNode("span", null, toDisplayString(subItem.title), 1)
                                                      ], 8, ["href"])
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 128))
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiCollapsibleTrigger, { "as-child": "" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSidebarMenuButton, {
                                        tooltip: item.title
                                      }, {
                                        default: withCtx(() => [
                                          item.icon ? (openBlock(), createBlock(resolveDynamicComponent(item.icon), { key: 0 })) : createCommentVNode("", true),
                                          createVNode("span", null, toDisplayString(item.title), 1),
                                          createVNode(unref(ChevronRight), { class: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" })
                                        ]),
                                        _: 2
                                      }, 1032, ["tooltip"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiCollapsibleContent, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSidebarMenuSub, null, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.items, (subItem) => {
                                            return openBlock(), createBlock(_component_UiSidebarMenuSubItem, {
                                              key: subItem.title
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_UiSidebarMenuSubButton, { "as-child": "" }, {
                                                  default: withCtx(() => [
                                                    createVNode("a", {
                                                      href: subItem.url
                                                    }, [
                                                      createVNode("span", null, toDisplayString(subItem.title), 1)
                                                    ], 8, ["href"])
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 128))
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiSidebarMenuItem, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiCollapsibleTrigger, { "as-child": "" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSidebarMenuButton, {
                                      tooltip: item.title
                                    }, {
                                      default: withCtx(() => [
                                        item.icon ? (openBlock(), createBlock(resolveDynamicComponent(item.icon), { key: 0 })) : createCommentVNode("", true),
                                        createVNode("span", null, toDisplayString(item.title), 1),
                                        createVNode(unref(ChevronRight), { class: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" })
                                      ]),
                                      _: 2
                                    }, 1032, ["tooltip"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_UiCollapsibleContent, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSidebarMenuSub, null, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(item.items, (subItem) => {
                                          return openBlock(), createBlock(_component_UiSidebarMenuSubItem, {
                                            key: subItem.title
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiSidebarMenuSubButton, { "as-child": "" }, {
                                                default: withCtx(() => [
                                                  createVNode("a", {
                                                    href: subItem.url
                                                  }, [
                                                    createVNode("span", null, toDisplayString(subItem.title), 1)
                                                  ], 8, ["href"])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 128))
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item) => {
                      return openBlock(), createBlock(_component_UiCollapsible, {
                        key: item.title,
                        "as-child": "",
                        "default-open": item.isActive,
                        class: "group/collapsible"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiSidebarMenuItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiCollapsibleTrigger, { "as-child": "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSidebarMenuButton, {
                                    tooltip: item.title
                                  }, {
                                    default: withCtx(() => [
                                      item.icon ? (openBlock(), createBlock(resolveDynamicComponent(item.icon), { key: 0 })) : createCommentVNode("", true),
                                      createVNode("span", null, toDisplayString(item.title), 1),
                                      createVNode(unref(ChevronRight), { class: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" })
                                    ]),
                                    _: 2
                                  }, 1032, ["tooltip"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiCollapsibleContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSidebarMenuSub, null, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(item.items, (subItem) => {
                                        return openBlock(), createBlock(_component_UiSidebarMenuSubItem, {
                                          key: subItem.title
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiSidebarMenuSubButton, { "as-child": "" }, {
                                              default: withCtx(() => [
                                                createVNode("a", {
                                                  href: subItem.url
                                                }, [
                                                  createVNode("span", null, toDisplayString(subItem.title), 1)
                                                ], 8, ["href"])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["default-open"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiSidebarGroupLabel, null, {
                default: withCtx(() => [
                  createTextVNode("Platform")
                ]),
                _: 1
              }),
              createVNode(_component_UiSidebarMenu, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item) => {
                    return openBlock(), createBlock(_component_UiCollapsible, {
                      key: item.title,
                      "as-child": "",
                      "default-open": item.isActive,
                      class: "group/collapsible"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UiSidebarMenuItem, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiCollapsibleTrigger, { "as-child": "" }, {
                              default: withCtx(() => [
                                createVNode(_component_UiSidebarMenuButton, {
                                  tooltip: item.title
                                }, {
                                  default: withCtx(() => [
                                    item.icon ? (openBlock(), createBlock(resolveDynamicComponent(item.icon), { key: 0 })) : createCommentVNode("", true),
                                    createVNode("span", null, toDisplayString(item.title), 1),
                                    createVNode(unref(ChevronRight), { class: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" })
                                  ]),
                                  _: 2
                                }, 1032, ["tooltip"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiCollapsibleContent, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSidebarMenuSub, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.items, (subItem) => {
                                      return openBlock(), createBlock(_component_UiSidebarMenuSubItem, {
                                        key: subItem.title
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiSidebarMenuSubButton, { "as-child": "" }, {
                                            default: withCtx(() => [
                                              createVNode("a", {
                                                href: subItem.url
                                              }, [
                                                createVNode("span", null, toDisplayString(subItem.title), 1)
                                              ], 8, ["href"])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["default-open"]);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavMain.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$3, { __name: "NavMain" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NavUser",
  __ssrInlineRender: true,
  props: {
    user: {}
  },
  setup(__props) {
    const { isMobile } = useSidebar();
    const colorMode = useColorMode();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiSidebarMenu = _sfc_main$i;
      const _component_UiSidebarMenuItem = _sfc_main$9;
      const _component_UiDropdownMenu = _sfc_main$d;
      const _component_UiDropdownMenuTrigger = _sfc_main$7;
      const _component_UiSidebarMenuButton = _sfc_main$a;
      const _component_UiDropdownMenuContent = _sfc_main$b;
      const _component_UiDropdownMenuLabel = _sfc_main$8$1;
      const _component_UiDropdownMenuSeparator = _sfc_main$5$3;
      const _component_UiDropdownMenuGroup = _sfc_main$a$1;
      const _component_UiDropdownMenuItem = _sfc_main$9$1;
      _push(ssrRenderComponent(_component_UiSidebarMenu, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiSidebarMenuItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDropdownMenu, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiSidebarMenuButton, {
                                size: "lg",
                                class: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(_sfc_main$5$2), { class: "h-8 w-8 rounded-lg" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(_sfc_main$8), {
                                            src: __props.user.avatar,
                                            alt: __props.user.name
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(_sfc_main$3$1), { class: "rounded-lg" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` CN `);
                                              } else {
                                                return [
                                                  createTextVNode(" CN ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(_sfc_main$8), {
                                              src: __props.user.avatar,
                                              alt: __props.user.name
                                            }, null, 8, ["src", "alt"]),
                                            createVNode(unref(_sfc_main$3$1), { class: "rounded-lg" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" CN ")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<div class="grid flex-1 text-left text-sm leading-tight"${_scopeId5}><span class="truncate font-medium"${_scopeId5}>${ssrInterpolate(__props.user.name)}</span><span class="truncate text-xs"${_scopeId5}>${ssrInterpolate(__props.user.email)}</span></div>`);
                                    _push6(ssrRenderComponent(unref(ChevronsUpDown), { class: "ml-auto size-4" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$5$2), { class: "h-8 w-8 rounded-lg" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$8), {
                                            src: __props.user.avatar,
                                            alt: __props.user.name
                                          }, null, 8, ["src", "alt"]),
                                          createVNode(unref(_sfc_main$3$1), { class: "rounded-lg" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" CN ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                        createVNode("span", { class: "truncate font-medium" }, toDisplayString(__props.user.name), 1),
                                        createVNode("span", { class: "truncate text-xs" }, toDisplayString(__props.user.email), 1)
                                      ]),
                                      createVNode(unref(ChevronsUpDown), { class: "ml-auto size-4" })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiSidebarMenuButton, {
                                  size: "lg",
                                  class: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$5$2), { class: "h-8 w-8 rounded-lg" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$8), {
                                          src: __props.user.avatar,
                                          alt: __props.user.name
                                        }, null, 8, ["src", "alt"]),
                                        createVNode(unref(_sfc_main$3$1), { class: "rounded-lg" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" CN ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                      createVNode("span", { class: "truncate font-medium" }, toDisplayString(__props.user.name), 1),
                                      createVNode("span", { class: "truncate text-xs" }, toDisplayString(__props.user.email), 1)
                                    ]),
                                    createVNode(unref(ChevronsUpDown), { class: "ml-auto size-4" })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiDropdownMenuContent, {
                          class: "w-(--reka-dropdown-menu-trigger-width) min-w-56 rounded-lg",
                          side: unref(isMobile) ? "bottom" : "right",
                          align: "end",
                          "side-offset": 4
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiDropdownMenuLabel, { class: "p-0 font-normal" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(unref(_sfc_main$5$2), { class: "h-8 w-8 rounded-lg" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(_sfc_main$8), {
                                            src: __props.user.avatar,
                                            alt: __props.user.name
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(_sfc_main$3$1), { class: "rounded-lg" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` CN `);
                                              } else {
                                                return [
                                                  createTextVNode(" CN ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(_sfc_main$8), {
                                              src: __props.user.avatar,
                                              alt: __props.user.name
                                            }, null, 8, ["src", "alt"]),
                                            createVNode(unref(_sfc_main$3$1), { class: "rounded-lg" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" CN ")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<div class="grid flex-1 text-left text-sm leading-tight"${_scopeId5}><span class="truncate font-semibold"${_scopeId5}>${ssrInterpolate(__props.user.name)}</span><span class="truncate text-xs"${_scopeId5}>${ssrInterpolate(__props.user.email)}</span></div></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "flex items-center gap-2 px-1 py-1.5 text-left text-sm" }, [
                                        createVNode(unref(_sfc_main$5$2), { class: "h-8 w-8 rounded-lg" }, {
                                          default: withCtx(() => [
                                            createVNode(unref(_sfc_main$8), {
                                              src: __props.user.avatar,
                                              alt: __props.user.name
                                            }, null, 8, ["src", "alt"]),
                                            createVNode(unref(_sfc_main$3$1), { class: "rounded-lg" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" CN ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                          createVNode("span", { class: "truncate font-semibold" }, toDisplayString(__props.user.name), 1),
                                          createVNode("span", { class: "truncate text-xs" }, toDisplayString(__props.user.email), 1)
                                        ])
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiDropdownMenuSeparator, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiDropdownMenuGroup, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiDropdownMenuItem, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(Sparkles), null, null, _parent7, _scopeId6));
                                          _push7(` Upgrade to Pro `);
                                        } else {
                                          return [
                                            createVNode(unref(Sparkles)),
                                            createTextVNode(" Upgrade to Pro ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UiDropdownMenuItem, null, {
                                        default: withCtx(() => [
                                          createVNode(unref(Sparkles)),
                                          createTextVNode(" Upgrade to Pro ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiDropdownMenuSeparator, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiDropdownMenuGroup, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiDropdownMenuItem, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(BadgeCheck), null, null, _parent7, _scopeId6));
                                          _push7(` Account `);
                                        } else {
                                          return [
                                            createVNode(unref(BadgeCheck)),
                                            createTextVNode(" Account ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiDropdownMenuItem, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(CreditCard), null, null, _parent7, _scopeId6));
                                          _push7(` Billing `);
                                        } else {
                                          return [
                                            createVNode(unref(CreditCard)),
                                            createTextVNode(" Billing ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiDropdownMenuItem, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(Bell), null, null, _parent7, _scopeId6));
                                          _push7(` Notifications `);
                                        } else {
                                          return [
                                            createVNode(unref(Bell)),
                                            createTextVNode(" Notifications ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UiDropdownMenuItem, null, {
                                        default: withCtx(() => [
                                          createVNode(unref(BadgeCheck)),
                                          createTextVNode(" Account ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiDropdownMenuItem, null, {
                                        default: withCtx(() => [
                                          createVNode(unref(CreditCard)),
                                          createTextVNode(" Billing ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiDropdownMenuItem, null, {
                                        default: withCtx(() => [
                                          createVNode(unref(Bell)),
                                          createTextVNode(" Notifications ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiDropdownMenuSeparator, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiDropdownMenuGroup, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiDropdownMenuItem, {
                                      onClick: ($event) => unref(colorMode).preference = "light"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(Sun), null, null, _parent7, _scopeId6));
                                          _push7(` Light `);
                                        } else {
                                          return [
                                            createVNode(unref(Sun)),
                                            createTextVNode(" Light ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiDropdownMenuItem, {
                                      onClick: ($event) => unref(colorMode).preference = "dark"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(Moon), null, null, _parent7, _scopeId6));
                                          _push7(` Dark `);
                                        } else {
                                          return [
                                            createVNode(unref(Moon)),
                                            createTextVNode(" Dark ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiDropdownMenuItem, {
                                      onClick: ($event) => unref(colorMode).preference = "system"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(Monitor), null, null, _parent7, _scopeId6));
                                          _push7(` System `);
                                        } else {
                                          return [
                                            createVNode(unref(Monitor)),
                                            createTextVNode(" System ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UiDropdownMenuItem, {
                                        onClick: ($event) => unref(colorMode).preference = "light"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Sun)),
                                          createTextVNode(" Light ")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(_component_UiDropdownMenuItem, {
                                        onClick: ($event) => unref(colorMode).preference = "dark"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Moon)),
                                          createTextVNode(" Dark ")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(_component_UiDropdownMenuItem, {
                                        onClick: ($event) => unref(colorMode).preference = "system"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Monitor)),
                                          createTextVNode(" System ")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiDropdownMenuSeparator, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiDropdownMenuItem, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(LogOut), null, null, _parent6, _scopeId5));
                                    _push6(` Log out `);
                                  } else {
                                    return [
                                      createVNode(unref(LogOut)),
                                      createTextVNode(" Log out ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiDropdownMenuLabel, { class: "p-0 font-normal" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex items-center gap-2 px-1 py-1.5 text-left text-sm" }, [
                                      createVNode(unref(_sfc_main$5$2), { class: "h-8 w-8 rounded-lg" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$8), {
                                            src: __props.user.avatar,
                                            alt: __props.user.name
                                          }, null, 8, ["src", "alt"]),
                                          createVNode(unref(_sfc_main$3$1), { class: "rounded-lg" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" CN ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                        createVNode("span", { class: "truncate font-semibold" }, toDisplayString(__props.user.name), 1),
                                        createVNode("span", { class: "truncate text-xs" }, toDisplayString(__props.user.email), 1)
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiDropdownMenuSeparator),
                                createVNode(_component_UiDropdownMenuGroup, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiDropdownMenuItem, null, {
                                      default: withCtx(() => [
                                        createVNode(unref(Sparkles)),
                                        createTextVNode(" Upgrade to Pro ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiDropdownMenuSeparator),
                                createVNode(_component_UiDropdownMenuGroup, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiDropdownMenuItem, null, {
                                      default: withCtx(() => [
                                        createVNode(unref(BadgeCheck)),
                                        createTextVNode(" Account ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiDropdownMenuItem, null, {
                                      default: withCtx(() => [
                                        createVNode(unref(CreditCard)),
                                        createTextVNode(" Billing ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiDropdownMenuItem, null, {
                                      default: withCtx(() => [
                                        createVNode(unref(Bell)),
                                        createTextVNode(" Notifications ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiDropdownMenuSeparator),
                                createVNode(_component_UiDropdownMenuGroup, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiDropdownMenuItem, {
                                      onClick: ($event) => unref(colorMode).preference = "light"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Sun)),
                                        createTextVNode(" Light ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(_component_UiDropdownMenuItem, {
                                      onClick: ($event) => unref(colorMode).preference = "dark"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Moon)),
                                        createTextVNode(" Dark ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(_component_UiDropdownMenuItem, {
                                      onClick: ($event) => unref(colorMode).preference = "system"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Monitor)),
                                        createTextVNode(" System ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiDropdownMenuSeparator),
                                createVNode(_component_UiDropdownMenuItem, null, {
                                  default: withCtx(() => [
                                    createVNode(unref(LogOut)),
                                    createTextVNode(" Log out ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(_component_UiSidebarMenuButton, {
                                size: "lg",
                                class: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$5$2), { class: "h-8 w-8 rounded-lg" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$8), {
                                        src: __props.user.avatar,
                                        alt: __props.user.name
                                      }, null, 8, ["src", "alt"]),
                                      createVNode(unref(_sfc_main$3$1), { class: "rounded-lg" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" CN ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                    createVNode("span", { class: "truncate font-medium" }, toDisplayString(__props.user.name), 1),
                                    createVNode("span", { class: "truncate text-xs" }, toDisplayString(__props.user.email), 1)
                                  ]),
                                  createVNode(unref(ChevronsUpDown), { class: "ml-auto size-4" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDropdownMenuContent, {
                            class: "w-(--reka-dropdown-menu-trigger-width) min-w-56 rounded-lg",
                            side: unref(isMobile) ? "bottom" : "right",
                            align: "end",
                            "side-offset": 4
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiDropdownMenuLabel, { class: "p-0 font-normal" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-center gap-2 px-1 py-1.5 text-left text-sm" }, [
                                    createVNode(unref(_sfc_main$5$2), { class: "h-8 w-8 rounded-lg" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$8), {
                                          src: __props.user.avatar,
                                          alt: __props.user.name
                                        }, null, 8, ["src", "alt"]),
                                        createVNode(unref(_sfc_main$3$1), { class: "rounded-lg" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" CN ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                      createVNode("span", { class: "truncate font-semibold" }, toDisplayString(__props.user.name), 1),
                                      createVNode("span", { class: "truncate text-xs" }, toDisplayString(__props.user.email), 1)
                                    ])
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiDropdownMenuSeparator),
                              createVNode(_component_UiDropdownMenuGroup, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiDropdownMenuItem, null, {
                                    default: withCtx(() => [
                                      createVNode(unref(Sparkles)),
                                      createTextVNode(" Upgrade to Pro ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiDropdownMenuSeparator),
                              createVNode(_component_UiDropdownMenuGroup, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiDropdownMenuItem, null, {
                                    default: withCtx(() => [
                                      createVNode(unref(BadgeCheck)),
                                      createTextVNode(" Account ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiDropdownMenuItem, null, {
                                    default: withCtx(() => [
                                      createVNode(unref(CreditCard)),
                                      createTextVNode(" Billing ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiDropdownMenuItem, null, {
                                    default: withCtx(() => [
                                      createVNode(unref(Bell)),
                                      createTextVNode(" Notifications ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiDropdownMenuSeparator),
                              createVNode(_component_UiDropdownMenuGroup, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiDropdownMenuItem, {
                                    onClick: ($event) => unref(colorMode).preference = "light"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Sun)),
                                      createTextVNode(" Light ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(_component_UiDropdownMenuItem, {
                                    onClick: ($event) => unref(colorMode).preference = "dark"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Moon)),
                                      createTextVNode(" Dark ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(_component_UiDropdownMenuItem, {
                                    onClick: ($event) => unref(colorMode).preference = "system"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Monitor)),
                                      createTextVNode(" System ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiDropdownMenuSeparator),
                              createVNode(_component_UiDropdownMenuItem, null, {
                                default: withCtx(() => [
                                  createVNode(unref(LogOut)),
                                  createTextVNode(" Log out ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["side"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiDropdownMenu, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                          default: withCtx(() => [
                            createVNode(_component_UiSidebarMenuButton, {
                              size: "lg",
                              class: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$5$2), { class: "h-8 w-8 rounded-lg" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$8), {
                                      src: __props.user.avatar,
                                      alt: __props.user.name
                                    }, null, 8, ["src", "alt"]),
                                    createVNode(unref(_sfc_main$3$1), { class: "rounded-lg" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" CN ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                  createVNode("span", { class: "truncate font-medium" }, toDisplayString(__props.user.name), 1),
                                  createVNode("span", { class: "truncate text-xs" }, toDisplayString(__props.user.email), 1)
                                ]),
                                createVNode(unref(ChevronsUpDown), { class: "ml-auto size-4" })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDropdownMenuContent, {
                          class: "w-(--reka-dropdown-menu-trigger-width) min-w-56 rounded-lg",
                          side: unref(isMobile) ? "bottom" : "right",
                          align: "end",
                          "side-offset": 4
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiDropdownMenuLabel, { class: "p-0 font-normal" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center gap-2 px-1 py-1.5 text-left text-sm" }, [
                                  createVNode(unref(_sfc_main$5$2), { class: "h-8 w-8 rounded-lg" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$8), {
                                        src: __props.user.avatar,
                                        alt: __props.user.name
                                      }, null, 8, ["src", "alt"]),
                                      createVNode(unref(_sfc_main$3$1), { class: "rounded-lg" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" CN ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                    createVNode("span", { class: "truncate font-semibold" }, toDisplayString(__props.user.name), 1),
                                    createVNode("span", { class: "truncate text-xs" }, toDisplayString(__props.user.email), 1)
                                  ])
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiDropdownMenuSeparator),
                            createVNode(_component_UiDropdownMenuGroup, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiDropdownMenuItem, null, {
                                  default: withCtx(() => [
                                    createVNode(unref(Sparkles)),
                                    createTextVNode(" Upgrade to Pro ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiDropdownMenuSeparator),
                            createVNode(_component_UiDropdownMenuGroup, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiDropdownMenuItem, null, {
                                  default: withCtx(() => [
                                    createVNode(unref(BadgeCheck)),
                                    createTextVNode(" Account ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiDropdownMenuItem, null, {
                                  default: withCtx(() => [
                                    createVNode(unref(CreditCard)),
                                    createTextVNode(" Billing ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiDropdownMenuItem, null, {
                                  default: withCtx(() => [
                                    createVNode(unref(Bell)),
                                    createTextVNode(" Notifications ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiDropdownMenuSeparator),
                            createVNode(_component_UiDropdownMenuGroup, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiDropdownMenuItem, {
                                  onClick: ($event) => unref(colorMode).preference = "light"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Sun)),
                                    createTextVNode(" Light ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(_component_UiDropdownMenuItem, {
                                  onClick: ($event) => unref(colorMode).preference = "dark"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Moon)),
                                    createTextVNode(" Dark ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(_component_UiDropdownMenuItem, {
                                  onClick: ($event) => unref(colorMode).preference = "system"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Monitor)),
                                    createTextVNode(" System ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiDropdownMenuSeparator),
                            createVNode(_component_UiDropdownMenuItem, null, {
                              default: withCtx(() => [
                                createVNode(unref(LogOut)),
                                createTextVNode(" Log out ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["side"])
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
              createVNode(_component_UiSidebarMenuItem, null, {
                default: withCtx(() => [
                  createVNode(_component_UiDropdownMenu, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiSidebarMenuButton, {
                            size: "lg",
                            class: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$5$2), { class: "h-8 w-8 rounded-lg" }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$8), {
                                    src: __props.user.avatar,
                                    alt: __props.user.name
                                  }, null, 8, ["src", "alt"]),
                                  createVNode(unref(_sfc_main$3$1), { class: "rounded-lg" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" CN ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                createVNode("span", { class: "truncate font-medium" }, toDisplayString(__props.user.name), 1),
                                createVNode("span", { class: "truncate text-xs" }, toDisplayString(__props.user.email), 1)
                              ]),
                              createVNode(unref(ChevronsUpDown), { class: "ml-auto size-4" })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiDropdownMenuContent, {
                        class: "w-(--reka-dropdown-menu-trigger-width) min-w-56 rounded-lg",
                        side: unref(isMobile) ? "bottom" : "right",
                        align: "end",
                        "side-offset": 4
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiDropdownMenuLabel, { class: "p-0 font-normal" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center gap-2 px-1 py-1.5 text-left text-sm" }, [
                                createVNode(unref(_sfc_main$5$2), { class: "h-8 w-8 rounded-lg" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$8), {
                                      src: __props.user.avatar,
                                      alt: __props.user.name
                                    }, null, 8, ["src", "alt"]),
                                    createVNode(unref(_sfc_main$3$1), { class: "rounded-lg" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" CN ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                  createVNode("span", { class: "truncate font-semibold" }, toDisplayString(__props.user.name), 1),
                                  createVNode("span", { class: "truncate text-xs" }, toDisplayString(__props.user.email), 1)
                                ])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDropdownMenuSeparator),
                          createVNode(_component_UiDropdownMenuGroup, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiDropdownMenuItem, null, {
                                default: withCtx(() => [
                                  createVNode(unref(Sparkles)),
                                  createTextVNode(" Upgrade to Pro ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDropdownMenuSeparator),
                          createVNode(_component_UiDropdownMenuGroup, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiDropdownMenuItem, null, {
                                default: withCtx(() => [
                                  createVNode(unref(BadgeCheck)),
                                  createTextVNode(" Account ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiDropdownMenuItem, null, {
                                default: withCtx(() => [
                                  createVNode(unref(CreditCard)),
                                  createTextVNode(" Billing ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiDropdownMenuItem, null, {
                                default: withCtx(() => [
                                  createVNode(unref(Bell)),
                                  createTextVNode(" Notifications ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDropdownMenuSeparator),
                          createVNode(_component_UiDropdownMenuGroup, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiDropdownMenuItem, {
                                onClick: ($event) => unref(colorMode).preference = "light"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(Sun)),
                                  createTextVNode(" Light ")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_UiDropdownMenuItem, {
                                onClick: ($event) => unref(colorMode).preference = "dark"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(Moon)),
                                  createTextVNode(" Dark ")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_UiDropdownMenuItem, {
                                onClick: ($event) => unref(colorMode).preference = "system"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(Monitor)),
                                  createTextVNode(" System ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDropdownMenuSeparator),
                          createVNode(_component_UiDropdownMenuItem, null, {
                            default: withCtx(() => [
                              createVNode(unref(LogOut)),
                              createTextVNode(" Log out ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["side"])
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
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavUser.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main$2, { __name: "NavUser" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppSidebar",
  __ssrInlineRender: true,
  props: {
    collapsible: { default: "icon" }
  },
  setup(__props) {
    const props = __props;
    const { t, locale, setLocale } = useI18n();
    const { can } = useAuthorization();
    const { isAuthenticated, signOut } = useOidcAuth();
    const authStore = useAuthStore();
    function toggleLocale() {
      setLocale(locale.value === "fr" ? "en" : "fr");
    }
    const data = computed(() => ({
      user: {
        name: authStore.user?.name || "Utilisateur",
        email: authStore.user?.email || "",
        avatar: "/avatars/shadcn.jpg"
      },
      teams: [
        { name: "Acme Inc", logo: GalleryVerticalEnd, plan: "Enterprise" }
      ],
      navMain: [
        {
          title: t("dashboard.overview"),
          url: "/user",
          icon: LayoutDashboard,
          isActive: false,
          items: []
        },
        {
          title: t("dashboard.webVitals"),
          url: "/admin/web-vitals",
          icon: Gauge,
          isActive: false,
          items: [],
          condition: can("manage-dashboard")
        },
        {
          title: t("dashboard.users"),
          url: "/admin/users",
          icon: User,
          isActive: false,
          items: [],
          condition: can("manage-users")
        },
        {
          title: t("dashboard.settings"),
          url: "/settings",
          icon: Settings2,
          isActive: false,
          items: []
        }
      ].filter((item) => item.condition !== false)
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiSidebar = _sfc_main$s;
      const _component_UiSidebarHeader = _sfc_main$l;
      const _component_UiButton = _sfc_main$c;
      const _component_UiSidebarContent = _sfc_main$r;
      const _component_NavMain = __nuxt_component_4;
      const _component_UiSidebarFooter = _sfc_main$q;
      const _component_NavUser = __nuxt_component_6;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_UiSidebarRail = _sfc_main$2$1;
      _push(ssrRenderComponent(_component_UiSidebar, mergeProps(props, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiSidebarHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between px-2"${_scopeId2}><span class="text-sm font-semibold"${_scopeId2}>${ssrInterpolate(unref(t)("app.name"))}</span>`);
                  _push3(ssrRenderComponent(_component_UiButton, {
                    variant: "ghost",
                    size: "icon",
                    class: "size-7",
                    onClick: toggleLocale
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Globe), { class: "size-4" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Globe), { class: "size-4" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between px-2" }, [
                      createVNode("span", { class: "text-sm font-semibold" }, toDisplayString(unref(t)("app.name")), 1),
                      createVNode(_component_UiButton, {
                        variant: "ghost",
                        size: "icon",
                        class: "size-7",
                        onClick: toggleLocale
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Globe), { class: "size-4" })
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiSidebarContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NavMain, {
                    items: unref(data).navMain
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NavMain, {
                      items: unref(data).navMain
                    }, null, 8, ["items"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiSidebarFooter, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NavUser, {
                    user: unref(data).user
                  }, null, _parent3, _scopeId2));
                  if (unref(isAuthenticated)) {
                    _push3(ssrRenderComponent(_component_UiButton, {
                      variant: "ghost",
                      size: "sm",
                      class: "w-full justify-start",
                      onClick: ($event) => unref(signOut)()
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(LogOut), { class: "mr-2 size-4" }, null, _parent4, _scopeId3));
                          _push4(` ${ssrInterpolate(unref(t)("nav.logout"))}`);
                        } else {
                          return [
                            createVNode(unref(LogOut), { class: "mr-2 size-4" }),
                            createTextVNode(" " + toDisplayString(unref(t)("nav.logout")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(_component_UiButton, {
                      variant: "ghost",
                      size: "sm",
                      class: "w-full justify-start",
                      "as-child": ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_NuxtLink, { to: "/auth/login" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(LogOut), { class: "mr-2 size-4" }, null, _parent5, _scopeId4));
                                _push5(` ${ssrInterpolate(unref(t)("nav.login"))}`);
                              } else {
                                return [
                                  createVNode(unref(LogOut), { class: "mr-2 size-4" }),
                                  createTextVNode(" " + toDisplayString(unref(t)("nav.login")), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_NuxtLink, { to: "/auth/login" }, {
                              default: withCtx(() => [
                                createVNode(unref(LogOut), { class: "mr-2 size-4" }),
                                createTextVNode(" " + toDisplayString(unref(t)("nav.login")), 1)
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col gap-2" }, [
                      createVNode(_component_NavUser, {
                        user: unref(data).user
                      }, null, 8, ["user"]),
                      unref(isAuthenticated) ? (openBlock(), createBlock(_component_UiButton, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        class: "w-full justify-start",
                        onClick: ($event) => unref(signOut)()
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(LogOut), { class: "mr-2 size-4" }),
                          createTextVNode(" " + toDisplayString(unref(t)("nav.logout")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"])) : (openBlock(), createBlock(_component_UiButton, {
                        key: 1,
                        variant: "ghost",
                        size: "sm",
                        class: "w-full justify-start",
                        "as-child": ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtLink, { to: "/auth/login" }, {
                            default: withCtx(() => [
                              createVNode(unref(LogOut), { class: "mr-2 size-4" }),
                              createTextVNode(" " + toDisplayString(unref(t)("nav.login")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiSidebarRail, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiSidebarHeader, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex items-center justify-between px-2" }, [
                    createVNode("span", { class: "text-sm font-semibold" }, toDisplayString(unref(t)("app.name")), 1),
                    createVNode(_component_UiButton, {
                      variant: "ghost",
                      size: "icon",
                      class: "size-7",
                      onClick: toggleLocale
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Globe), { class: "size-4" })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_UiSidebarContent, null, {
                default: withCtx(() => [
                  createVNode(_component_NavMain, {
                    items: unref(data).navMain
                  }, null, 8, ["items"])
                ]),
                _: 1
              }),
              createVNode(_component_UiSidebarFooter, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col gap-2" }, [
                    createVNode(_component_NavUser, {
                      user: unref(data).user
                    }, null, 8, ["user"]),
                    unref(isAuthenticated) ? (openBlock(), createBlock(_component_UiButton, {
                      key: 0,
                      variant: "ghost",
                      size: "sm",
                      class: "w-full justify-start",
                      onClick: ($event) => unref(signOut)()
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(LogOut), { class: "mr-2 size-4" }),
                        createTextVNode(" " + toDisplayString(unref(t)("nav.logout")), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"])) : (openBlock(), createBlock(_component_UiButton, {
                      key: 1,
                      variant: "ghost",
                      size: "sm",
                      class: "w-full justify-start",
                      "as-child": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtLink, { to: "/auth/login" }, {
                          default: withCtx(() => [
                            createVNode(unref(LogOut), { class: "mr-2 size-4" }),
                            createTextVNode(" " + toDisplayString(unref(t)("nav.login")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }))
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_UiSidebarRail)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppSidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "AppSidebar" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UiSidebarProvider = _sfc_main$3$2;
  const _component_AppSidebar = __nuxt_component_1;
  _push(ssrRenderComponent(_component_UiSidebarProvider, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_AppSidebar, null, null, _parent2, _scopeId));
        _push2(`<main class="flex-1 w-full"${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
        _push2(`</main>`);
      } else {
        return [
          createVNode(_component_AppSidebar),
          createVNode("main", { class: "flex-1 w-full" }, [
            renderSlot(_ctx.$slots, "default")
          ])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-BFCooQmz.mjs.map
