<template>
    <section id="section_4">
      <div class="slider-wrapper">
        <h2 class="section-title">Online Diyet Programları</h2>
        <p class="section-subtitle">Size en uygun programı seçin</p>
  
        <div
          v-if="pricingPlans && pricingPlans.length > 0"
          class="pricing-container"
        >
          <!-- 1. Kart -->
          <div v-for="plan in pricingPlans" :key="plan.id" class="price-card">
            <div v-if="plan.ribbon" class="ribbon">En Avantajlı</div>
            <div class="plan-title">{{ plan.title }}</div>
            <div class="duration">{{ plan.duration }}</div>
            <div class="price-container">
              <div class="price-content">
                <div class="price">
                  {{ plan.pricePerSession }}₺<span>/Seans</span>
                </div>
                <div class="divider"></div>
                <p class="profit-label">✅ Kişiye Özel Beslenme Planı</p>
                <p class="profit-label" v-if="plan.premium">
                  ✅ Vücut Analiz Takibi
                </p>
                <p class="profit-label" v-if="plan.premium">
                  ✅ 7/24 WhatsApp Desteği
                </p>
              </div>
              <div class="profit-content">
                <span class="profit-label">Toplam Kazanç</span>
                <span class="profit-value">{{ plan.different }}₺</span>
                <span class="profit-detail"
                  >1 Seans × {{ plan.pricePerSession }}₺</span
                >
                <div class="profit-divider"></div>
                <span class="profit-label">Toplam {{ plan.totalPrice }}₺</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const pricingPlans = ref([])
  
  function calculatePrice(month, datas) {
    var oneTime = month / 4
    oneTime = oneTime + 100
    datas[0].pricePerSession = oneTime
    datas[0].totalPrice = oneTime
  
    datas[1].pricePerSession = month / 4
    datas[1].totalPrice = month
    datas[1].different = oneTime * 4 - month
  
    var twoMonth = month * 2
    twoMonth = twoMonth - 200
  
    datas[2].pricePerSession = twoMonth / 8
    datas[2].totalPrice = twoMonth
    datas[2].different = oneTime * 8 - twoMonth
  }
  
  onMounted(async () => {
    try {
      const response = await fetch('/data.json')
      const data = await response.json()
      calculatePrice(data.oneMonth, data.pricingPlans)
      pricingPlans.value = data.pricingPlans
    } catch (error) {
      console.error('Veri çekme hatası:', error)
    }
  })
  </script>
  
  <style scoped>
  .slider-wrapper {
    width: 100%;
    text-align: center;
    padding: 4rem 0;
    background: #f8f9fa;
  }
  
  .section-title {
    font-size: 46px;
    color: #2c3e50;
    margin-bottom: 1rem;
    font-weight: bold;
  }
  
  .section-subtitle {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 3rem;
  }
  
  .pricing-container {
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-wrap: wrap;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .price-card {
    width: 100%;
    max-width: 350px;
    padding: 2rem;
    background: linear-gradient(145deg, var(--primary-color), #2980b9);
    border-radius: 20px;
    color: white;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
  }
  
  .price-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  .ribbon {
    position: absolute;
    top: 20px;
    right: -30px;
    transform: rotate(45deg);
    background: #e74c3c;
    color: white;
    padding: 5px 40px;
    font-size: 0.9rem;
    font-weight: bold;
  }
  
  .plan-title {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .duration {
    font-size: 1.2rem;
    opacity: 0.9;
    margin-bottom: 1rem;
  }
  
  .price-container {
    position: relative;
    min-height: 200px;
  }
  
  .price-content,
  .profit-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transition: opacity 0.3s ease;
  }
  
  .price-content {
    opacity: 1;
  }
  
  .profit-content {
    opacity: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
  
  .price-card:hover .price-content {
    opacity: 0;
  }
  
  .price-card:hover .profit-content {
    opacity: 1;
  }
  
  .price {
    font-size: 2.5rem;
    font-weight: bold;
    margin: 1rem 0;
  }
  
  .price span {
    font-size: 1rem;
    opacity: 0.8;
  }
  
  .divider,
  .profit-divider {
    width: 50px;
    height: 2px;
    background: rgba(255, 255, 255, 0.3);
    margin: 1rem auto;
  }
  
  .total,
  .student {
    font-size: 1.1rem;
    margin: 0.5rem 0;
  }
  
  .profit-label {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.9);
  }
  
  .profit-value {
    font-size: 2.2rem;
    font-weight: bold;
    color: white;
  }
  
  .profit-value.highlight {
    color: #2ecc71;
    text-shadow: 0 0 10px rgba(46, 204, 113, 0.3);
  }
  
  .profit-detail {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
  }
  
  .details-btn {
    margin-top: 1.5rem;
    padding: 0.8rem 1.5rem;
    background: rgba(255, 255, 255, 0.2);
    border: 2px solid white;
    color: white;
    border-radius: 25px;
    transition: all 0.3s ease;
    cursor: pointer;
    width: 100%;
  }
  
  .details-btn:hover {
    background: white;
    color: var(--primary-color);
  }
  
  @media (max-width: 768px) {
    .section-title {
      font-size: 2rem;
    }
  
    .price-card {
      max-width: 320px;
    }
  
    .plan-title {
      font-size: 1.5rem;
    }
  
    .price {
      font-size: 2rem;
    }
  
    .profit-value {
      font-size: 1.8rem;
    }
  
    .profit-label {
      font-size: 1rem;
    }
  
    .profit-detail {
      font-size: 0.8rem;
    }
  }
  </style>
  