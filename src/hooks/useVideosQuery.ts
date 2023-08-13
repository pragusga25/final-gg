import { useQuery } from '@tanstack/react-query';
import { getVideos } from '@/api';

export const useVideosQuery = (search?: string) => {
  const query = useQuery(['videos', search], {
    queryFn: () => getVideos(search),
  });

  return query;
};
