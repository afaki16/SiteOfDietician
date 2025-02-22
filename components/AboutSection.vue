<template>
    <section id="section_2" class="section section-padding section-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-12 mb-5 mb-lg-0">
            <img
            src="/images/Image.jpeg" 
              class="custom-text-box-image img-fluid"
              alt="About Us"
            />
          </div>
  
          <div class="col-lg-6 col-12">
            <div class="custom-text-box">
              <h2 class="mb-2">{{ title }}</h2>
              <h5 class="mb-3">{{ subtitle }}</h5>
              <p class="mb-0">{{ aboutDescription }}</p>
            </div>
  
            <div class="row">
              <div class="col-lg-6 col-md-6 col-12">
                <div class="custom-text-box mb-lg-0">
                  <h5 class="mb-3">Uzmanlık Alanlarım</h5>
                  <p>{{ mission }}</p>
                  <ul class="custom-list">
                    <li v-for="(item, index) in missionItems" :key="index">
                      <span class="check-circle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </span>
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
  
              <div class="col-lg-6 col-md-6 col-12">
                <div class="custom-text-box d-flex flex-wrap d-lg-block mb-lg-0">
                  <h5 class="mb-3">Toplam</h5>
                  <counter-block
                    v-for="(counter, index) in counters"
                    :key="index"
                    :number="counter.number"
                    :text="counter.text"
                    :suffix="counter.suffix"
                  />
                </div>
  
                <p>* Veriler aylık olarak güncellenmektedir.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import CounterBlock from './CounterBlock.vue'
  
  
  const title = ref('Hakkımda')
  const subtitle = ref('Eğitim')
  const aboutDescription = ref('')
  const mission = ref('')
  const missionItems = ref([])
  
  const counters = ref([])
  
  onMounted(async () => {
    try {
      const response = await fetch('/data.json')
      const data = await response.json()
      counters.value = data.counters
      mission.value = data.mission
      missionItems.value = data.missionItems
      aboutDescription.value = data.aboutDescription
    } catch (error) {
      console.error('Veri çekme hatası:', error)
    }
  })
  </script>
  
  <style scoped>
  .custom-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .custom-list li {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    font-weight: 700;
    font-size: 1.1rem;
    gap: 12px;
  }
  
  .check-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 24px;
    height: 24px;
    background-color: var(--primary-color);
    border-radius: 50%;
    padding: 5px;
  }
  
  .check-circle svg {
    width: 12px;
    height: 12px;
  }
  </style>
  