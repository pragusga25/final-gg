import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuth } from '@/hooks';
import { updateUser } from '@/api';

export const useUpdateUser = (reloadAfterSuccess = false) => {
  const queryClient = useQueryClient();
  const {
    auth: { user, accessToken },
  } = useAuth();

  const mutation = useMutation(
    (formData: FormData) => {
      return updateUser(formData, accessToken);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['user', user?.username]);
        queryClient.invalidateQueries(['me']);
        if (reloadAfterSuccess) window.location.reload();
      },
    }
  );

  return mutation;
};
