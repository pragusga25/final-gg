import { ReactNode } from 'react';
import { VideoCard } from './VideoCard';
import { VideoSkeleton } from './VideoSkeleton';
import { useVideo } from '@/hooks';

export const VideoList = () => {
  const { isLoading, data, isEmpty, isSearching } = useVideo();

  let videoElements: ReactNode = <VideoSkeleton count={20} />;

  if (!isLoading && data) {
    videoElements = data.map((video) => (
      <VideoCard key={video.id} {...video} />
    ));
  }

  const notFoundSearchElement =
    isEmpty && isSearching ? (
      <p className="mt-4 text-gray-500">
        Try using different keywords or remove search filters
      </p>
    ) : null;

  const notFoundElement = isEmpty ? (
    <div className="text-center mt-10 flex flex-col justify-center items-center">
      <h3 className="text-xl font-semibold">No videos found</h3>

      {notFoundSearchElement}
    </div>
  ) : null;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoElements}
      </div>
      {notFoundElement}
    </>
  );
};
