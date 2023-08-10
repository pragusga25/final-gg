import { useProductsQuery } from '@/hooks';
import { useParams } from 'react-router-dom';
import { ProductCard } from './ProductCard';

export const ProductList = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) return null;

  const { isLoading, data } = useProductsQuery(id);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data?.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};
