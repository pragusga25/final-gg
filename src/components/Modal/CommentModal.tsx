import { useCommentModal } from '@/hooks';
import { ContainerModal } from './ContainerModal';
import { CommentForm } from '@/components/Form';
import { CommentList } from '@/components/Comment';

export const CommentModal = () => {
  const { closeBtnRef } = useCommentModal();

  return (
    <ContainerModal
      id="commentModal"
      className="max-w-lg w-full"
      closeBtnRef={closeBtnRef}
      modalBoxClassName="overflow-hidden flex flex-col"
    >
      <CommentList />
      <CommentForm />
    </ContainerModal>
  );
};
