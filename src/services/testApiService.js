export const getEnvironmentConfig = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/ConfigTest/show2`);
    if (!response.ok) {
      throw new Error('Lỗi khi lấy dữ liệu cấu hình');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Lỗi gọi API:", error);
    return null;
  }
};