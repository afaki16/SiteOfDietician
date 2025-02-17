<template>
    <!-- Alt Footer - Copyright ve Sosyal Medya -->
    <div class="site-footer-bottom">
      <div class="container">
        <div class="row">
          <!-- Copyright -->
          <div class="col-lg-6 col-md-7 col-12">
            <p class="copyright-text mb-0">
              Copyright © {{ currentYear }}
  
              Bu web sitesi
              <a
                href="mailto:alperenfaki@gmail.com"
                target="_blank"
                class="site-footer-link"
                ><strong>alperenfaki@gmail.com</strong></a
              >
              tarafından oluşturulmuştur.
            </p>
          </div>
  
          <!-- Sosyal Medya İkonları -->
          <div
            class="col-lg-6 col-md-5 col-12 d-flex justify-content-center align-items-center mx-auto"
          >
            <ul class="social-icon">
              <li v-for="social in socialLinks" :key="social.platform">
                <a
                  :href="social.url"
                  :class="['social-icon-link', social.icon]"
                  :target="social.external ? '_blank' : '_self'"
                  :title="social.platform"
                >
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  // Güncel yıl
  const currentYear = computed(() => new Date().getFullYear())
  
  // Sosyal medya linkleri
  const socialLinks = ref([
    {
      platform: 'Instagram',
      icon: 'bi-instagram',
      url: 'https://www.instagram.com/alperenfakii/',
      external: true,
    },
    {
      platform: 'LinkedIn',
      icon: 'bi-linkedin',
      url: 'https://www.linkedin.com/in/alperen-faki/',
      external: true,
    },
    {
      platform: 'Github',
      icon: 'bi-github',
      url: 'https://github.com/afaki16',
      external: true,
    },
  ])
  </script>
  
  <style scoped>
  .site-footer {
    background: var(--dark-color);
    padding: 5rem 0;
  }
  
  .logo {
    max-width: 180px;
    margin-bottom: 1rem;
  }
  
  .site-footer-title {
    color: var(--white-color);
    font-size: 1.25rem;
    font-weight: 600;
  }
  
  .footer-menu {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .footer-menu-link {
    color: var(--white-color);
    font-size: 1rem;
    text-decoration: none;
    padding: 0.25rem 0;
    display: inline-block;
    transition: all 0.3s;
  }
  
  .footer-menu-link:hover {
    color: var(--primary-color);
    padding-left: 0.5rem;
  }
  
  .site-footer-link {
    color: var(--white-color);
    text-decoration: none;
    transition: all 0.3s;
  }
  
  .site-footer-link:hover {
    color: var(--primary-color);
  }
  
  /* Alt Footer Stilleri */
  .site-footer-bottom {
    border-top: 1px solid var(--border-color);
    margin-top: 5rem;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
  
  .copyright-text {
    color: var(--white-color);
    font-size: 0.95rem;
  }
  
  .social-icon {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 1rem;
  }
  
  .social-icon-link {
    background: var(--white-color);
    border-radius: 100%;
    color: var(--dark-color);
    font-size: 1rem;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: all 0.3s;
  }
  
  .social-icon-link:hover {
    background: var(--primary-color);
    color: var(--white-color);
  }
  
  /* Custom Button */
  .custom-btn {
    background: var(--primary-color);
    border: 2px solid transparent;
    border-radius: var(--border-radius-large);
    color: var(--white-color);
    font-size: var(--btn-font-size);
    font-weight: var(--font-weight-bold);
    line-height: normal;
    padding: 0.75rem 1.5rem;
    text-transform: uppercase;
    transition: all 0.3s;
  }
  
  .custom-btn:hover {
    background: transparent;
    border-color: var(--primary-color);
    color: var(--primary-color);
  }
  
  /* Responsive Tasarım */
  @media screen and (max-width: 991px) {
    .site-footer {
      padding: 4rem 0;
    }
  
    .site-footer-bottom {
      margin-top: 4rem;
    }
  }
  
  @media screen and (max-width: 767px) {
    .site-footer-bottom .social-icon {
      margin-top: 2rem;
    }
  
    .copyright-text {
      text-align: center;
    }
  }
  
  @media screen and (max-width: 480px) {
    .social-icon {
      flex-wrap: wrap;
      justify-content: center;
    }
  
    .social-icon-link {
      margin: 0.25rem;
    }
  }
  </style>
  