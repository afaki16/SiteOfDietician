<template>
    <div id="top" class="welcome-container">
      <div class="welcome-content">
        <h1 class="name">Diyetisyen Nisa Sakar</h1>
      </div>
      <svg
        class="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          d="M0,80 C920,80,1120,300,1440,160 L1440,320 L0,320 Z"
        ></path>
      </svg>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const welcomeHeight = ref('300px')
  </script>
  
  <style scoped>
  .welcome-container {
    width: 100%;
    height: v-bind(welcomeHeight);
    background-color: var(--primary-color);
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .welcome-content {
    max-width: 1200px;
    width: 100%;
    padding: 20px;
    position: relative;
    z-index: 1;
  }
  
  .name {
    color: white;
    font-size: 4rem;
    text-align: center;
    margin: 0;
  }
  
  .wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    transform: translateY(2px);
  }
  </style>
  