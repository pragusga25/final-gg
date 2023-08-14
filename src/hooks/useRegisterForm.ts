import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useRegister } from '@/hooks';
import { validatePassword, validateUsername } from '@/utils';

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

    const err = validateUsername(value);
    if (err) setUsernameError(err);
    else setUsernameError('');
  };

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCreds((prevState) => ({ ...prevState, password: value }));

    const err = validatePassword(value);
    if (err) setPasswordError(err);
    else setPasswordError('');
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
