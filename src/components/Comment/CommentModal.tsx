import { useCommentModal } from '@/hooks';
import { Modal } from '@/components/Modal';
import { CommentList } from '@/components/Comment';
import { CommentForm } from './CommentForm';

export const CommentModal = () => {
  const { closeBtnRef } = useCommentModal();

  return (
    <Modal
      id="commentModal"
      className="max-w-lg w-full"
      closeBtnRef={closeBtnRef}
      modalBoxClassName="overflow-hidden flex flex-col"
    >
      <CommentList />
      <CommentForm />
    </Modal>
  );
};
