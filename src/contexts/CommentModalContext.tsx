import { FC, ReactNode, RefObject, createContext, useRef } from 'react';
import { socket } from '@/api';

type WindowType = Window &
  typeof globalThis & {
    commentModal: {
      showModal: () => unknown;
    };
  };

type CommentModalContextType = {
  closeBtnRef: RefObject<HTMLButtonElement>;
  onClose: () => unknown;
  onOpen: () => unknown;
  lastCommentRef: RefObject<HTMLDivElement>;
  scrollToLastComment: () => unknown;
};

export const CommentModalContext = createContext<CommentModalContextType>({
  closeBtnRef: { current: null },
  onClose: () => {},
  onOpen: () => {},
  lastCommentRef: { current: null },
  scrollToLastComment: () => {},
});

export const CommentModalProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const lastCommentRef = useRef<HTMLDivElement>(null);

  const onOpen = () => {
    socket.connect();
    (window as WindowType).commentModal.showModal();
  };

  const onClose = () => {
    socket.disconnect();
    closeBtnRef.current?.click();
  };

  const scrollToLastComment = () => {
    lastCommentRef.current?.scrollIntoView();
  };

  const value = {
    closeBtnRef,
    onClose,
    onOpen,
    lastCommentRef,
    scrollToLastComment,
  };

  return (
    <CommentModalContext.Provider value={value}>
      {children}
    </CommentModalContext.Provider>
  );
};
