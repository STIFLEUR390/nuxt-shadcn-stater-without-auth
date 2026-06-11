import { _ as _sfc_main$j, a as _sfc_main$1 } from './index-DRjisF_K.mjs';
import { _ as _sfc_main$2 } from './Separator-2kwi4XBY.mjs';
import { _ as _sfc_main$6, a as _sfc_main$2$1, b as _sfc_main$4, c as _sfc_main$3, d as _sfc_main$5, e as _sfc_main$1$1 } from './BreadcrumbSeparator-lo2iomjA.mjs';
import { withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'class-variance-authority';
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
import '@lucide/vue';
import 'vue-sonner';
import 'clsx';
import 'tailwind-merge';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'reka-ui';
import '@vueuse/core';
import './index-4MyzTv5r.mjs';
import './Input-DpdpNcLa.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UiSidebarInset = _sfc_main$j;
  const _component_UiSidebarTrigger = _sfc_main$1;
  const _component_UiSeparator = _sfc_main$2;
  const _component_UiBreadcrumb = _sfc_main$6;
  const _component_UiBreadcrumbList = _sfc_main$2$1;
  const _component_UiBreadcrumbItem = _sfc_main$4;
  const _component_UiBreadcrumbLink = _sfc_main$3;
  const _component_UiBreadcrumbSeparator = _sfc_main$5;
  const _component_UiBreadcrumbPage = _sfc_main$1$1;
  _push(ssrRenderComponent(_component_UiSidebarInset, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<header class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12"${_scopeId}><div class="flex items-center gap-2 px-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_UiSidebarTrigger, { class: "-ml-1" }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_UiSeparator, {
          orientation: "vertical",
          class: "mr-2 data-[orientation=vertical]:h-4"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_UiBreadcrumb, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_UiBreadcrumbList, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_UiBreadcrumbItem, { class: "hidden md:block" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_UiBreadcrumbLink, { href: "#" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Admin `);
                              } else {
                                return [
                                  createTextVNode(" Admin ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_UiBreadcrumbLink, { href: "#" }, {
                              default: withCtx(() => [
                                createTextVNode(" Admin ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_UiBreadcrumbSeparator, { class: "hidden md:block" }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_UiBreadcrumbItem, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_UiBreadcrumbPage, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Dashboard`);
                              } else {
                                return [
                                  createTextVNode("Dashboard")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_UiBreadcrumbPage, null, {
                              default: withCtx(() => [
                                createTextVNode("Dashboard")
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
                      createVNode(_component_UiBreadcrumbItem, { class: "hidden md:block" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiBreadcrumbLink, { href: "#" }, {
                            default: withCtx(() => [
                              createTextVNode(" Admin ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiBreadcrumbSeparator, { class: "hidden md:block" }),
                      createVNode(_component_UiBreadcrumbItem, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiBreadcrumbPage, null, {
                            default: withCtx(() => [
                              createTextVNode("Dashboard")
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
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_UiBreadcrumbList, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiBreadcrumbItem, { class: "hidden md:block" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiBreadcrumbLink, { href: "#" }, {
                          default: withCtx(() => [
                            createTextVNode(" Admin ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiBreadcrumbSeparator, { class: "hidden md:block" }),
                    createVNode(_component_UiBreadcrumbItem, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiBreadcrumbPage, null, {
                          default: withCtx(() => [
                            createTextVNode("Dashboard")
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
        }, _parent2, _scopeId));
        _push2(`</div></header><div class="flex flex-1 flex-col gap-4 p-4 pt-0"${_scopeId}><div class="grid auto-rows-min gap-4 md:grid-cols-3"${_scopeId}><div class="bg-muted/50 aspect-video rounded-xl"${_scopeId}></div><div class="bg-muted/50 aspect-video rounded-xl"${_scopeId}></div><div class="bg-muted/50 aspect-video rounded-xl"${_scopeId}></div></div><div class="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min"${_scopeId}></div></div>`);
      } else {
        return [
          createVNode("header", { class: "flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12" }, [
            createVNode("div", { class: "flex items-center gap-2 px-4" }, [
              createVNode(_component_UiSidebarTrigger, { class: "-ml-1" }),
              createVNode(_component_UiSeparator, {
                orientation: "vertical",
                class: "mr-2 data-[orientation=vertical]:h-4"
              }),
              createVNode(_component_UiBreadcrumb, null, {
                default: withCtx(() => [
                  createVNode(_component_UiBreadcrumbList, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiBreadcrumbItem, { class: "hidden md:block" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiBreadcrumbLink, { href: "#" }, {
                            default: withCtx(() => [
                              createTextVNode(" Admin ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiBreadcrumbSeparator, { class: "hidden md:block" }),
                      createVNode(_component_UiBreadcrumbItem, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiBreadcrumbPage, null, {
                            default: withCtx(() => [
                              createTextVNode("Dashboard")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ]),
          createVNode("div", { class: "flex flex-1 flex-col gap-4 p-4 pt-0" }, [
            createVNode("div", { class: "grid auto-rows-min gap-4 md:grid-cols-3" }, [
              createVNode("div", { class: "bg-muted/50 aspect-video rounded-xl" }),
              createVNode("div", { class: "bg-muted/50 aspect-video rounded-xl" }),
              createVNode("div", { class: "bg-muted/50 aspect-video rounded-xl" })
            ]),
            createVNode("div", { class: "bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-CusSTXEb.mjs.map
