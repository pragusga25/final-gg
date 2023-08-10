import { VideoList, VideoSearch } from '@/components/Video';
import { VideoProvider } from '@/contexts';

export const Home = () => {
  return (
    <VideoProvider>
      <div className="mx-auto">
        <div className="mb-8">
          <VideoSearch />
        </div>
        <VideoList />
      </div>
    </VideoProvider>
  );
};
