import { useLoginForm } from '@/hooks';
import { AuthFormTemplate } from './AuthFormTemplate';

export const AuthLoginForm = () => {
  const form = useLoginForm();

  return <AuthFormTemplate {...form} btnText="Login" />;
};
