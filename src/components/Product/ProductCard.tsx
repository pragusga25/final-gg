import { FC } from 'react';

type ProductCardProps = {
  title: string;
  price: number;
  img: string;
  link: string;
};

export const ProductCard: FC<ProductCardProps> = ({
  title,
  price,
  img,
  link,
}) => {
  link = link.includes('https://') ? link : `https://www.tokopedia.com${link}`;
  const formattedPriceIdr = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(price);

  return (
    <div className="card w-64 tn:w-80 mx-auto bg-base-100 shadow-xl shadow-slate-700 rounded-md overflow-hidden">
      <img src={img} alt={title} className="w-full h-56 object-cover" />
      <div className="card-body text-left">
        <h2 className="card-title elipsis-3">{title}</h2>
        <p>{formattedPriceIdr}</p>
        <div className="card-actions justify-end">
          <a className="btn btn-primary" href={link}>
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};
