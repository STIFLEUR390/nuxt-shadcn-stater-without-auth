import { _ as _sfc_main$a } from './index-4MyzTv5r.mjs';
import { _ as _sfc_main$6$1, a as _sfc_main$1$1, b as _sfc_main$b, c as _sfc_main$3$1, d as _sfc_main$4$1 } from './CardTitle-DF-CylnM.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, ref, computed, useSSRContext, renderSlot } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
import { a as useI18n, n as navigateTo, c as cn } from './server.mjs';
import { reactiveOmit } from '@vueuse/core';
import { _ as _sfc_main$c } from './index-CqCH2U3_.mjs';
import { RefreshCw } from '@lucide/vue';
import { defineStore } from 'pinia';
import 'class-variance-authority';
import 'reka-ui';
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

const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Table",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "table-container",
        class: "relative w-full overflow-x-auto"
      }, _attrs))}><table data-slot="table" class="${ssrRenderClass(unref(cn)("w-full caption-bottom text-xs", props.class))}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</table></div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/Table.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "TableBody",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<tbody${ssrRenderAttrs(mergeProps({
        "data-slot": "table-body",
        class: unref(cn)("[&_tr:last-child]:border-0", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</tbody>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/TableBody.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "TableCaption",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<caption${ssrRenderAttrs(mergeProps({
        "data-slot": "table-caption",
        class: unref(cn)("text-muted-foreground mt-4 text-xs", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</caption>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/TableCaption.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "TableCell",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<td${ssrRenderAttrs(mergeProps({
        "data-slot": "table-cell",
        class: unref(cn)("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</td>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/TableCell.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "TableRow",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<tr${ssrRenderAttrs(mergeProps({
        "data-slot": "table-row",
        class: unref(cn)("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors has-aria-expanded:bg-muted/50", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</tr>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/TableRow.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TableEmpty",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    colspan: { default: 1 }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$5, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$6, mergeProps({
              class: unref(cn)(
                "p-4 whitespace-nowrap align-middle text-sm text-foreground",
                props.class
              )
            }, unref(delegatedProps)), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-center py-10"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-center py-10" }, [
                      renderSlot(_ctx.$slots, "default")
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$6, mergeProps({
                class: unref(cn)(
                  "p-4 whitespace-nowrap align-middle text-sm text-foreground",
                  props.class
                )
              }, unref(delegatedProps)), {
                default: withCtx(() => [
                  createVNode("div", { class: "flex items-center justify-center py-10" }, [
                    renderSlot(_ctx.$slots, "default")
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/TableEmpty.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TableFooter",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<tfoot${ssrRenderAttrs(mergeProps({
        "data-slot": "table-footer",
        class: unref(cn)("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</tfoot>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/TableFooter.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TableHead",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<th${ssrRenderAttrs(mergeProps({
        "data-slot": "table-head",
        class: unref(cn)("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</th>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/TableHead.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TableHeader",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<thead${ssrRenderAttrs(mergeProps({
        "data-slot": "table-header",
        class: unref(cn)("[&_tr]:border-b", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</thead>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/TableHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const useWebVitalsStore = defineStore("webVitals", () => {
  const metrics = ref([]);
  const isLoading = ref(false);
  const error = ref(null);
  const thresholds = {
    LCP: { good: 2500, poor: 4e3 },
    CLS: { good: 0.1, poor: 0.25 },
    INP: { good: 200, poor: 500 },
    FCP: { good: 1800, poor: 3e3 },
    TTFB: { good: 800, poor: 1800 }
  };
  const avgByType = computed(() => {
    const grouped = {};
    for (const m of metrics.value) {
      if (!grouped[m.name]) {
        grouped[m.name] = { total: 0, count: 0, ratings: { good: 0, "needs-improvement": 0, poor: 0 } };
      }
      grouped[m.name].total += m.value;
      grouped[m.name].count++;
      grouped[m.name].ratings[m.rating]++;
    }
    return Object.entries(grouped).map(([name, data]) => ({
      name,
      avgValue: Math.round(data.total / data.count),
      count: data.count,
      threshold: thresholds[name] || { good: 0, poor: 0 },
      goodPct: Math.round(data.ratings.good / data.count * 100),
      poorPct: Math.round(data.ratings.poor / data.count * 100)
    }));
  });
  const healthScore = computed(() => {
    if (avgByType.value.length === 0) return 100;
    const scores = avgByType.value.map((m) => m.goodPct > 90 ? 100 : m.goodPct > 70 ? 75 : m.goodPct > 50 ? 50 : 25);
    return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  });
  async function fetchMetrics() {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await $fetch("/api/web-vitals/list");
      metrics.value = response.metrics;
    } catch (err) {
      error.value = "Impossible de charger les métriques";
    } finally {
      isLoading.value = false;
    }
  }
  return { metrics, isLoading, error, avgByType, healthScore, thresholds, fetchMetrics };
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "web-vitals",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t } = useI18n();
    const { can } = useAuthorization();
    const store = useWebVitalsStore();
    if (!can("manage-dashboard")) {
      [__temp, __restore] = withAsyncContext(() => navigateTo("/auth/login")), await __temp, __restore();
    }
    function ratingVariant(rating) {
      return rating === "good" ? "default" : rating === "needs-improvement" ? "secondary" : "destructive";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiButton = _sfc_main$a;
      const _component_UiCard = _sfc_main$6$1;
      const _component_UiCardHeader = _sfc_main$1$1;
      const _component_UiCardTitle = _sfc_main$b;
      const _component_UiCardDescription = _sfc_main$3$1;
      const _component_UiCardContent = _sfc_main$4$1;
      const _component_UiTable = _sfc_main$9;
      const _component_UiTableHeader = _sfc_main$1;
      const _component_UiTableRow = _sfc_main$5;
      const _component_UiTableHead = _sfc_main$2;
      const _component_UiTableBody = _sfc_main$8;
      const _component_UiTableCell = _sfc_main$6;
      const _component_UiBadge = _sfc_main$c;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6 p-6" }, _attrs))}><div class="flex items-center justify-between"><div><h1 class="text-2xl font-bold">${ssrInterpolate(unref(t)("dashboard.webVitals"))}</h1><p class="text-muted-foreground text-sm"> Métriques de performance réelles des utilisateurs </p></div>`);
      _push(ssrRenderComponent(_component_UiButton, {
        variant: "outline",
        disabled: unref(store).isLoading,
        onClick: ($event) => unref(store).fetchMetrics()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(RefreshCw), {
              class: ["mr-2 size-4", { "animate-spin": unref(store).isLoading }]
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(unref(t)("common.search"))}`);
          } else {
            return [
              createVNode(unref(RefreshCw), {
                class: ["mr-2 size-4", { "animate-spin": unref(store).isLoading }]
              }, null, 8, ["class"]),
              createTextVNode(" " + toDisplayString(unref(t)("common.search")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UiCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Score de santé`);
                      } else {
                        return [
                          createTextVNode("Score de santé")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiCardDescription, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Pourcentage de métriques dans le vert (Good) `);
                      } else {
                        return [
                          createTextVNode(" Pourcentage de métriques dans le vert (Good) ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Score de santé")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiCardDescription, null, {
                      default: withCtx(() => [
                        createTextVNode(" Pourcentage de métriques dans le vert (Good) ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-4"${_scopeId2}><div class="${ssrRenderClass([
                    unref(store).healthScore >= 90 ? "text-green-500" : unref(store).healthScore >= 70 ? "text-yellow-500" : "text-red-500",
                    "text-5xl font-bold"
                  ])}"${_scopeId2}>${ssrInterpolate(unref(store).healthScore)}% </div><div class="text-muted-foreground text-sm"${_scopeId2}>${ssrInterpolate(unref(store).healthScore >= 90 ? "✨ Excellent" : unref(store).healthScore >= 70 ? "⚠️ Correct" : "🔴 À améliorer")}</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-4" }, [
                      createVNode("div", {
                        class: [
                          "text-5xl font-bold",
                          unref(store).healthScore >= 90 ? "text-green-500" : unref(store).healthScore >= 70 ? "text-yellow-500" : "text-red-500"
                        ]
                      }, toDisplayString(unref(store).healthScore) + "% ", 3),
                      createVNode("div", { class: "text-muted-foreground text-sm" }, toDisplayString(unref(store).healthScore >= 90 ? "✨ Excellent" : unref(store).healthScore >= 70 ? "⚠️ Correct" : "🔴 À améliorer"), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_UiCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Score de santé")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiCardDescription, null, {
                    default: withCtx(() => [
                      createTextVNode(" Pourcentage de métriques dans le vert (Good) ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex items-center gap-4" }, [
                    createVNode("div", {
                      class: [
                        "text-5xl font-bold",
                        unref(store).healthScore >= 90 ? "text-green-500" : unref(store).healthScore >= 70 ? "text-yellow-500" : "text-red-500"
                      ]
                    }, toDisplayString(unref(store).healthScore) + "% ", 3),
                    createVNode("div", { class: "text-muted-foreground text-sm" }, toDisplayString(unref(store).healthScore >= 90 ? "✨ Excellent" : unref(store).healthScore >= 70 ? "⚠️ Correct" : "🔴 À améliorer"), 1)
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="grid grid-cols-1 gap-4 md:grid-cols-2"><!--[-->`);
      ssrRenderList(unref(store).avgByType, (m) => {
        _push(ssrRenderComponent(_component_UiCard, {
          key: m.name
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiCardHeader, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(m.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(m.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiCardDescription, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(m.count)} mesures`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(m.count) + " mesures", 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiCardTitle, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(m.name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_UiCardDescription, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(m.count) + " mesures", 1)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiCardContent, { class: "space-y-3" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-baseline justify-between"${_scopeId2}><span class="text-2xl font-bold"${_scopeId2}>${ssrInterpolate(m.avgValue)}</span><span class="text-muted-foreground text-xs"${_scopeId2}> Bon &lt; ${ssrInterpolate(m.threshold.good)} / Mauvais &gt; ${ssrInterpolate(m.threshold.poor)}</span></div><div class="bg-muted h-2 overflow-hidden rounded-full"${_scopeId2}><div class="flex h-full"${_scopeId2}><div class="bg-green-500 h-full transition-all" style="${ssrRenderStyle({ width: `${m.goodPct}%` })}"${_scopeId2}></div><div class="bg-yellow-500 h-full transition-all" style="${ssrRenderStyle({ width: `${100 - m.goodPct - m.poorPct}%` })}"${_scopeId2}></div><div class="bg-red-500 h-full transition-all" style="${ssrRenderStyle({ width: `${m.poorPct}%` })}"${_scopeId2}></div></div></div><div class="flex justify-between text-xs"${_scopeId2}><span class="text-green-600"${_scopeId2}>Bon ${ssrInterpolate(m.goodPct)}%</span><span class="text-red-600"${_scopeId2}>Mauvais ${ssrInterpolate(m.poorPct)}%</span></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-baseline justify-between" }, [
                        createVNode("span", { class: "text-2xl font-bold" }, toDisplayString(m.avgValue), 1),
                        createVNode("span", { class: "text-muted-foreground text-xs" }, " Bon < " + toDisplayString(m.threshold.good) + " / Mauvais > " + toDisplayString(m.threshold.poor), 1)
                      ]),
                      createVNode("div", { class: "bg-muted h-2 overflow-hidden rounded-full" }, [
                        createVNode("div", { class: "flex h-full" }, [
                          createVNode("div", {
                            class: "bg-green-500 h-full transition-all",
                            style: { width: `${m.goodPct}%` }
                          }, null, 4),
                          createVNode("div", {
                            class: "bg-yellow-500 h-full transition-all",
                            style: { width: `${100 - m.goodPct - m.poorPct}%` }
                          }, null, 4),
                          createVNode("div", {
                            class: "bg-red-500 h-full transition-all",
                            style: { width: `${m.poorPct}%` }
                          }, null, 4)
                        ])
                      ]),
                      createVNode("div", { class: "flex justify-between text-xs" }, [
                        createVNode("span", { class: "text-green-600" }, "Bon " + toDisplayString(m.goodPct) + "%", 1),
                        createVNode("span", { class: "text-red-600" }, "Mauvais " + toDisplayString(m.poorPct) + "%", 1)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiCardHeader, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(m.name), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_UiCardDescription, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(m.count) + " mesures", 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024),
                createVNode(_component_UiCardContent, { class: "space-y-3" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex items-baseline justify-between" }, [
                      createVNode("span", { class: "text-2xl font-bold" }, toDisplayString(m.avgValue), 1),
                      createVNode("span", { class: "text-muted-foreground text-xs" }, " Bon < " + toDisplayString(m.threshold.good) + " / Mauvais > " + toDisplayString(m.threshold.poor), 1)
                    ]),
                    createVNode("div", { class: "bg-muted h-2 overflow-hidden rounded-full" }, [
                      createVNode("div", { class: "flex h-full" }, [
                        createVNode("div", {
                          class: "bg-green-500 h-full transition-all",
                          style: { width: `${m.goodPct}%` }
                        }, null, 4),
                        createVNode("div", {
                          class: "bg-yellow-500 h-full transition-all",
                          style: { width: `${100 - m.goodPct - m.poorPct}%` }
                        }, null, 4),
                        createVNode("div", {
                          class: "bg-red-500 h-full transition-all",
                          style: { width: `${m.poorPct}%` }
                        }, null, 4)
                      ])
                    ]),
                    createVNode("div", { class: "flex justify-between text-xs" }, [
                      createVNode("span", { class: "text-green-600" }, "Bon " + toDisplayString(m.goodPct) + "%", 1),
                      createVNode("span", { class: "text-red-600" }, "Mauvais " + toDisplayString(m.poorPct) + "%", 1)
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
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_UiCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Dernières mesures`);
                      } else {
                        return [
                          createTextVNode("Dernières mesures")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Dernières mesures")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(store).metrics.length > 0) {
                    _push3(ssrRenderComponent(_component_UiTable, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableHeader, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiTableRow, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTableHead, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`Métrique`);
                                          } else {
                                            return [
                                              createTextVNode("Métrique")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableHead, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`Valeur`);
                                          } else {
                                            return [
                                              createTextVNode("Valeur")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableHead, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`Évaluation`);
                                          } else {
                                            return [
                                              createTextVNode("Évaluation")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableHead, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`Page`);
                                          } else {
                                            return [
                                              createTextVNode("Page")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableHead, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`Date`);
                                          } else {
                                            return [
                                              createTextVNode("Date")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiTableHead, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Métrique")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableHead, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Valeur")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableHead, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Évaluation")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableHead, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Page")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableHead, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Date")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiTableRow, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiTableHead, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Métrique")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableHead, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Valeur")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableHead, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Évaluation")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableHead, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Page")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableHead, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Date")
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
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableBody, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(unref(store).metrics.slice(0, 20), (m) => {
                                  _push5(ssrRenderComponent(_component_UiTableRow, {
                                    key: m.id
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "font-medium" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(m.name)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(m.name), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, null, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(m.value)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(m.value), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, null, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_UiBadge, {
                                                variant: ratingVariant(m.rating)
                                              }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`${ssrInterpolate(m.rating)}`);
                                                  } else {
                                                    return [
                                                      createTextVNode(toDisplayString(m.rating), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_component_UiBadge, {
                                                  variant: ratingVariant(m.rating)
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(m.rating), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["variant"])
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "max-w-48 truncate text-xs" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(m.href)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(m.href), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-xs" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(new Date(m.timestamp).toLocaleDateString("fr-FR"))}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(new Date(m.timestamp).toLocaleDateString("fr-FR")), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(m.name), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(m.value), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiBadge, {
                                                variant: ratingVariant(m.rating)
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(m.rating), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["variant"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, { class: "max-w-48 truncate text-xs" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(m.href), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, { class: "text-xs" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(new Date(m.timestamp).toLocaleDateString("fr-FR")), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(store).metrics.slice(0, 20), (m) => {
                                    return openBlock(), createBlock(_component_UiTableRow, {
                                      key: m.id
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(m.name), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(m.value), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiBadge, {
                                              variant: ratingVariant(m.rating)
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(m.rating), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["variant"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "max-w-48 truncate text-xs" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(m.href), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-xs" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(new Date(m.timestamp).toLocaleDateString("fr-FR")), 1)
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
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiTableHeader, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableRow, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableHead, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Métrique")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHead, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Valeur")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHead, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Évaluation")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHead, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Page")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHead, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Date")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTableBody, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(store).metrics.slice(0, 20), (m) => {
                                  return openBlock(), createBlock(_component_UiTableRow, {
                                    key: m.id
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(m.name), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(m.value), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiBadge, {
                                            variant: ratingVariant(m.rating)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(m.rating), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["variant"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "max-w-48 truncate text-xs" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(m.href), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-xs" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(new Date(m.timestamp).toLocaleDateString("fr-FR")), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<div class="text-muted-foreground py-8 text-center"${_scopeId2}> Aucune donnée collectée pour le moment </div>`);
                  }
                } else {
                  return [
                    unref(store).metrics.length > 0 ? (openBlock(), createBlock(_component_UiTable, { key: 0 }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHeader, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiTableRow, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Métrique")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Valeur")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Évaluation")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Page")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Date")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableBody, null, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(store).metrics.slice(0, 20), (m) => {
                              return openBlock(), createBlock(_component_UiTableRow, {
                                key: m.id
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(m.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(m.value), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiBadge, {
                                        variant: ratingVariant(m.rating)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(m.rating), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["variant"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "max-w-48 truncate text-xs" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(m.href), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "text-xs" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(new Date(m.timestamp).toLocaleDateString("fr-FR")), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "text-muted-foreground py-8 text-center"
                    }, " Aucune donnée collectée pour le moment "))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_UiCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Dernières mesures")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, null, {
                default: withCtx(() => [
                  unref(store).metrics.length > 0 ? (openBlock(), createBlock(_component_UiTable, { key: 0 }, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableHeader, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableRow, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Métrique")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Valeur")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Évaluation")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Page")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Date")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTableBody, null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(store).metrics.slice(0, 20), (m) => {
                            return openBlock(), createBlock(_component_UiTableRow, {
                              key: m.id
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableCell, { class: "font-medium" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(m.name), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_UiTableCell, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(m.value), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_UiTableCell, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiBadge, {
                                      variant: ratingVariant(m.rating)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(m.rating), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["variant"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_UiTableCell, { class: "max-w-48 truncate text-xs" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(m.href), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_UiTableCell, { class: "text-xs" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(new Date(m.timestamp).toLocaleDateString("fr-FR")), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "text-muted-foreground py-8 text-center"
                  }, " Aucune donnée collectée pour le moment "))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/web-vitals.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=web-vitals-D4PReIjs.mjs.map
