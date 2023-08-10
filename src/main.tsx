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

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <BrowserRouter>
          <AuthModalProvider>
            <AuthProvider>
              <PersistLogin>
                <Toaster position="top-center" reverseOrder={false} />
                <App />
              </PersistLogin>
            </AuthProvider>
          </AuthModalProvider>
        </BrowserRouter>
      </SkeletonTheme>
    </QueryClientProvider>
  </React.StrictMode>
);