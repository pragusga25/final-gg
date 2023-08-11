import { cn } from '@/utils';
import { RefObject, ReactNode, FC } from 'react';

type ContainerModalProps = {
  closeBtnRef: RefObject<HTMLButtonElement>;
  children?: ReactNode;
  className?: string;
  modalBoxClassName?: string;
  btnCloseClassName?: string;
  id: string;
};

export const ContainerModal: FC<ContainerModalProps> = ({
  closeBtnRef,
  children,
  className,
  modalBoxClassName,
  btnCloseClassName,
  id,
}) => {
  return (
    <dialog id={id} className={cn('modal max-w-md mx-auto', className)}>
      <form method="dialog" className={cn('modal-box', modalBoxClassName, id)}>
        <button
          className={cn(
            'btn btn-sm btn-circle btn-ghost absolute z-10 right-2 top-2',
            btnCloseClassName
          )}
          ref={closeBtnRef}
        >
          ✕
        </button>
        {children}
      </form>
    </dialog>
  );
};
