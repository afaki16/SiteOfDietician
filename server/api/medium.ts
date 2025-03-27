export default defineEventHandler(async (event) => {
    try {
      const mediumFeedUrl = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@zmpkmhdyfg";
      
      const response = await $fetch(mediumFeedUrl, {
        method: "GET",
      });
  
      return response;
    } catch (error) {
      return { error: "Medium RSS verisi alınamadı." };
    }
  });
  