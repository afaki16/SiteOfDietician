<!-- FlipCards.vue -->
<template>
  <section id="section_5" class="section section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 col-12 text-center mx-auto">
          <h2 class="mb-5">{{ title }}</h2>
        </div>

        <div
          v-for="(block, index) in featuredBlocks"
          :key="`featured-block-${index}`"
          :class="blockClasses"
        >
          <div class="flip-card">
            <div class="flip-card-inner">
              <!-- Ön Yüz -->
              <div class="flip-card-front">
                <img
                  :src="block.image"
                  class="featured-block-image img-fluid"
                  :alt="block.boldText"
                />
                <div class="card-text">
                  <p class="featured-block-text">
                    <strong>{{ block.boldText }}</strong>
                    {{ block.text }}
                  </p>
                </div>
              </div>

              <!-- Arka Yüz -->
              <div class="flip-card-back">
                <h2>{{ block.icon }}</h2>
                <div class="back-content">
                  <ul class="feature-list">
                    <li
                      v-for="(item, itemIndex) in block.backContent"
                      :key="`feature-${index}-${itemIndex}`"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </div>
                <div class="card-text">
                  <p class="featured-block-text">
                    <strong>{{ block.boldText }}</strong>
                    {{ block.text }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const title = ref('Eğer Beraber Çalışırsak...')
const blockClasses = 'col-lg-3 col-md-6 col-12 mb-4 mb-lg-0'

const featuredBlocks = ref([
  {
    image: '/images/icons/zayiflama.jpg',
    link: 'donate.html',
    boldText: 'Zayıflama',
    text: 'Seçenekleri',
    icon: '🎯',
    backContent: [
      '🥗 Kişiye özel düşük kalorili menüler',
      '💪 Yağ yakımına yönelik egzersiz programları',
      '📊 Haftalık ölçüm takibi',
      '📲 7/24 motivasyon ve destek',
    ],
  },
  {
    image: '/images/icons/kiloalma.jpg',
    link: 'donate.html',
    boldText: 'Kilo Alma',
    text: 'Seçenekleri',
    icon: '📈',
    backContent: [
      '🍔 Yüksek kalorili dengeli beslenme programı',
      '💪 Kas kütlesi artışı için egzersizler',
      '📊 Analize dayalı kilo planı',
      '🍗 Protein ağırlıklı yemek tarifleri',
    ],
  },
  {
    image: '/images/icons/saglik.jpg',
    link: 'donate.html',
    boldText: 'Sağlıklı',
    text: 'Yaşam',
    icon: '🌿',
    backContent: [
      '🍎 Doğal ve dengeli beslenme önerileri',
      '🧘‍♀️ Stres yönetimi desteği',
      '⚡ Enerji seviyesini artıran ipuçları',
      '🛌 Kaliteli uyku alışkanlıkları geliştirme',
    ],
  },
  {
    image: '/images/icons/sporcu.jpg',
    link: 'donate.html',
    boldText: 'Sporcu',
    text: 'Beslenmesi',
    icon: '🏋️‍♂️',
    backContent: [
      '🥩 Performans artırıcı beslenme planları',
      '💪 Antrenman sonrası tarifler',
      '📊 Kas kütlesine dayalı menüler',
      '🥤 Elektrolit ve protein takviyeleri önerileri',
    ],
  },
])

// Tarayıcı uyumluluğu için işlevsellik
onMounted(() => {
  // Tarayıcı desteğini kontrol et
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0

  if (isTouchDevice) {
    // Dokunmatik cihazlar için tıklama olayı ekle
    const flipCards = document.querySelectorAll('.flip-card')
    flipCards.forEach(card => {
      card.addEventListener('click', function() {
        this.querySelector('.flip-card-inner').classList.toggle('flipped')
      })
    })
  }
})
</script>

<style scoped>
.flip-card {
  perspective: 1000px;
  width: 100%;
  height: 400px;
  margin-bottom: 20px;
  cursor: pointer;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Hover yerine sınıf ile kontrol (dokunmatik cihazlar için) */
.flip-card:hover .flip-card-inner,
.flip-card-inner.flipped {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari için */
  backface-visibility: hidden;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.flip-card-front {
  background-color: white;
  display: flex;
  flex-direction: column;
}

.flip-card-back {
  background-color: white; /* Arka yüz için arkaplan ekle */
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.flip-card-back h2 {
  font-size: 2.5em;
  margin: 10px 0 20px 0;
  text-align: center;
}

.featured-block-image {
  width: 100%;
  height: 70%;
  object-fit: cover;
}

.card-text {
  padding: 15px;
  margin-top: auto;
}

.back-content {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.feature-list li {
  font-size: 0.9em;
  text-align: left;
  display: flex;
  align-items: center;
  padding-left: 10px;
}

.featured-block-text {
  margin: 0;
  font-size: 1.4em;
}

.featured-block-text strong {
  display: block;
  margin-bottom: 5px;
}

/* IE ve Edge için bazı ek düzeltmeler */
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .flip-card-back {
    transform: rotateY(180deg) translateZ(1px);
  }
}
</style>