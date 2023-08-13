import { useContext } from 'react';
import { VideoContext } from '@/contexts';

export const useVideo = () => useContext(VideoContext);
