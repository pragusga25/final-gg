import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuth } from '@/hooks';
import { updateUser } from '@/api';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const {
    auth: { user, accessToken },
  } = useAuth();
  const navigate = useNavigate();

  const mutation = useMutation(
    (formData: FormData) => {
      return updateUser(formData, accessToken);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['user', user?.username]);
        toast.success('Profile updated successfully');
        navigate(0);
      },
      onError: () => {
        toast.error('Profile update failed');
      },
    }
  );

  return mutation;
};
