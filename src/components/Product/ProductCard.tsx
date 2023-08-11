import { FC } from 'react';

type ProductCardProps = {
  title: string;
  formattedPriceIdr: string;
  img: string;
  link: string;
};

export const ProductCard: FC<ProductCardProps> = ({
  title,
  formattedPriceIdr,
  img,
  link,
}) => {
  return (
    <div className="card w-[240px] tn:w-80 mx-auto bg-base-100 shadow-xl shadow-slate-700 rounded-md overflow-hidden">
      <img src={img} alt={title} className="w-full h-56 object-cover" />
      <div className="card-body text-left">
        <h2 className="card-title elipsis-3">{title}</h2>
        <p>{formattedPriceIdr}</p>
        <div className="card-actions justify-end">
          <a className="btn btn-primary" href={link} target="_blank">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};
