import { Video } from '@/models';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { VideoCardWrapper } from './VideoCardWrapper';

type VideoCardProps = Omit<Video, 'embededYoutubeUrl' | 'description'>;

export const VideoCard: FC<VideoCardProps> = ({
  title,
  thumbnailUrl,
  id,
  thumbnailColor,
}) => {
  return (
    <Link to={`/watch/${id}`}>
      <VideoCardWrapper thumbnailColor={thumbnailColor}>
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
      </VideoCardWrapper>
    </Link>
  );
};
