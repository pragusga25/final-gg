import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { SkeletonTheme } from 'react-loading-skeleton';
import { BrowserRouter } from 'react-router-dom';
import { PersistLogin } from '@/components/PersistLogin';
import { AuthModalProvider, AuthProvider } from '@/contexts';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerClassName="z-[1000]"
      />
      <QueryClientProvider client={queryClient}>
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <AuthModalProvider>
            <AuthProvider>
              <PersistLogin>
                <App />
              </PersistLogin>
            </AuthProvider>
          </AuthModalProvider>
        </SkeletonTheme>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
