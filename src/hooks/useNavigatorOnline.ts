import { useEffect } from 'react';
import { useAuth, useUpdateUser } from '@/hooks';

export const useNavigatorOnLine = () => {
  const { mutate } = useUpdateUser();
  const { isLoggedIn } = useAuth();

  const getFormData = (isOnline: boolean) => {
    const formData = new FormData();
    formData.append('isOnline', isOnline.toString());
    return formData;
  };

  const onOnline = () => {
    if (isLoggedIn) mutate(getFormData(true));
  };
  const onOffline = () => {
    if (isLoggedIn) mutate(getFormData(false));
  };

  const onLoad = () => {
    if (navigator.onLine) {
      onOnline();
    } else {
      onOffline();
    }
  };

  const onBeforeunload = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    onOffline();
    return e.returnValue;
  };

  useEffect(() => {
    let isMounted = true;
    window.addEventListener('online', onOnline);
    window.addEventListener('offline', onOffline);
    window.addEventListener('beforeunload', onBeforeunload);

    if (isMounted) onLoad();

    return () => {
      window.removeEventListener('online', onOnline);
      window.removeEventListener('offline', onOffline);
      window.removeEventListener('beforeunload', onBeforeunload);
      isMounted = false;
    };
  }, []);
};
