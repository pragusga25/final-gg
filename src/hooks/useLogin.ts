import { useMutation, useQueryClient } from '@tanstack/react-query';
import { LoginPayload } from '@/types';
import { login } from '@/api';
import { useAuth, useAuthModal } from '@/hooks';
import { toast } from 'react-hot-toast';

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
