import { apiPrivate } from '@/api';
import { useAuth } from './useAuth';

export const useLogout = () => {
  const { setAuth } = useAuth();

  const logout = async () => {
    try {
      await apiPrivate.get('/auth/logout', {
        withCredentials: true,
      });
    } catch (err) {
      console.error(err);
    } finally {
      setAuth({});
    }
  };

  return logout;
};
