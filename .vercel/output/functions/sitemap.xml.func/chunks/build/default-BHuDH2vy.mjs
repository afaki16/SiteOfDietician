import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { computed, ref, mergeProps, useSSRContext } from 'vue';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main$2 = {
  __name: "navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const isScrolled = ref(false);
    const isMenuOpen = ref(false);
    const menuItems = ref([
      { text: "Ana Sayfa", link: "#top" },
      { text: "Hakk\u0131mda", link: "#section_2" },
      { text: "Blog", link: "#section_3" },
      { text: "Hizmetler", link: "#section_5" },
      { text: "\u0130leti\u015Fim", link: "#section_6" },
      {
        text: "F\u0131rsat K\xF6\u015Fesi",
        link: "#section_4",
        icon: "\u{1F381}",
        isButton: true
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(_attrs)} data-v-d2528d8b><nav class="${ssrRenderClass(["navbar", { scrolled: isScrolled.value }])}" data-v-d2528d8b><div class="navbar-container" data-v-d2528d8b><div class="mobile-menu" data-v-d2528d8b><div class="${ssrRenderClass(["hamburger", { active: isMenuOpen.value }])}" data-v-d2528d8b><span data-v-d2528d8b></span><span data-v-d2528d8b></span><span data-v-d2528d8b></span></div></div><div class="${ssrRenderClass(["nav-menu", { active: isMenuOpen.value }])}" data-v-d2528d8b><ul class="nav-list" data-v-d2528d8b><!--[-->`);
      ssrRenderList(menuItems.value, (item, index) => {
        _push(`<li class="nav-item" data-v-d2528d8b><a${ssrRenderAttr("href", item.link)} class="${ssrRenderClass(["nav-link", { "btn-primary": item.isButton }])}" data-v-d2528d8b><span class="nav-icon" data-v-d2528d8b>${ssrInterpolate(item.icon)}</span><span data-v-d2528d8b>${ssrInterpolate(item.text)}</span></a></li>`);
      });
      _push(`<!--]--></ul></div></div></nav><div class="navbar-spacer" data-v-d2528d8b></div></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const NavBar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-d2528d8b"]]);
const _sfc_main$1 = {
  __name: "SiteFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const currentYear = computed(() => (/* @__PURE__ */ new Date()).getFullYear());
    const socialLinks = ref([
      {
        platform: "Instagram",
        icon: "bi-instagram",
        url: "https://www.instagram.com/alperenfakii/",
        external: true
      },
      {
        platform: "LinkedIn",
        icon: "bi-linkedin",
        url: "https://www.linkedin.com/in/alperen-faki/",
        external: true
      },
      {
        platform: "Github",
        icon: "bi-github",
        url: "https://github.com/afaki16",
        external: true
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "site-footer-bottom" }, _attrs))} data-v-bee11e4e><div class="container" data-v-bee11e4e><div class="row" data-v-bee11e4e><div class="col-lg-6 col-md-7 col-12" data-v-bee11e4e><p class="copyright-text mb-0" data-v-bee11e4e> Copyright \xA9 ${ssrInterpolate(currentYear.value)} Bu web sitesi <a href="mailto:alperenfaki@gmail.com" target="_blank" class="site-footer-link" data-v-bee11e4e><strong data-v-bee11e4e>alperenfaki@gmail.com</strong></a> taraf\u0131ndan olu\u015Fturulmu\u015Ftur. </p></div><div class="col-lg-6 col-md-5 col-12 d-flex justify-content-center align-items-center mx-auto" data-v-bee11e4e><ul class="social-icon" data-v-bee11e4e><!--[-->`);
      ssrRenderList(socialLinks.value, (social) => {
        _push(`<li data-v-bee11e4e><a${ssrRenderAttr("href", social.url)} class="${ssrRenderClass(["social-icon-link", social.icon])}"${ssrRenderAttr("target", social.external ? "_blank" : "_self")}${ssrRenderAttr("title", social.platform)} data-v-bee11e4e></a></li>`);
      });
      _push(`<!--]--></ul></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/SiteFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SiteFooter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bee11e4e"]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(NavBar, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(SiteFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-BHuDH2vy.mjs.map
