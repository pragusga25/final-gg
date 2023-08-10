import { VideoPlayer } from '@/components/Video';
import { Navigate, useParams } from 'react-router-dom';
import { useVideoQuery } from '@/hooks';
import { ProductList } from '@/components/Product';

export const Watch = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useVideoQuery(id!);

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <Navigate to="/" />;

  return (
    <>
      <VideoPlayer {...data} />
      <div className="mt-8">
        <ProductList />
      </div>
    </>
  );
};
// main className="w-full pt-8 mx-auto h-full px-5 tn:max-w-lg md:max-w-4xl bg:max-w-full"
