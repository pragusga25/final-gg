import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/api';
import { parseProductsData } from '@/utils';

export const useProductsQuery = (videoId: string) => {
  const query = useQuery(['products', videoId], {
    queryFn: () => getProducts(videoId).then(parseProductsData),
  });

  return query;
};
