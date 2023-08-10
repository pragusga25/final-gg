import { Video } from '@/models';
import { FC } from 'react';

type VideoPlayerProps = Video;

export const VideoPlayer: FC<VideoPlayerProps> = ({
  embededYoutubeUrl,
  title,
  description,
  thumbnailColor,
}) => {
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
      ></iframe>

      <div className="mt-5">
        <h1 className="text-2xl font-semibold text-left text-white dark:text-gray-300">
          {title}
        </h1>

        <details className="collapse bg-base-100 shadow-slate-400 shadow-inner mt-4">
          <summary className="collapse-title text-xl font-medium">
            Description
          </summary>
          <div className="collapse-content">
            <p className="text-base mt-2 font-normal text-left text-white dark:text-gray-300">
              {description}
            </p>
          </div>
        </details>
      </div>
    </div>
  );
};
