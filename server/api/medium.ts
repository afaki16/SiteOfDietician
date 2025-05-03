interface MediumResponse {
  status?: string;
  message?: string;
  items?: any[];
}

// Geçici olarak devre dışı bırakıldı
export default defineEventHandler(async (event) => {
  return { message: 'Medium API geçici olarak devre dışı bırakıldı' };
});
  