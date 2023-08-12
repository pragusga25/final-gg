import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useRegister } from '@/hooks';

// WARN: Unused code
export const useRegisterForm = () => {
  const { mutate, isLoading } = useRegister();

  const [creds, setCreds] = useState({
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
    value = value.replace(/\s+/g, '').trim();
    setCreds((prevState) => ({ ...prevState, username: value }));

    if (value.length < 3 && value.length > 0) {
      setUsernameError('Username must be at least 3 characters long');
    } else if (!/^[a-zA-Z0-9]+$/.test(value) && value.length > 0) {
      setUsernameError('Username must only contain letters and numbers');
    } else {
      setUsernameError('');
    }
  };

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCreds((prevState) => ({ ...prevState, password: value }));

    if (value.length < 8 && value.length > 0) {
      setPasswordError('Password must be at least 8 characters long');
    } else {
      setPasswordError('');
    }
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
