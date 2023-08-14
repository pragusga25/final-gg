import Skeleton from 'react-loading-skeleton';
import { FC } from 'react';
import { VideoCardWrapper } from './VideoCardWrapper';

type VideoSkeletonProps = {
  count: number;
};

export const VideoSkeleton: FC<VideoSkeletonProps> = ({ count }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <VideoCardWrapper key={index}>
          <Skeleton className="w-full h-48 pt-1" borderRadius={0} />

          <div className="px-4 py-3">
            <Skeleton width={260} count={2} />
          </div>
        </VideoCardWrapper>
      ))}
    </>
  );
};
