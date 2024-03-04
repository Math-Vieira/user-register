import { UnauthenticatedLayout } from '@/layouts/Unauthenticated';
import * as S from './styles';
import logo from '@/assets/img/image 1.png';
import { FormTitle } from '@/components/FormTitle';
import { TextInput } from '@/components/Input/TextInput';
import { Button } from '@/components/Button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Inputs } from './types';
import { zodResolver } from '@hookform/resolvers/zod';
import registerSchema from './validationSchema';

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({ resolver: zodResolver(registerSchema) });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <UnauthenticatedLayout>
      <S.Main>
        <S.ContentContainer className="centralizer">
          <S.FormAndCardContainer className="animeLeft">
            <S.Card>
              <img src={logo.src} />
            </S.Card>
            <S.FormContainer>
              <FormTitle>Cadastro</FormTitle>
              <S.Form onSubmit={handleSubmit(onSubmit)}>
                <TextInput
                  label="Nome"
                  placeholder="Digite seu nome..."
                  type="text"
                  name="name"
                  register={register}
                  errors={errors}
                />
                <TextInput
                  label="E-mail"
                  placeholder="Digite sua senha..."
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
                <TextInput
                  label="Confirmação de senha"
                  placeholder="Repita sua senha..."
                  type="password"
                  name="confirm_password"
                  register={register}
                  errors={errors}
                />
                <S.ButtonContainer>
                  <Button type="submit" fontSize="20px">
                    Cadastrar
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
