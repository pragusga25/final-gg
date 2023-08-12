import { cn } from '@/utils';
import { FC, ReactNode } from 'react';

export type AvatarWrapperProps = {
  children?: ReactNode;
  className?: string;
  wrapperClassName?: string;
};

export const AvatarWrapper: FC<AvatarWrapperProps> = ({
  children,
  wrapperClassName,
  className,
}) => {
  return (
    <div className={cn('avatar', wrapperClassName)}>
      <div className={cn('rounded-full', className)}>{children}</div>
    </div>
  );
};
