import { FC, ReactNode } from 'react';

type ProductCardWrapperProps = {
  children: ReactNode;
};

export const ProductCardWrapper: FC<ProductCardWrapperProps> = ({
  children,
}) => {
  return (
    <div className="card w-[240px] tn:w-80 mx-auto bg-base-100 shadow-xl shadow-slate-700 rounded-md overflow-hidden">
      {children}
    </div>
  );
};
