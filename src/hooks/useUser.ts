import { getUser } from '@/api';
import { useQuery } from '@tanstack/react-query';
import { parseUserData } from '@/utils';

export const useUserQuery = (username: string) => {
  const query = useQuery(['user', username], {
    queryFn: () => getUser(username).then(parseUserData),
    staleTime: 5000, // 5 seconds
  });

  return query;
};
