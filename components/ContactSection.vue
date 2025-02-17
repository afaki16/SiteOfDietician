<template>
    <section id="section_6" class="section contact-section section-padding">
      <div class="container">
        <div class="row">
          <!-- İletişim Bilgileri Kartı -->
          <div class="col-lg-4 col-12 ms-auto mb-5 mb-lg-0">
            <div class="contact-info-wrap">
              <h2>{{ title }}</h2>
  
              <!-- Kişi Bilgileri -->
              <div class="contact-image-wrap d-flex flex-wrap">
                <img
                  :src="contactPerson.image"
                  class="img-fluid avatar-image"
                  :alt="contactPerson.name"
                />
  
                <div class="d-flex flex-column justify-content-center ms-3">
                  <h6 class="mb-0">{{ contactPerson.name }}</h6>
                  <p class="mb-0">{{ contactPerson.position }}</p>
                </div>
              </div>
  
              <!-- İletişim Detayları -->
              <div class="contact-info">
                <div class="d-flex flex-wrap">
                  <div
                    class="contact-info-item"
                    v-for="(info, index) in contactInfo"
                    :key="index"
                  >
                    <div class="contact-info-icon">
                      <i :class="info.icon"></i>
                    </div>
                    <div class="contact-info-text">
                      <template v-if="info.type === 'link'">
                        <a :href="info.href" :class="info.linkClass">{{
                          info.text
                        }}</a>
                      </template>
                      <template v-else>
                        <p>{{ info.text }}</p>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- İletişim Formu -->
          <div class="col-lg-5 col-12 mx-auto">
            <form class="custom-form contact-form">
              <div class="contact-image-wrap d-flex flex-wrap">
                <i
                  class="bi bi-linkedin text-2xl"
                  style="font-size: 24px; color: #0a66c2"
                ></i>
                <div class="d-flex flex-column justify-content-center ms-3">
                  <a
                    href="https://www.linkedin.com/in/nisa-sakar-783804243/?originalSubdomain=tr"
                    target="_blank"
                    class="text-decoration-none text-dark"
                  >
                    <h6 class="mb-0">LinkedIn - Nisa Sakar</h6>
                  </a>
                </div>
              </div>
              <div class="contact-image-wrap d-flex flex-wrap">
                <i
                  class="bi bi-instagram text-2xl"
                  style="font-size: 24px; color: #e4405f"
                ></i>
  
                <div class="d-flex flex-column justify-content-center ms-3">
                  <a
                    href="https://www.instagram.com/diyetisyennisakar"
                    target="_blank"
                    class="text-decoration-none text-dark"
                  >
                    <h6 class="mb-0">Instagram - diyetisyennisakar</h6>
                  </a>
                </div>
              </div>
  
              <div class="contact-image-wrap d-flex flex-wrap">
                <i
                  class="bi bi-whatsapp text-2xl"
                  style="font-size: 24px; color: #25d366"
                ></i>
  
                <div class="d-flex flex-column justify-content-center ms-3">
                  <a
                    href="https://wa.me/905365947718"
                    target="_blank"
                    class="text-decoration-none text-dark"
                  >
                    <h6 class="mb-0">Whatsapp - 0 536 594 77 18</h6>
                  </a>
                </div>
              </div>
              <div class="contact-image-wrap d-flex flex-wrap">
                <i
                  class="bi bi-google-play"
                  style="font-size: 24px; color: #4285f4"
                ></i>
                <div class="d-flex flex-column justify-content-center ms-3">
                  <a
                    href="https://www.google.com/search?sca_esv=d68bc316d57e2cfd&tbm=lcl&sxsrf=ADLYWIL_eB3KQ0Dn0DJDVNQYQ0Zocxf6vg:1735228783056&q=Diyetisyen+Nisa+Sakar+Yorumlar&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDIyMTSyMDYxNDWyNDc3M7I0NN3AyPiKUc4lszK1JLO4MjVPwS-zOFEhODE7sUghMr-oNDcnsWgRKwEFAAM2O-hdAAAA&rldimm=12241283415297762915&hl=tr-TR&sa=X&ved=2ahUKEwjF9t755sWKAxVDAtsEHQ-fJ5YQ9fQKegQIKhAF&biw=1536&bih=731&dpr=1.25#lkt=LocalPoiReviews"
                    target="_blank"
                    class="text-decoration-none text-dark"
                  >
                    <h6 class="mb-0">Google Yorumlar</h6>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // Başlıklar
  const title = ref('İletişim')
  
  // İletişim kişisi bilgileri
  const contactPerson = ref({
    name: 'Nisa Sakar',
    position: 'Diyetisyen',
    image: '/images/Image.jpeg',
  })
  // İletişim bilgileri
  const contactInfo = ref([
    {
      type: 'link',
      icon: 'bi bi-telephone',
      text: '+90-536-594-7718',
      href: 'https://wa.me/905365947718',
      linkClass: 'contact-link',
    },
    {
      type: 'link',
      icon: 'bi bi-envelope',
      text: 'dytnisasakar@gmail.com',
      href: 'mailto:dytnisasakar@gmail.com',
      linkClass: 'contact-link',
    },
  ])
  </script>
  
  <style scoped>
  .contact-section {
    background: var(--section-bg-color);
  }
  
  .contact-info-wrap {
    background: var(--white-color);
    border-radius: var(--border-radius-medium);
    padding: 2rem;
  }
  
  .contact-image-wrap {
    border-bottom: 1px solid var(--border-color);
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
  }
  
  .avatar-image {
    border-radius: var(--border-radius-medium);
    width: 75px;
    height: 75px;
    object-fit: cover;
  }
  
  .contact-info {
    padding-top: 1rem;
  }
  
  .contact-info-item {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    width: 100%;
  }
  
  .contact-info-icon {
    background: var(--secondary-color);
    border-radius: var(--border-radius-small);
    color: var(--white-color);
    font-size: 1.2rem;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
  }
  
  .contact-info-text {
    flex: 1;
  }
  
  .contact-link {
    color: var(--p-color);
    text-decoration: none;
    transition: all 0.3s;
  }
  
  .contact-link:hover {
    color: var(--primary-color);
  }
  
  /* Form Stilleri */
  .contact-form {
    background: var(--white-color);
    border-radius: var(--border-radius-medium);
    padding: 2rem;
  }
  
  .form-floating {
    margin-bottom: 1rem;
  }
  
  .form-control {
    background: transparent;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius-small);
    box-shadow: none;
    padding: 1rem;
    transition: all 0.3s;
  }
  
  .form-control:hover,
  .form-control:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 0.25rem rgb(var(--primary-rgb) / 25%);
  }
  
  textarea.form-control {
    min-height: 120px;
  }
  
  .form-floating > label {
    padding: 1rem;
  }
  
  button[type='submit'] {
    background: var(--primary-color);
    border: none;
    border-radius: var(--border-radius-large);
    color: var(--white-color);
    font-weight: 600;
    transition: all 0.3s;
    margin-top: 1rem;
  }
  
  button[type='submit']:hover {
    background: var(--custom-btn-bg-hover-color);
  }
  
  button[type='submit']:disabled {
    background: var(--border-color);
    cursor: not-allowed;
  }
  
  /* Modal Stilleri */
  .modal-content {
    border-radius: var(--border-radius-medium);
  }
  
  .modal-header {
    border-bottom: none;
    padding-bottom: 0;
  }
  
  .modal-footer {
    border-top: none;
    padding-top: 0;
  }
  
  /* Responsive */
  @media (max-width: 991px) {
    .contact-info-wrap {
      margin-bottom: 2rem;
    }
  }
  
  @media (max-width: 576px) {
    .contact-form,
    .contact-info-wrap {
      padding: 1rem;
    }
  }
  </style>
  