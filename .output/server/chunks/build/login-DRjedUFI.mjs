import { _ as _sfc_main$6, a as _sfc_main$1, b as _sfc_main$2, c as _sfc_main$3, d as _sfc_main$4 } from './CardTitle-DF-CylnM.mjs';
import { _ as _sfc_main$5 } from './index-4MyzTv5r.mjs';
import { defineComponent, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { a as useI18n, b as useOidcAuth } from './server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const { signIn } = useOidcAuth();
    const providers = [
      { key: "keycloak", label: "🔑 Keycloak", variant: "default" },
      { key: "github", label: "🐙 GitHub", variant: "outline" },
      { key: "logto", label: "🛡️ Logto", variant: "outline" }
      // Google nécessite le preset 'oidc' (pas encore dans les presets beta)
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCard = _sfc_main$6;
      const _component_UiCardHeader = _sfc_main$1;
      const _component_UiCardTitle = _sfc_main$2;
      const _component_UiCardDescription = _sfc_main$3;
      const _component_UiCardContent = _sfc_main$4;
      const _component_UiButton = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex min-h-screen items-center justify-center px-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UiCard, { class: "w-full max-w-md" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, { class: "text-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, { class: "text-2xl" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(t)("auth.login"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(t)("auth.login")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiCardDescription, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Choisissez votre méthode de connexion `);
                      } else {
                        return [
                          createTextVNode(" Choisissez votre méthode de connexion ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCardTitle, { class: "text-2xl" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("auth.login")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiCardDescription, null, {
                      default: withCtx(() => [
                        createTextVNode(" Choisissez votre méthode de connexion ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardContent, { class: "flex flex-col gap-3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(providers, (p) => {
                    _push3(ssrRenderComponent(_component_UiButton, {
                      key: p.key,
                      variant: p.variant,
                      class: "w-full",
                      onClick: ($event) => unref(signIn)(p.key)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(p.label)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(p.label), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(providers, (p) => {
                      return createVNode(_component_UiButton, {
                        key: p.key,
                        variant: p.variant,
                        class: "w-full",
                        onClick: ($event) => unref(signIn)(p.key)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(p.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["variant", "onClick"]);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardHeader, { class: "text-center" }, {
                default: withCtx(() => [
                  createVNode(_component_UiCardTitle, { class: "text-2xl" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("auth.login")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiCardDescription, null, {
                    default: withCtx(() => [
                      createTextVNode(" Choisissez votre méthode de connexion ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, { class: "flex flex-col gap-3" }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(providers, (p) => {
                    return createVNode(_component_UiButton, {
                      key: p.key,
                      variant: p.variant,
                      class: "w-full",
                      onClick: ($event) => unref(signIn)(p.key)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(p.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["variant", "onClick"]);
                  }), 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-DRjedUFI.mjs.map
