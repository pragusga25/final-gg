import { useQuery } from '@tanstack/react-query';
import { getVideo } from '@/api';

export const useVideoQuery = (id: string) => {
  const query = useQuery(['video', id], {
    queryFn: () => getVideo(id),
  });

  return query;
};
