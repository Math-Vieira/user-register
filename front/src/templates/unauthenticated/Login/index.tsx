import { UnauthenticatedLayout } from '@/layouts/Unauthenticated';
import * as S from './styles';
import logo from '@/assets/img/image 1.png';
import { FormTitle } from '@/components/FormTitle';
import { TextInput } from '@/components/Input/TextInput';
import { Button } from '@/components/Button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Inputs } from './types';
import { zodResolver } from '@hookform/resolvers/zod';
import loginSchema from './validationSchema';
import { useLoginUser } from '@/hooks/requestHooks/user/use-login-user';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { setCookie } from 'nookies';
import { useDispatch } from 'react-redux';
import { setUser } from '@/store/user';

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({ resolver: zodResolver(loginSchema) });
  const router = useRouter();
  const dispatch = useDispatch();

  const loginUserService = useLoginUser();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await loginUserService.makeRequest(data);
  };

  useEffect(() => {
    if (loginUserService.data) {
      //Config cookies and global user state
      const { jwtToken, name, email } = loginUserService.data;
      setCookie(undefined, 'user.token', jwtToken, {
        maxAge: 60 * 60 * 1 // 1 hour
      });
      dispatch(setUser({ name, email }));
      router.push('/dashboard');
    }
  }, [loginUserService.data]);

  return (
    <UnauthenticatedLayout>
      <S.Main>
        <S.ContentContainer className="centralizer">
          <S.FormAndCardContainer className="animeRight">
            <S.Card>
              <img src={logo.src} />
            </S.Card>
            <S.FormContainer>
              <FormTitle>Login</FormTitle>
              <S.Form onSubmit={handleSubmit(onSubmit)}>
                <TextInput
                  label="E-mail"
                  placeholder="Digite seu e-mail..."
                  type="email"
                  name="email"
                  register={register}
                  errors={errors}
                />
                <TextInput
                  label="Senha"
                  placeholder="Digite sua senha..."
                  type="password"
                  name="password"
                  register={register}
                  errors={errors}
                />
                <S.ButtonContainer>
                  <Button
                    type="submit"
                    fontSize="20px"
                    disabled={loginUserService.loading}
                  >
                    Logar
                  </Button>
                </S.ButtonContainer>
              </S.Form>
            </S.FormContainer>
          </S.FormAndCardContainer>
        </S.ContentContainer>
      </S.Main>
    </UnauthenticatedLayout>
  );
};
