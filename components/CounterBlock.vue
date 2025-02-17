<template>
    <div class="counter-thumb">
      <div class="d-flex">
        <span class="counter-number" ref="counterRef">{{ displayNumber }}</span>
        <span class="counter-number-text">{{ suffix }}</span>
      </div>
      <span class="counter-text">{{ text }}</span>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const props = defineProps({
    number: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    suffix: {
      type: String,
      default: '',
    },
  })
  
  const displayNumber = ref(0)
  const counterRef = ref(null)
  
  const animateCount = () => {
    const duration = 1000
    const start = displayNumber.value
    const end = props.number
    const range = end - start
    const increment = end > start ? 1 : -1
    const stepTime = Math.abs(Math.floor(duration / range))
  
    let current = start
    const timer = setInterval(() => {
      current += increment
      displayNumber.value = current
  
      if (current === end) {
        clearInterval(timer)
      }
    }, stepTime)
  }
  
  onMounted(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount()
          observer.unobserve(entry.target)
        }
      })
    })
  
    if (counterRef.value) {
      observer.observe(counterRef.value)
    }
  })
  </script>
  