interface MediumResponse {
  status?: string;
  message?: string;
  items?: any[];
}

export default defineEventHandler(async (event) => {
    try {
      const mediumFeedUrl = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@zmpkmhdyfg";
      
      const response = await $fetch<MediumResponse>(mediumFeedUrl, {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (!response || response.status === 'error') {
        throw new Error(response?.message || 'Medium verisi alınamadı');
      }
  
      return response;
    } catch (error: any) {
      console.error('Medium API Hatası:', error);
      return { 
        error: "Medium RSS verisi alınamadı.",
        details: error?.message || 'Bilinmeyen hata'
      };
    }
  });
  