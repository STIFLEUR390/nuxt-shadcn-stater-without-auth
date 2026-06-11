import { u as useColorMode, _ as _sfc_main$d, a as _sfc_main$1, b as _sfc_main$b, c as _sfc_main$a, d as _sfc_main$9 } from './composables-CULDogY5.mjs';
import { _ as _sfc_main$2 } from './index-4MyzTv5r.mjs';
import { defineComponent, withCtx, unref, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { Sun, Moon, Monitor } from '@lucide/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ModeToggle",
  __ssrInlineRender: true,
  setup(__props) {
    const colorMode = useColorMode();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDropdownMenu = _sfc_main$d;
      const _component_UiDropdownMenuTrigger = _sfc_main$1;
      const _component_UiButton = _sfc_main$2;
      const _component_UiDropdownMenuContent = _sfc_main$b;
      const _component_UiDropdownMenuGroup = _sfc_main$a;
      const _component_UiDropdownMenuItem = _sfc_main$9;
      _push(ssrRenderComponent(_component_UiDropdownMenu, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, {
                    variant: "outline",
                    size: "icon"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Sun), { class: "rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Moon), { class: "absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }, null, _parent4, _scopeId3));
                        _push4(`<span class="sr-only"${_scopeId3}>Toggle theme</span>`);
                      } else {
                        return [
                          createVNode(unref(Sun), { class: "rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }),
                          createVNode(unref(Moon), { class: "absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }),
                          createVNode("span", { class: "sr-only" }, "Toggle theme")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, {
                      variant: "outline",
                      size: "icon"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Sun), { class: "rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }),
                        createVNode(unref(Moon), { class: "absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }),
                        createVNode("span", { class: "sr-only" }, "Toggle theme")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiDropdownMenuContent, { align: "end" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDropdownMenuGroup, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDropdownMenuItem, {
                          onClick: ($event) => unref(colorMode).preference = "light"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Sun), null, null, _parent5, _scopeId4));
                              _push5(` Light `);
                            } else {
                              return [
                                createVNode(unref(Sun)),
                                createTextVNode(" Light ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiDropdownMenuItem, {
                          onClick: ($event) => unref(colorMode).preference = "dark"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Moon), null, null, _parent5, _scopeId4));
                              _push5(` Dark `);
                            } else {
                              return [
                                createVNode(unref(Moon)),
                                createTextVNode(" Dark ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiDropdownMenuItem, {
                          onClick: ($event) => unref(colorMode).preference = "system"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Monitor), null, null, _parent5, _scopeId4));
                              _push5(` System `);
                            } else {
                              return [
                                createVNode(unref(Monitor)),
                                createTextVNode(" System ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
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
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_UiButton, {
                    variant: "outline",
                    size: "icon"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Sun), { class: "rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }),
                      createVNode(unref(Moon), { class: "absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }),
                      createVNode("span", { class: "sr-only" }, "Toggle theme")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiDropdownMenuContent, { align: "end" }, {
                default: withCtx(() => [
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ModeToggle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "ModeToggle" });

export { __nuxt_component_0 as _ };
//# sourceMappingURL=ModeToggle-DCOFDjt8.mjs.map
