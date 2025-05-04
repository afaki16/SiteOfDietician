
<template>
  <section id="section_3" class="section section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-12 text-center mb-4">
          <h2>{{ sectionTitle }}</h2>
        </div>
        
        <!-- Loading göstergesi -->
        <div v-if="loading" class="col-12 text-center">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Yükleniyor...</span>
          </div>
          <p class="mt-2">Blog yazıları yükleniyor...</p>
        </div>
        
        <!-- Hata mesajı -->
        <div v-else-if="error" class="col-12 text-center">
          <div class="alert alert-danger" role="alert">
            {{ error }}
          </div>
        </div>
        
        <!-- Blog yazıları -->
        <template v-else>
          <div
            v-for="post in posts"
            :key="post.guid"
            class="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0"
          >
          <a :href="post.link" target="_blank">
            <div class="custom-block-wrap">
              <img
                :src="getPostImage(post.description)"
                class="fixed-size-image custom-block-image img-fluid"
                :alt="post.title"
                @error="handleImageError"
              />
              <div class="d-flex align-items-center my-2">
                <span class="date-chip mb-0">
                  {{ formatDate(post.pubDate) }}
                </span>
              </div>
              <div class="custom-block">
                <div class="custom-block-body">
                  <h5 class="mb-3">{{ post.title }}</h5>
                  <div
                    v-html="truncateContent(post.description)"
                    class="post-content"
                  ></div>
                </div>
                <a :href="post.link" target="_blank" class="custom-btn btn"
                  >Devamını Oku</a
                >
              </div>
            </div>
          </a>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// State
const posts = ref([])
const loading = ref(true)
const error = ref(null)
const sectionTitle = ref('Bilgilendiren Paylaşımlar')

// Varsayılan görsel
const defaultImage = '/images/default-blog-image.jpg'

// API'den veri çekme
const fetchMediumPosts = async () => {
  try {
    const response = await $fetch("/api/medium")
    
    if (response.error) {
      throw new Error(response.error)
    }
    
    if (response.items && response.items.length > 0) {
      posts.value = response.items
    } else {
      error.value = "Henüz blog yazısı bulunmuyor."
    }
  } catch (err) {
    console.error('Medium posts fetch error:', err)
    error.value = err.message || "Blog yazıları yüklenirken bir hata oluştu."
  } finally {
    loading.value = false
  }
}

// Görseli çıkarma
const getPostImage = (content) => {
  if (!content) return defaultImage
  
  // Medium'un istatistik görsellerini temizle
  content = content.replace(/<img[^>]*src="https:\/\/medium\.com\/_\/stat[^"]*"[^>]*>/g, '')
  
  // İlk görseli bul
  const imgMatch = content.match(/<img[^>]+src="([^">]+)"/)
  return imgMatch ? imgMatch[1] : defaultImage
}

// İçeriği kesme ve düzenleme
const truncateContent = (content) => {
  if (!content) return ''
  
  // Medium'un istatistik görsellerini ve diğer gereksiz elementleri temizle
  content = content.replace(/<img[^>]*src="https:\/\/medium\.com\/_\/stat[^"]*"[^>]*>/g, '')
  
  // HTML etiketlerini kaldır
  const plainText = content.replace(/<[^>]*>/g, '')
  
  // İlk 150 karakteri al
  let truncated = plainText.substring(0, 150)
  
  // Eğer metin kesilmişse "..." ekle
  if (plainText.length > 150) {
    truncated += '...'
  }
  
  return truncated
}

// Tarih formatlama
const formatDate = (date) => {
  if (!date) return ''
  
  try {
    return new Date(date).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  } catch (err) {
    console.error('Date formatting error:', err)
    return date
  }
}

// Görsel yükleme hatası
const handleImageError = (event) => {
  event.target.src = defaultImage
}

// Component mount olduğunda veriyi çek
onMounted(() => {
  fetchMediumPosts()
})
</script>

<style scoped>
.posts-container {
  display: grid;
  gap: 20px;
  padding: 20px;
}

.post-card {
  border: 1px solid #eee;
  padding: 15px;
  border-radius: 8px;
}

.post-meta {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.fixed-size-image {
  width: 500px; /* sabit genişlik */
  height: 300px; /* sabit yükseklik */
  object-fit: cover; /* görüntüyü kırpmadan sığdırır */
}
.post-content {
  position: relative;
}

.date-chip {
  background: linear-gradient(
    45deg,
    var(--primary-color),
    var(--primary-color)
  );
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  color: white;
  gap: 6px;
  box-shadow: 0 2px 8px #06a78c4d;
  margin-left: 12px;
}

.label {
  font-weight: bold;
}
</style>
