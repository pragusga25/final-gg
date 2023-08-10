import { useQuery } from '@tanstack/react-query';
import { getVideo, getVideos } from '@/api';
import { ChangeEvent, useContext, useState } from 'react';
import { VideoContext } from '@/contexts';
import { useDebounce } from '.';

export const useVideo = () => useContext(VideoContext);

export const useVideosQuery = (search?: string) => {
  const query = useQuery(['videos', search], {
    queryFn: () => getVideos(search),
  });

  return query;
};

export const useVideoQuery = (id: string) => {
  const query = useQuery(['video', id], {
    queryFn: () => getVideo(id),
  });

  return query;
};

export const useVideosSearch = () => {
  const [searchText, setSearchText] = useState('');
  const debounceText = useDebounce(searchText, 400);
  const query = useVideosQuery(debounceText);

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearchText(searchValue);
  };

  const { data, isLoading } = query;

  const isEmpty = !isLoading && data && data.length === 0;
  const isSearching = !!searchText && !isLoading;

  return { ...query, onSearch, searchText, isEmpty, isSearching };
};
