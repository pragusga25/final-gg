import { AuthContext } from '@/contexts';
import { useMutation } from '@tanstack/react-query';
import { useContext } from 'react';
import { LoginPayload, RegisterPayload } from '@/types';
import { login, register } from '@/api';
import { useAuthModal } from '@/hooks';
import { toast } from 'react-hot-toast/headless';

export const useAuth = () => useContext(AuthContext);

export const useLogin = () => {
  const { setAuth } = useAuth();
  const { onClose } = useAuthModal();

  const mutation = useMutation({
    mutationFn: (payload: LoginPayload) => login(payload),
    onSuccess: (data) => {
      setAuth(data);
      onClose();
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

  const mutation = useMutation({
    mutationFn: (payload: RegisterPayload) => register(payload),
    onSuccess: (data) => {
      setAuth(data);
      onClose();
    },
    onError: () => {
      toast.error('Invalid credentials');
    },
  });

  return mutation;
};
