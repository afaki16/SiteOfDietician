import { mergeProps, ref, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main$8 = {
  __name: "WelcomeSection",
  __ssrInlineRender: true,
  setup(__props) {
    const welcomeHeight = ref("300px");
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--37eecc77": welcomeHeight.value
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "top",
        class: "welcome-container"
      }, _attrs, _cssVars))} data-v-60eba94a><div class="welcome-content" data-v-60eba94a><h1 class="name" data-v-60eba94a>Diyetisyen Nisa Sakar</h1></div><svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" data-v-60eba94a><path fill="#ffffff" d="M0,80 C920,80,1120,300,1440,160 L1440,320 L0,320 Z" data-v-60eba94a></path></svg></div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WelcomeSection.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-60eba94a"]]);
const _sfc_main$7 = {
  __name: "CounterBlock",
  __ssrInlineRender: true,
  props: {
    number: {
      type: Number,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    suffix: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const displayNumber = ref(0);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "counter-thumb" }, _attrs))}><div class="d-flex"><span class="counter-number">${ssrInterpolate(displayNumber.value)}</span><span class="counter-number-text">${ssrInterpolate(__props.suffix)}</span></div><span class="counter-text">${ssrInterpolate(__props.text)}</span></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CounterBlock.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const aboutImage = "/images/Image.jpeg";
