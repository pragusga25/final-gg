import { usePersistLogin } from '@/hooks';
import { FC, ReactNode } from 'react';

type PersistLoginProps = {
  children: ReactNode;
};

export const PersistLogin: FC<PersistLoginProps> = ({ children }) => {
  const { isLoading } = usePersistLogin();

  if (isLoading)
    return (
      <div>
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="flex items-center justify-center">
            <div className="loading loading-ring loading-lg text-teal-400"></div>
          </div>
        </div>
      </div>
    );

  return children;
};
