import { FC } from 'react';
import { ProductCardWrapper } from './ProductCardWrapper';

type ProductCardProps = {
  title: string;
  formattedPriceIdr: string;
  image: string;
  link: string;
};

export const ProductCard: FC<ProductCardProps> = ({
  title,
  formattedPriceIdr,
  image,
  link,
}) => {
  return (
    <ProductCardWrapper>
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
        loading="lazy"
      />
      <div className="card-body text-left">
        <h2 className="card-title elipsis-3">{title}</h2>
        <p>{formattedPriceIdr}</p>
        <div className="card-actions justify-end">
          <a className="btn btn-primary" href={link} target="_blank">
            Buy Now
          </a>
        </div>
      </div>
    </ProductCardWrapper>
  );
};
