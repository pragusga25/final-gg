import { VideoCard } from './VideoCard';
import { VideoSkeleton } from './VideoSkeleton';
import { useVideo } from '@/hooks';

export const VideoList = () => {
  const { isLoading, data, isEmpty, isSearching } = useVideo();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading && <VideoSkeleton count={20} />}

        {!isLoading &&
          data &&
          data.map((video) => <VideoCard key={video.id} {...video} />)}
      </div>

      {isEmpty && (
        <div className="text-center mt-10 flex flex-col justify-center items-center">
          <h3 className="text-xl font-semibold">No videos found</h3>

          {isSearching && (
            <p className="mt-4 text-gray-500">
              Try using different keywords or remove search filters
            </p>
          )}
        </div>
      )}
    </>
  );
};
