import { AuthContext } from '@/contexts';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useContext } from 'react';
import { LoginPayload, RegisterPayload } from '@/types';
import { login, register } from '@/api';
import { useAuthModal, useUpdateUser } from '@/hooks';
import { toast } from 'react-hot-toast';
import { apiPrivate } from '@/api';
import { generateErrorMessage } from '@/utils';

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
      toast.success('Successfully logged in');
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
    onError: (err) => {
      const errMessage = generateErrorMessage(err);
      toast.error(errMessage || 'Something went wrong');
    },
  });

  return mutation;
};

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
    } catch (err) {
      console.error(err);
    } finally {
      setAuth({});
      queryClient.clear();
      toast.success('Successfully logged out');
    }
  };

  return logout;
};
