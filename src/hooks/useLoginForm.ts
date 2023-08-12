import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useLogin } from '@/hooks';

// WARN: Unused code
export const useLoginForm = () => {
  const { mutate, isLoading } = useLogin();

  const [creds, setCreds] = useState({
    username: '',
    password: '',
  });

  const [errors, _setErrors] = useState({
    username: '',
    password: '',
  });

  const onUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;
    value = value.replace(/\s+/g, '').trim();
    setCreds((prevState) => ({ ...prevState, username: value }));
  };

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCreds((prevState) => ({ ...prevState, password: value }));
  };

  const onEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !disableBtn && !e.shiftKey) {
      e.preventDefault();
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
