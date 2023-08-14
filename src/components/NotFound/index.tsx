import { Link } from 'react-router-dom';
import { FC } from 'react';
import { cn } from '@/utils/cn';

type NotFoundProps = {
  className?: string;
};

export const NotFound: FC<NotFoundProps> = ({ className }) => {
  return (
    <div className={cn('flex flex-col items-center justify-center', className)}>
      <h1 className="text-5xl font-bold text-white mb-4 animate-bounce">404</h1>
      <p className="text-xl sm:text-2xl text-white animate-fade-in animate-delay-2">
        Oops! Looks like this page took a wrong turn.
      </p>
      <p className="text-base sm:text-lg text-white mt-2 animate-fade-in animate-delay-3">
        But don't worry, we've sent a rescue party for it!
      </p>
      <Link
        to="/"
        className="mt-6 inline-block bg-white hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md transition duration-300 ease-in-out animate-pulse delay-300"
      >
        Take Me Back Home
      </Link>
    </div>
  );
};
