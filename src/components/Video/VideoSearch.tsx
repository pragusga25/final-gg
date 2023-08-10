import { useVideo } from '@/hooks';

export const VideoSearch = () => {
  const { searchText, onSearch } = useVideo();

  return (
    <input
      type="search"
      name="search"
      id="search"
      className="py-2 md:py-4 px-4 w-full shadow-md shadow-slate-500 text-sm text-white bg-gray-800 rounded-xl focus:outline-none"
      placeholder="Search videos..."
      value={searchText}
      onChange={onSearch}
    />
  );
};
