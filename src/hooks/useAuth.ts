import { AuthContext } from '@/contexts';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useContext } from 'react';
import { LoginPayload, RegisterPayload } from '@/types';
import { login, register } from '@/api';
import { useAuthModal } from '@/hooks';
import { toast } from 'react-hot-toast/headless';
import { apiPrivate } from '@/api';

export const useAuth = () => useContext(AuthContext);

export const useLogin = () => {
  const { setAuth } = useAuth();
  const { onClose } = useAuthModal();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (payload: LoginPayload) => login(payload),
    onSuccess: (data) => {
      setAuth(data);
      onClose();
      queryClient.clear();
    },
    onError: () => {
      toast.error('Invalid credentials');
    },
  });

  return mutation;
};

export const useRegister = () => {
  const { setAuth } = useAuth();
  const { onClose } = useAuthModal();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (payload: RegisterPayload) => register(payload),
    onSuccess: (data) => {
      setAuth(data);
      onClose();
      queryClient.clear();
    },
    onError: () => {
      toast.error('Invalid credentials');
    },
  });

  return mutation;
};

export const useLogout = () => {
  const { setAuth } = useAuth();
  const queryClient = useQueryClient();

  const logout = async () => {
    try {
      await apiPrivate.get('/auth/logout', {
        withCredentials: true,
      });
    } catch (err) {
      console.error(err);
    } finally {
      setAuth({});
      queryClient.clear();
    }
  };

  return logout;
};
