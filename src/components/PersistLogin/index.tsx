import { usePersistLogin } from '@/hooks';
import { FC, ReactNode } from 'react';

type PersistLoginProps = {
  children: ReactNode;
};

export const PersistLogin: FC<PersistLoginProps> = ({ children }) => {
  const { isLoading } = usePersistLogin();

  if (isLoading) return null;

  return children;
};
