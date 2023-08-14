import { VideoPlayer } from '@/components/Video';
import { ProductList } from '@/components/Product';
import { CommentModalProvider } from '@/contexts';
import { CommentModal } from '@/components/Comment';
import { useParams } from 'react-router-dom';
import { useVideoQuery } from '@/hooks';
import { NotFound } from '@/components/NotFound';

export const WatchPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useVideoQuery(id!);

  if (!isLoading && !data) return <NotFound className="-mt-24 min-h-screen" />;

  return (
    <CommentModalProvider>
      <VideoPlayer />
      <div className="mt-8 pb-5">
        <ProductList />
      </div>
      <CommentModal />
    </CommentModalProvider>
  );
};
