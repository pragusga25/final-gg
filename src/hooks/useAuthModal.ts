import { useContext } from 'react';
import { AuthModalContext } from '@/contexts';

export const useAuthModal = () => useContext(AuthModalContext);
