<template>
    <div>
      <NavBar />
      <slot />
      <SiteFooter />
    </div>
  </template>

<script setup>
import NavBar from '~/components/layout/navbar.vue'
import SiteFooter from '~/components/layout/SiteFooter.vue'
</script>