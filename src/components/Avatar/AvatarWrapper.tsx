import { cn } from '@/utils';
import { FC, ReactNode } from 'react';

export type AvatarWrapperProps = {
  children?: ReactNode;
  className?: string;
  wrapperClassName?: string;
  tabIndex?: number;
};

export const AvatarWrapper: FC<AvatarWrapperProps> = ({
  children,
  wrapperClassName,
  className,
  tabIndex,
}) => {
  return (
    <div className={cn('avatar', wrapperClassName)} tabIndex={tabIndex}>
      <div className={cn('rounded-full', className)}>{children}</div>
    </div>
  );
};
