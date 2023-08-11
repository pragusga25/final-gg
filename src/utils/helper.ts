import { ERR_CODES } from '@/constants';
import { AxiosError } from 'axios';

export const generateErrorMessage = (err: unknown): string | null => {
  if (err === null) return null;

  if (err instanceof AxiosError) {
    const errCode = err.response?.data?.error?.code;
    if (errCode) return ERR_CODES[errCode as string];
  }

  return 'Something went wrong';
};
