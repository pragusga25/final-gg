import { Credentials } from '@/types';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useLogin, useRegister } from '@/hooks';

export const useAuthForm = (isLogin = true) => {
  const { mutate, isLoading } = isLogin ? useLogin() : useRegister();

  const [creds, setCreds] = useState<Credentials>({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const setPasswordError = (value: string) =>
    setErrors((prevState) => ({ ...prevState, password: value }));
  const setUsernameError = (value: string) =>
    setErrors((prevState) => ({ ...prevState, username: value }));

  const onUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;
    value = value.replace(/\s+/g, '');
    setCreds((prevState) => ({ ...prevState, username: value.trim() }));

    if (!isLogin) {
      if (value.length < 3 && value.length > 0) {
        setUsernameError('Username must be at least 3 characters long');
      } else {
        setUsernameError('');
      }
    }
  };

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCreds((prevState) => ({ ...prevState, password: value }));

    if (!isLogin) {
      if (value.length < 8 && value.length > 0) {
        setPasswordError('Password must be at least 8 characters long');
      } else {
        setPasswordError('');
      }
    }
  };

  const onEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !disableBtn) {
      onSubmit();
    }
  };

  const resetCreds = () => {
    setCreds({ username: '', password: '' });
  };

  const onSubmit = async () => {
    mutate(creds);
    resetCreds();
  };

  const disableBtn =
    !!errors.username ||
    !!errors.password ||
    !creds.username ||
    !creds.password;

  return {
    creds,
    errors,
    onUsernameChange,
    onPasswordChange,
    onSubmit,
    disableBtn,
    isLoading,
    onEnterPress,
  };
};
