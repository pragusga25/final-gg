import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/api';

export const useProductsQuery = (videoId: string) => {
  const query = useQuery(['products', videoId], {
    queryFn: () => getProducts(videoId),
  });

  return query;
};
