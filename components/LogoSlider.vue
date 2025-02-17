<template>
    <div class="slider-wrapper">
      <div class="logo-slider-container">
        <h2 class="mb-5">{{ title }}</h2>
        <div class="logo-slider">
          <div class="logo-track">
            <TransitionGroup name="fade">
              <div
                v-for="logo in currentLogos"
                :key="logo.name"
                class="logo-item"
              >
                <img :src="logo.image" :alt="logo.name" class="logo-image" />
              </div>
            </TransitionGroup>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue'
  
  const title = ref('Kurumsal Referanslarımız')
  const currentIndex = ref(0)
  
  const logos = ref([
    {
      name: 'Koç Sistem',
      image: 'images/references/koc.png',
    },
    {
      name: 'İstanbulspor',
      image: 
        'images/references/istanbulspor.png',
      
    },
    {
      name: 'Heltia',
      image: 'images/references/heltia.png', 
        
    },
    {
      name: 'Nilüfer',
      image: 'images/references/nilüfer.png',
    },
  ])
  
  // Her seferde gösterilecek logo sayısı
  const LOGOS_PER_VIEW = 4
  
  const currentLogos = computed(() => {
    const startIndex = currentIndex.value * LOGOS_PER_VIEW
    const endIndex = startIndex + LOGOS_PER_VIEW
    const visibleLogos = []
  
    for (let i = 0; i < LOGOS_PER_VIEW; i++) {
      const index = (startIndex + i) % logos.value.length
      visibleLogos.push(logos.value[index])
    }
  
    return visibleLogos
  })
  
  let intervalId = null
  
  const nextLogos = () => {
    currentIndex.value =
      (currentIndex.value + 1) % Math.ceil(logos.value.length / LOGOS_PER_VIEW)
  }
  
  onMounted(() => {
    intervalId = setInterval(nextLogos, 3000) // 3 saniyede bir değişim
  })
  
  onUnmounted(() => {
    if (intervalId) {
      clearInterval(intervalId)
    }
  })
  </script>
  
  <style scoped>
  .slider-wrapper {
    width: 100%;
    text-align: center;
    padding: 40px 0;
    background-image: url('images/Image.jpeg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
  }
  
  .slider-wrapper::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 1;
  }
  
  .slider-wrapper > * {
    position: relative;
    z-index: 2;
  }
  
  .logo-slider-container {
    width: 100%;
    overflow: hidden;
    padding: 10px 0;
  }
  
  .logo-slider {
    width: 100%;
    overflow: hidden;
  }
  
  .logo-track {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 20px;
  }
  
  .logo-item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1000px;
  }
  
  .logo-image {
    max-width: 120px;
    height: auto;
    transform: rotateY(15deg);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    background: none;
    transition: transform 0.3s ease;
  }
  
  .logo-item:hover .logo-image {
    transform: rotateY(0deg) scale(1.1);
  }
  
  /* Geçiş animasyonları */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  
  @media (max-width: 768px) {
    .logo-track {
      flex-wrap: wrap;
      gap: 20px;
    }
  
    .logo-item {
      flex: 0 0 calc(50% - 10px);
    }
  
    .logo-image {
      max-width: 100px;
    }
  }
  </style>
  