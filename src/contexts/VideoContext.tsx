import { createContext } from 'react';
import { useVideosSearch } from '@/hooks';
import { ReactNode } from 'react';

type VideoContextType = ReturnType<typeof useVideosSearch>;

export const VideoContext = createContext<VideoContextType>(
  {} as VideoContextType
);

export const VideoProvider = ({ children }: { children: ReactNode }) => {
  const search = useVideosSearch();

  return (
    <VideoContext.Provider value={search}>{children}</VideoContext.Provider>
  );
};
