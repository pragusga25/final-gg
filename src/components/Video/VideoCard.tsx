import { Video } from '@/models';
import { FC } from 'react';
import { Link } from 'react-router-dom';

type VideoCardProps = Omit<Video, 'embededYoutubeUrl' | 'description'>;

export const VideoCard: FC<VideoCardProps> = ({
  title,
  thumbnailUrl,
  id,
  thumbnailColor,
}) => {
  return (
    <Link to={`/watch/${id}`}>
      <div
        className={`w-full bg:max-w-lg mx-auto cursor-pointer mb-6 bg-gray-800 rounded-lg overflow-hidden dark:bg-gray-900`}
        style={{
          boxShadow: `1px 9px 73px -17px ${thumbnailColor}`,
        }}
      >
        <img
          className="w-full h-40 tn:h-48 object-cover"
          src={thumbnailUrl}
          alt={title}
          loading="lazy"
        />

        <div className="px-4 py-3 h-20">
          <h3 className="text-base font-semibold text-left text-white dark:text-gray-300 elipsis-3 max-w-xs">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
};
