import { useMutation, useQueryClient } from '@tanstack/react-query';
import { RegisterPayload } from '@/types';
import { register } from '@/api';
import { useAuth, useAuthModal } from '@/hooks';
import { toast } from 'react-hot-toast';
import { generateErrorMessage } from '@/utils';

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
