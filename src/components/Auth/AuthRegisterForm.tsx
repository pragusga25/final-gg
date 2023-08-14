import { useRegisterForm } from '@/hooks';
import { AuthFormTemplate } from './AuthFormTemplate';

export const AuthRegisterForm = () => {
  const form = useRegisterForm();

  return <AuthFormTemplate {...form} btnText="Register" />;
};