const _sfc_main$6 = {
  __name: "AboutSection",
  __ssrInlineRender: true,
  setup(__props) {
    const title = ref("Hakk\u0131mda");
    const subtitle = ref("E\u011Fitim");
    const aboutDescription = ref("");
    const mission = ref("");
    const missionItems = ref([]);
    const counters = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "section_2",
        class: "section section-padding section-bg"
      }, _attrs))} data-v-28757526><div class="container" data-v-28757526><div class="row" data-v-28757526><div class="col-lg-6 col-12 mb-5 mb-lg-0" data-v-28757526><img${ssrRenderAttr("src", aboutImage)} class="custom-text-box-image img-fluid" alt="About Us" data-v-28757526></div><div class="col-lg-6 col-12" data-v-28757526><div class="custom-text-box" data-v-28757526><h2 class="mb-2" data-v-28757526>${ssrInterpolate(title.value)}</h2><h5 class="mb-3" data-v-28757526>${ssrInterpolate(subtitle.value)}</h5><p class="mb-0" data-v-28757526>${ssrInterpolate(aboutDescription.value)}</p></div><div class="row" data-v-28757526><div class="col-lg-6 col-md-6 col-12" data-v-28757526><div class="custom-text-box mb-lg-0" data-v-28757526><h5 class="mb-3" data-v-28757526>Uzmanl\u0131k Alanlar\u0131m</h5><p data-v-28757526>${ssrInterpolate(mission.value)}</p><ul class="custom-list" data-v-28757526><!--[-->`);
      ssrRenderList(missionItems.value, (item, index2) => {
        _push(`<li data-v-28757526><span class="check-circle" data-v-28757526><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-v-28757526><polyline points="20 6 9 17 4 12" data-v-28757526></polyline></svg></span> ${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div></div><div class="col-lg-6 col-md-6 col-12" data-v-28757526><div class="custom-text-box d-flex flex-wrap d-lg-block mb-lg-0" data-v-28757526><h5 class="mb-3" data-v-28757526>Toplam</h5><!--[-->`);
      ssrRenderList(counters.value, (counter, index2) => {
        _push(ssrRenderComponent(_sfc_main$7, {
          key: index2,
          number: counter.number,
          text: counter.text,
          suffix: counter.suffix
        }, null, _parent));
      });
      _push(`<!--]--></div><p data-v-28757526>* Veriler ayl\u0131k olarak g\xFCncellenmektedir.</p></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-28757526"]]);
const blockClasses = "col-lg-3 col-md-6 col-12 mb-4 mb-lg-0";
const _sfc_main$5 = {
  __name: "CardSection",
  __ssrInlineRender: true,
  setup(__props) {
    const title = ref("E\u011Fer Beraber \xC7al\u0131\u015F\u0131rsak...");
    const featuredBlocks = ref([
      {
        image: "/images/icons/zayiflama.jpg",
        link: "donate.html",
        boldText: "Zay\u0131flama",
        text: "Se\xE7enekleri",
        icon: "\u{1F3AF}",
        backContent: [
          "\u{1F957} Ki\u015Fiye \xF6zel d\xFC\u015F\xFCk kalorili men\xFCler",
          "\u{1F4AA} Ya\u011F yak\u0131m\u0131na y\xF6nelik egzersiz programlar\u0131",
          "\u{1F4CA} Haftal\u0131k \xF6l\xE7\xFCm ve ilerleme takibi",
          "\u{1F4F2} 7/24 motivasyon ve destek"
        ]
      },
      {
        image: "/images/icons/kiloalma.jpg",
        link: "donate.html",
        boldText: "Kilo Alma",
        text: "Se\xE7enekleri",
        icon: "\u{1F4C8}",
        backContent: [
          "\u{1F354} Y\xFCksek kalorili dengeli beslenme program\u0131",
          "\u{1F4AA} Kas k\xFCtlesi art\u0131\u015F\u0131 i\xE7in \xF6zel egzersizler",
          "\u{1F4CA} V\xFCcut analizine dayal\u0131 kilo plan\u0131",
          "\u{1F357} Protein a\u011F\u0131rl\u0131kl\u0131 yemek tarifleri"
        ]
      },
      {
        image: "images/icons/saglik.jpg",
        link: "donate.html",
        boldText: "Sa\u011Fl\u0131kl\u0131",
        text: "Ya\u015Fam",
        icon: "\u{1F33F}",
        backContent: [
          "\u{1F34E} Do\u011Fal ve dengeli beslenme \xF6nerileri",
          "\u{1F9D8}\u200D\u2640\uFE0F Stres y\xF6netimi deste\u011Fi",
          "\u26A1 Enerji seviyesini art\u0131ran ipu\xE7lar\u0131",
          "\u{1F6CC} Kaliteli uyku al\u0131\u015Fkanl\u0131klar\u0131 geli\u015Ftirme"
        ]
      },
      {
        image: "images/icons/sporcu.jpg",
        link: "donate.html",
        boldText: "Sporcu",
        text: "Beslenmesi",
        icon: "\u{1F3CB}\uFE0F\u200D\u2642\uFE0F",
        backContent: [
          "\u{1F969} Performans art\u0131r\u0131c\u0131 beslenme planlar\u0131",
          "\u{1F4AA} Antrenman sonras\u0131 tarifler",
          "\u{1F4CA} Kas k\xFCtlesine dayal\u0131 men\xFCler",
          "\u{1F964} Elektrolit ve protein takviyeleri \xF6nerileri"
        ]
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "section_5",
        class: "section section-padding"
      }, _attrs))} data-v-600438ff><div class="container" data-v-600438ff><div class="row" data-v-600438ff><div class="col-lg-10 col-12 text-center mx-auto" data-v-600438ff><h2 class="mb-5" data-v-600438ff>${ssrInterpolate(title.value)}</h2></div><!--[-->`);
      ssrRenderList(featuredBlocks.value, (block, index2) => {
        _push(`<div class="${ssrRenderClass(blockClasses)}" data-v-600438ff><div class="flip-card" data-v-600438ff><a href="#section_6" class="flip-card-link" data-v-600438ff><div class="flip-card-inner" data-v-600438ff><div class="flip-card-front" data-v-600438ff><img${ssrRenderAttr("src", block.image)} class="featured-block-image img-fluid"${ssrRenderAttr("alt", block.boldText)} data-v-600438ff><div class="card-text" data-v-600438ff><p class="featured-block-text" data-v-600438ff><strong data-v-600438ff>${ssrInterpolate(block.boldText)}</strong> ${ssrInterpolate(block.text)}</p></div></div><div class="flip-card-back" data-v-600438ff><h2 data-v-600438ff>${ssrInterpolate(block.icon)}</h2><div class="back-content" data-v-600438ff><ul class="feature-list" data-v-600438ff><!--[-->`);
        ssrRenderList(block.backContent, (item, itemIndex) => {
          _push(`<li data-v-600438ff>${ssrInterpolate(item)}</li>`);
        });
        _push(`<!--]--></ul></div><div class="card-text" data-v-600438ff><p class="featured-block-text" data-v-600438ff><strong data-v-600438ff>${ssrInterpolate(block.boldText)}</strong> ${ssrInterpolate(block.text)}</p></div></div></div></a></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CardSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-600438ff"]]);
const LOGOS_PER_VIEW = 4;
const _sfc_main$4 = {
  __name: "LogoSlider",
  __ssrInlineRender: true,
  setup(__props) {
    const title = ref("Kurumsal Referanslar\u0131m\u0131z");
    const currentIndex = ref(0);
    const logos = ref([
      {
        name: "Ko\xE7 Sistem",
        image: "images/references/koc.png"
      },
      {
        name: "\u0130stanbulspor",
        image: "images/references/istanbulspor.png"
      },
      {
        name: "Heltia",
        image: "images/references/heltia.png"
      },
      {
        name: "Nil\xFCfer",
        image: "images/references/nil\xFCfer.png"
      }
    ]);
    const currentLogos = computed(() => {
      const startIndex = currentIndex.value * LOGOS_PER_VIEW;
      const visibleLogos = [];
      for (let i = 0; i < LOGOS_PER_VIEW; i++) {
        const index2 = (startIndex + i) % logos.value.length;
        visibleLogos.push(logos.value[index2]);
      }
      return visibleLogos;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "slider-wrapper" }, _attrs))} data-v-13726aef><div class="logo-slider-container" data-v-13726aef><h2 class="mb-5" data-v-13726aef>${ssrInterpolate(title.value)}</h2><div class="logo-slider" data-v-13726aef><div class="logo-track" data-v-13726aef><!--[-->`);
      ssrRenderList(currentLogos.value, (logo) => {
        _push(`<div class="logo-item" data-v-13726aef><img${ssrRenderAttr("src", logo.image)}${ssrRenderAttr("alt", logo.name)} class="logo-image" data-v-13726aef></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LogoSlider.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-13726aef"]]);
const _sfc_main$3 = {
  __name: "PriceSection",
  __ssrInlineRender: true,
  setup(__props) {
    const pricingPlans = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "section_4" }, _attrs))} data-v-d6598e95><div class="slider-wrapper" data-v-d6598e95><h2 class="section-title" data-v-d6598e95>Online Diyet Programlar\u0131</h2><p class="section-subtitle" data-v-d6598e95>Size en uygun program\u0131 se\xE7in</p>`);
      if (pricingPlans.value && pricingPlans.value.length > 0) {
        _push(`<div class="pricing-container" data-v-d6598e95><!--[-->`);
        ssrRenderList(pricingPlans.value, (plan) => {
          _push(`<div class="price-card" data-v-d6598e95>`);
          if (plan.ribbon) {
            _push(`<div class="ribbon" data-v-d6598e95>En Avantajl\u0131</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="plan-title" data-v-d6598e95>${ssrInterpolate(plan.title)}</div><div class="duration" data-v-d6598e95>${ssrInterpolate(plan.duration)}</div><div class="price-container" data-v-d6598e95><div class="price-content" data-v-d6598e95><div class="price" data-v-d6598e95>${ssrInterpolate(plan.pricePerSession)}\u20BA<span data-v-d6598e95>/Seans</span></div><div class="divider" data-v-d6598e95></div><p class="profit-label" data-v-d6598e95>\u2705 Ki\u015Fiye \xD6zel Beslenme Plan\u0131</p>`);
          if (plan.premium) {
            _push(`<p class="profit-label" data-v-d6598e95> \u2705 V\xFCcut Analiz Takibi </p>`);
          } else {
            _push(`<!---->`);
          }
          if (plan.premium) {
            _push(`<p class="profit-label" data-v-d6598e95> \u2705 7/24 WhatsApp Deste\u011Fi </p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="profit-content" data-v-d6598e95><span class="profit-label" data-v-d6598e95>Toplam Kazan\xE7</span><span class="profit-value" data-v-d6598e95>${ssrInterpolate(plan.different)}\u20BA</span><span class="profit-detail" data-v-d6598e95>1 Seans \xD7 ${ssrInterpolate(plan.pricePerSession)}\u20BA</span><div class="profit-divider" data-v-d6598e95></div><span class="profit-label" data-v-d6598e95>Toplam ${ssrInterpolate(plan.totalPrice)}\u20BA</span></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PriceSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-d6598e95"]]);
const _sfc_main$2 = {
  __name: "BlogSection",
  __ssrInlineRender: true,
  setup(__props) {
    const postImage = ref("");
    const sectionTitle = ref("Bilgilendiren Payla\u015F\u0131malar");
    const posts = ref([]);
    const cleanContent = (content) => {
      content = content.replace(/<img src="https:\/\/medium.com\/_\/stat?.+?>/g, "");
      const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
      postImage.value = imgMatch ? imgMatch[1] : "";
      return content.trim();
    };
    const truncateContent = (content) => {
      content = cleanContent(content);
      let plainText = content.replace(/<[^>]*>/g, "");
      let truncated = plainText.substring(0, 150);
      if (plainText.length > 150) {
        truncated += "...";
      }
      return truncated;
    };
    const formatDate = (date) => {
      return new Date(date).toLocaleDateString("tr-TR");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "section_3",
        class: "section section-padding"
      }, _attrs))} data-v-2b6a8d6f><div class="container" data-v-2b6a8d6f><div class="row" data-v-2b6a8d6f><div class="col-lg-12 col-12 text-center mb-4" data-v-2b6a8d6f><h2 data-v-2b6a8d6f>${ssrInterpolate(sectionTitle.value)}</h2></div><!--[-->`);
      ssrRenderList(posts.value, (post) => {
        var _a;
        _push(`<div class="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0" data-v-2b6a8d6f><div class="custom-block-wrap" data-v-2b6a8d6f><img${ssrRenderAttr("src", postImage.value)} class="fixed-size-image custom-block-image img-fluid" alt="asdgasdf" data-v-2b6a8d6f><div class="d-flex align-items-center my-2" data-v-2b6a8d6f><span class="date-chip mb-0" data-v-2b6a8d6f>${ssrInterpolate(formatDate(post.pubDate))}</span></div><div class="custom-block" data-v-2b6a8d6f><div class="custom-block-body" data-v-2b6a8d6f><h5 class="mb-3" data-v-2b6a8d6f>${ssrInterpolate(post.title)}</h5><div class="post-content" data-v-2b6a8d6f>${(_a = truncateContent(post.content)) != null ? _a : ""}</div></div><a${ssrRenderAttr("href", post.link)} target="_blank" class="custom-btn btn" data-v-2b6a8d6f>Devam\u0131n\u0131 Oku</a></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-2b6a8d6f"]]);
const _sfc_main$1 = {
  __name: "ContactSection",
  __ssrInlineRender: true,
  setup(__props) {
    const title = ref("\u0130leti\u015Fim");
    const contactPerson = ref({
      name: "Nisa Sakar",
      position: "Diyetisyen",
      image: "/images/Image.jpeg"
    });
    const contactInfo = ref([
      {
        type: "link",
        icon: "bi bi-telephone",
        text: "+90-536-594-7718",
        href: "https://wa.me/905365947718",
        linkClass: "contact-link"
      },
      {
        type: "link",
        icon: "bi bi-envelope",
        text: "dytnisasakar@gmail.com",
        href: "mailto:dytnisasakar@gmail.com",
        linkClass: "contact-link"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "section_6",
        class: "section contact-section section-padding"
      }, _attrs))} data-v-8db20742><div class="container" data-v-8db20742><div class="row" data-v-8db20742><div class="col-lg-4 col-12 ms-auto mb-5 mb-lg-0" data-v-8db20742><div class="contact-info-wrap" data-v-8db20742><h2 data-v-8db20742>${ssrInterpolate(title.value)}</h2><div class="contact-image-wrap d-flex flex-wrap" data-v-8db20742><img${ssrRenderAttr("src", contactPerson.value.image)} class="img-fluid avatar-image"${ssrRenderAttr("alt", contactPerson.value.name)} data-v-8db20742><div class="d-flex flex-column justify-content-center ms-3" data-v-8db20742><h6 class="mb-0" data-v-8db20742>${ssrInterpolate(contactPerson.value.name)}</h6><p class="mb-0" data-v-8db20742>${ssrInterpolate(contactPerson.value.position)}</p></div></div><div class="contact-info" data-v-8db20742><div class="d-flex flex-wrap" data-v-8db20742><!--[-->`);
      ssrRenderList(contactInfo.value, (info, index2) => {
        _push(`<div class="contact-info-item" data-v-8db20742><div class="contact-info-icon" data-v-8db20742><i class="${ssrRenderClass(info.icon)}" data-v-8db20742></i></div><div class="contact-info-text" data-v-8db20742>`);
        if (info.type === "link") {
          _push(`<a${ssrRenderAttr("href", info.href)} class="${ssrRenderClass(info.linkClass)}" data-v-8db20742>${ssrInterpolate(info.text)}</a>`);
        } else {
          _push(`<p data-v-8db20742>${ssrInterpolate(info.text)}</p>`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="col-lg-5 col-12 mx-auto" data-v-8db20742><form class="custom-form contact-form" data-v-8db20742><div class="contact-image-wrap d-flex flex-wrap" data-v-8db20742><i class="bi bi-linkedin text-2xl" style="${ssrRenderStyle({ "font-size": "24px", "color": "#0a66c2" })}" data-v-8db20742></i><div class="d-flex flex-column justify-content-center ms-3" data-v-8db20742><a href="https://www.linkedin.com/in/nisa-sakar-783804243/?originalSubdomain=tr" target="_blank" class="text-decoration-none text-dark" data-v-8db20742><h6 class="mb-0" data-v-8db20742>LinkedIn - Nisa Sakar</h6></a></div></div><div class="contact-image-wrap d-flex flex-wrap" data-v-8db20742><i class="bi bi-instagram text-2xl" style="${ssrRenderStyle({ "font-size": "24px", "color": "#e4405f" })}" data-v-8db20742></i><div class="d-flex flex-column justify-content-center ms-3" data-v-8db20742><a href="https://www.instagram.com/diyetisyennisakar" target="_blank" class="text-decoration-none text-dark" data-v-8db20742><h6 class="mb-0" data-v-8db20742>Instagram - diyetisyennisakar</h6></a></div></div><div class="contact-image-wrap d-flex flex-wrap" data-v-8db20742><i class="bi bi-whatsapp text-2xl" style="${ssrRenderStyle({ "font-size": "24px", "color": "#25d366" })}" data-v-8db20742></i><div class="d-flex flex-column justify-content-center ms-3" data-v-8db20742><a href="https://wa.me/905365947718" target="_blank" class="text-decoration-none text-dark" data-v-8db20742><h6 class="mb-0" data-v-8db20742>Whatsapp - 0 536 594 77 18</h6></a></div></div><div class="contact-image-wrap d-flex flex-wrap" data-v-8db20742><i class="bi bi-google-play" style="${ssrRenderStyle({ "font-size": "24px", "color": "#4285f4" })}" data-v-8db20742></i><div class="d-flex flex-column justify-content-center ms-3" data-v-8db20742><a href="https://www.google.com/search?sca_esv=d68bc316d57e2cfd&amp;tbm=lcl&amp;sxsrf=ADLYWIL_eB3KQ0Dn0DJDVNQYQ0Zocxf6vg:1735228783056&amp;q=Diyetisyen+Nisa+Sakar+Yorumlar&amp;rflfq=1&amp;num=20&amp;stick=H4sIAAAAAAAAAONgkxIxNDIyMTSyMDYxNDWyNDc3M7I0NN3AyPiKUc4lszK1JLO4MjVPwS-zOFEhODE7sUghMr-oNDcnsWgRKwEFAAM2O-hdAAAA&amp;rldimm=12241283415297762915&amp;hl=tr-TR&amp;sa=X&amp;ved=2ahUKEwjF9t755sWKAxVDAtsEHQ-fJ5YQ9fQKegQIKhAF&amp;biw=1536&amp;bih=731&amp;dpr=1.25#lkt=LocalPoiReviews" target="_blank" class="text-decoration-none text-dark" data-v-8db20742><h6 class="mb-0" data-v-8db20742>Google Yorumlar</h6></a></div></div></form></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8db20742"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WelcomeSection = __nuxt_component_0;
      const _component_AboutSection = __nuxt_component_1;
      const _component_CardSection = __nuxt_component_2;
      const _component_LogoSlider = __nuxt_component_3;
      const _component_PriceSection = __nuxt_component_4;
      const _component_BlogSection = __nuxt_component_5;
      const _component_ContactSection = __nuxt_component_6;
      _push(`<main${ssrRenderAttrs(mergeProps({ role: "main" }, _attrs))} data-v-adc2f3eb>`);
      _push(ssrRenderComponent(_component_WelcomeSection, null, null, _parent));
      _push(ssrRenderComponent(_component_AboutSection, null, null, _parent));
      _push(ssrRenderComponent(_component_CardSection, null, null, _parent));
      _push(ssrRenderComponent(_component_LogoSlider, null, null, _parent));
      _push(ssrRenderComponent(_component_PriceSection, null, null, _parent));
      _push(ssrRenderComponent(_component_BlogSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ContactSection, null, null, _parent));
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-adc2f3eb"]]);

export { index as default };
//# sourceMappingURL=index-CpudTGMa.mjs.map
