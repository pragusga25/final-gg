import Skeleton from 'react-loading-skeleton';
import { FC } from 'react';
import { ProductCardWrapper } from './ProductCardWrapper';

type ProductSkeletonProps = {
  count: number;
};

export const ProductSkeleton: FC<ProductSkeletonProps> = ({ count }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <ProductCardWrapper key={index}>
          <Skeleton className="w-full h-56" borderRadius={0} />

          <div className="px-2 py-3">
            <Skeleton className="w-full" count={2} />
          </div>
        </ProductCardWrapper>
      ))}
    </>
  );
};
