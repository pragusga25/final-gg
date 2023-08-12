import { getMe } from '@/api';
import { useQuery } from '@tanstack/react-query';
import { parseUserData } from '@/utils';
import { useAuth } from '@/hooks';

export const useMe = () => {
  const {
    auth: { accessToken },
  } = useAuth();
  const query = useQuery(['me'], {
    queryFn: () => getMe(accessToken).then(parseUserData),
  });

  return query;
};
