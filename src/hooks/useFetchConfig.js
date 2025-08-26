import { useState, useEffect } from 'react';
import { getEnvironmentConfig } from '../services/testApiService';

const useFetchConfig = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const configData = await getEnvironmentConfig();
        if (configData) {
          setData(configData);
        } else {
          setError('Không thể lấy dữ liệu.');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useFetchConfig;