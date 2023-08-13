import { ChangeEvent, useState } from 'react';
import { useDebounce, useVideosQuery } from '@/hooks';

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
