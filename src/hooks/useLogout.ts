import { useQueryClient } from '@tanstack/react-query';
import { useAuth, useUpdateUser } from '@/hooks';
import { toast } from 'react-hot-toast';
import { apiPrivate } from '@/api';

export const useLogout = () => {
  const { setAuth } = useAuth();
  const queryClient = useQueryClient();
  const { mutate } = useUpdateUser();

  const tobeOffline = async () => {
    const formdData = new FormData();
    formdData.append('isOnline', 'false');
    mutate(formdData);
  };

  const logout = async () => {
    try {
      tobeOffline();
      await apiPrivate.get('/auth/logout', {
        withCredentials: true,
      });
    } catch {
      // we don't care about the error
      // we dont't want the user stuck in the app
    } finally {
      setAuth({});
      queryClient.clear();
      toast.success('Successfully logged out');
    }
  };

  return logout;
};
