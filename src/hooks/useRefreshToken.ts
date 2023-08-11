import { apiPrivate } from '@/api';
import { AxiosError } from 'axios';
import { useLogout, useAuth } from '@/hooks';

export const useRefreshToken = () => {
  const { setAuth } = useAuth();
  const logout = useLogout();

  const refresh = async () => {
    try {
      const response = await apiPrivate.get('/auth/refresh');
      setAuth((prev) => {
        return {
          ...prev,
          accessToken: response.data.data.accessToken,
          user: response.data.data.user,
        };
      });

      return response.data.data.accessToken;
    } catch (error) {
      if (error instanceof AxiosError) {
        if (
          error.response?.status === 401 &&
          error.response.data?.error?.code === 'auth/token-expired'
        ) {
          await logout();
        }

        console.log('ERROR REFRESH: ', error.response?.data);
      }
    }
  };
  return refresh;
};
