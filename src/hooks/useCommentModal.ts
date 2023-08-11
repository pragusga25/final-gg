import { useContext } from 'react';
import { CommentModalContext } from '@/contexts';

export const useCommentModal = () => useContext(CommentModalContext);
