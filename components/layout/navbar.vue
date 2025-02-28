<template>
    <header>
      <nav :class="['navbar', { scrolled: isScrolled }]">
        <div class="navbar-container">
          <div class="mobile-menu" @click="toggleMenu">
            <div :class="['hamburger', { active: isMenuOpen }]">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
  
          <!-- Menü -->
          <div :class="['nav-menu', { active: isMenuOpen }]">
            <ul class="nav-list">
              <li
                v-for="(item, index) in menuItems"
                :key="index"
                class="nav-item"
              >
                <a
                  :href="item.link"
                  :class="['nav-link', { 'btn-primary': item.isButton }]"
                  @click.prevent="scrollToSection(item.link)"
                >
                  <span class="nav-icon">{{ item.icon }}</span>
                  <span>{{ item.text }}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="navbar-spacer"></div>
    </header>
  </template>
  <script setup>
  
  const isScrolled = ref(false)
  const isMenuOpen = ref(false)
  
  const menuItems = ref([
    { text: 'Ana Sayfa', link: '#top' },
    { text: 'Hakkımda', link: '#section_2' },
    { text: 'Blog', link: '#section_3' },
    { text: 'Hizmetler', link: '#section_5' },
    { text: 'İletişim', link: '#section_6' },
    {
      text: 'Fırsat Köşesi',
      link: '#section_4',
      icon: '🎁',
      isButton: true,
    },
  ])
  
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }
  
  const scrollToSection = sectionId => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      isMenuOpen.value = false
    }
  }
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  </script>
  <style scoped>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
  }
  
  .navbar.scrolled {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.98);
  }
  
  .navbar-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .nav-menu {
    display: flex;
    align-items: center;
  }
  
  .nav-list {
    display: flex;
    gap: 1.5rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  .nav-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    color: #333;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    border-radius: 8px;
  }
  
  .nav-link:hover {
    color: #007bff;
    background: rgba(0, 123, 255, 0.1);
  }
  
  .nav-icon {
    font-size: 1.2rem;
  }
  
  .btn-primary {
    background: var(--primary-color);
    color: white !important;
    padding: 0.7rem 1.5rem;
    border-radius: 25px;
    box-shadow: 0 4px 15px rgba(0, 123, 255, 0.2);
  }
  
  .btn-primary:hover {
    background: #0056b3;
    transform: translateY(-2px);
    color: white !important;
  }
  
  .mobile-menu {
    display: none;
    cursor: pointer;
  }
  
  .hamburger {
    width: 30px;
    height: 20px;
    position: relative;
  }
  
  .hamburger span {
    display: block;
    width: 100%;
    height: 2px;
    background: #333;
    position: absolute;
    transition: all 0.3s ease;
  }
  
  .hamburger span:first-child {
    top: 0;
  }
  
  .hamburger span:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
  }
  
  .hamburger span:last-child {
    bottom: 0;
  }
  
  .hamburger.active span:first-child {
    transform: rotate(45deg);
    top: 9px;
  }
  
  .hamburger.active span:nth-child(2) {
    opacity: 0;
  }
  
  .hamburger.active span:last-child {
    transform: rotate(-45deg);
    bottom: 9px;
  }
  
  .navbar-spacer {
    height: 70px;
  }
  
  @media (max-width: 768px) {
    .mobile-menu {
      display: block;
    }
  
    .nav-menu {
      position: absolute;
      top: 70px;
      left: 0;
      right: 0;
      background: white;
      padding: 1rem;
      display: none;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }
  
    .nav-menu.active {
      display: block;
    }
  
    .nav-list {
      flex-direction: column;
      gap: 0.5rem;
    }
  
    .nav-link {
      padding: 0.8rem 1rem;
      width: 100%;
    }
  
    .btn-primary {
      width: 100%;
      text-align: center;
      margin-top: 0.5rem;
    }
  }
  </style>
  