<template>
  <main role="main">
    <WelcomeSection class="gsap-welcome" />
    <AboutSection class="gsap-about" />
    <CardSection class="gsap-card" />
    <LogoSlider class="gsap-logo" />
    <PriceSection class="gsap-price" />
    <BlogSection class="gsap-blog" />
    <ContactSection class="gsap-contact" />
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  // Her section için timeline oluştur
  const createSectionTimeline = (selector, animations) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: selector,
        start: 'top 80%',
        end: 'top 30%',
        scrub: 1
      }
    })
    
    animations.forEach(anim => {
      tl.from(selector, anim, anim.position || '>')
    })
    
    return tl
  }

  // Welcome Section timeline
  createSectionTimeline('.gsap-welcome', [
    { opacity: 0, y: 100, duration: 1 },
    { scale: 0.9, duration: 0.5, position: '<0.5' }
  ])

  // About Section timeline
  createSectionTimeline('.gsap-about', [
    { x: -100, opacity: 0, duration: 1 },
    { rotation: -5, duration: 0.5, position: '<0.3' }
  ])

  // Card Section timeline
  createSectionTimeline('.gsap-card', [
    { scale: 0.8, opacity: 0, duration: 1 },
    { y: 50, duration: 0.5, position: '<0.2' },
    { rotation: 5, duration: 0.3, position: '<0.5' }
  ])

  // Logo Slider timeline
  createSectionTimeline('.gsap-logo', [
    { x: 100, opacity: 0, duration: 1 },
    { scale: 1.1, duration: 0.4, position: '<0.3' },
    { scale: 1, duration: 0.4, position: '<0.5' }
  ])

  // Price Section timeline
  createSectionTimeline('.gsap-price', [
    { y: 100, opacity: 0, duration: 1 },
    { scale: 0.95, duration: 0.5, position: '<0.4' },
    { rotationX: -10, duration: 0.3, position: '<0.6' }
  ])

  // Blog Section timeline
  createSectionTimeline('.gsap-blog', [
    { y: 80, opacity: 0, duration: 1 },
    { x: -30, duration: 0.5, position: '<0.3' },
    { x: 0, duration: 0.5, position: '<0.5' }
  ])

  createSectionTimeline('.gsap-contact', [
  { y: 50, opacity: 0, duration: 1.2, ease: 'power2.out' },
  { scale: 0.98, duration: 0.6, position: '<0.4' },
  { scale: 1, duration: 0.4 }
])
})

</script>