<template>
    <section id="section_3" class="section section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-12 text-center mb-4">
            <h2>{{ sectionTitle }}</h2>
          </div>
  
          <div
            v-for="post in posts"
            :key="post.id"
            class="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0"
          >
            <div class="custom-block-wrap">
              <img
                :src="postImage"
                class="fixed-size-image custom-block-image img-fluid"
                alt="asdgasdf"
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
                    v-html="truncateContent(post.content)"
                    class="post-content"
                  ></div>
                </div>
                <a :href="post.link" target="_blank" class="custom-btn btn"
                  >Devamını Oku</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import axios from "axios";
  
  const mediumFeedUrl = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@zmpkmhdyfg";
 const posts = ref([]);
const loading = ref(true);
const error = ref(null);

const fetchMediumPosts = async () => {
  debugger
  try {
    const response = await axios.get(mediumFeedUrl);
    posts.value = response.data.items;
  } catch (err) {
    error.value = "Veriler alınırken hata oluştu.";
  } finally {
    loading.value = false;
  }
};

  const postImage = ref('')
  const sectionTitle = ref('Bilgilendiren Paylaşımalar')
  
  const cleanContent = content => {
    content = content.replace(/<img src="https:\/\/medium.com\/_\/stat?.+?>/g, '')
  
    const imgMatch = content.match(/<img[^>]+src="([^">]+)"/)
    postImage.value = imgMatch ? imgMatch[1] : ''
    return content.trim()
  }
  
  const truncateContent = content => {
    // HTML'i temizle
    content = cleanContent(content)
  
    // HTML etiketlerini kaldır ve metni al
    let plainText = content.replace(/<[^>]*>/g, '')
  
    // İlk 100 karakteri al
    let truncated = plainText.substring(0, 150)
  
    // Eğer metin kesilmişse "..." ekle
    if (plainText.length > 150) {
      truncated += '...'
    }
  
    return truncated
  }
  
  const formatDate = date => {
    return new Date(date).toLocaleDateString('tr-TR')
  }

  onMounted(fetchMediumPosts);
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
  