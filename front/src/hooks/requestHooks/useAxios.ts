import { useState } from 'react';

export const useAxios = <T>(requestFunction: (data: T) => any) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const makeRequest = async (payload: T) => {
    try {
      setLoading(true);
      const response = await requestFunction(payload);
      setData(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, makeRequest };
};
