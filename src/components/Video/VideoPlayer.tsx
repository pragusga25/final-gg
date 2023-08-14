import { useCommentModal, useVideoQuery } from '@/hooks';
import { useParams } from 'react-router-dom';
import { VideoPlayerLoader } from './VideoPlayerLoader';

export const VideoPlayer = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useVideoQuery(id!);
  const { onOpen } = useCommentModal();

  if (isLoading || !data) return <VideoPlayerLoader />;

  const { title, description, embededYoutubeUrl, thumbnailColor } = data;

  return (
    <div className="mx-auto text-white">
      <iframe
        className="w-full aspect-video card-shadow rounded-md shadow-lg shadow-slate-600 dark:bg-gray-900"
        src={embededYoutubeUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{
          boxShadow: `1px 9px 73px -17px ${thumbnailColor}`,
        }}
      />

      <div className="mt-5">
        <div className="flex justify-between items-center">
          <h1 className="text-lg sm:text-2xl font-semibold text-left text-white dark:text-gray-300">
            {title}
          </h1>
          <button
            onClick={onOpen}
            className="btn text-sm sm:text-base btn-ghost ml-4"
          >
            See Comments
          </button>
        </div>

        <details className="collapse bg-base-100 shadow-slate-400 shadow-inner mt-4">
          <summary className="collapse-title text-base tn:text-xl font-medium">
            Description
          </summary>
          <div className="collapse-content">
            <p className="text-sm tn:text-base mt-2 font-normal text-left text-white dark:text-gray-300">
              {description}
            </p>
          </div>
        </details>
      </div>
    </div>
  );
};
