import Skeleton from 'react-loading-skeleton';
import { FC } from 'react';

type VideoSkeletonProps = {
  count: number;
};

export const VideoSkeleton: FC<VideoSkeletonProps> = ({ count }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="w-full bg:max-w-lg  mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-lg shadow-slate-600 dark:bg-gray-900"
        >
          <Skeleton className="w-full h-48 pt-1" borderRadius={0} />

          <div className="px-4 py-3">
            <Skeleton width={260} count={2} />
          </div>
        </div>
      ))}
    </>
  );
};
