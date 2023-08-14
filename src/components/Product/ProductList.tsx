import { useProductsQuery } from '@/hooks';
import { useParams } from 'react-router-dom';
import { ProductCard } from './ProductCard';
import { ProductSkeleton } from './ProductSkeleton';
import { ReactNode } from 'react';

export const ProductList = () => {
  const { id: videoId } = useParams<{ id: string }>();
  const { isLoading, data } = useProductsQuery(videoId!);

  let productElements: ReactNode = <ProductSkeleton count={30} />;

  if (!isLoading && data) {
    productElements = data.map((product) => (
      <ProductCard key={product.id} {...product} />
    ));
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {productElements}
    </div>
  );
};
