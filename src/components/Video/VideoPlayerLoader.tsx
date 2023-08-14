import Skeleton from 'react-loading-skeleton';

export const VideoPlayerLoader = () => {
  return (
    <div className="mx-auto">
      <Skeleton
        className="w-full aspect-video card-shadow rounded-md shadow-lg shadow-slate-600"
        borderRadius={6}
      />
    </div>
  );
};
