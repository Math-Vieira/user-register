import { UnauthenticatedLayout } from '@/layouts/Unauthenticated';
import * as S from './styles';
import logo from '@/assets/img/image 1.png';
import { FormTitle } from '@/components/FormTitle';
import { TextInput } from '@/components/Input/TextInput';
import { Button } from '@/components/Button';

export const LoginPage = () => {
  return (
    <UnauthenticatedLayout>
      <S.Main>
        <S.ContentContainer className="centralizer">
          <S.FormAndCardContainer>
            <S.Card>
              <img src={logo.src} />
            </S.Card>
            <S.FormContainer>
              <FormTitle>Login</FormTitle>
              <S.Form>
                <TextInput label="E-mail" placeholder="Digite seu e-mail..." />
                <TextInput label="Senha" placeholder="Digite sua senha..." />
                <S.ButtonContainer>
                  <Button type="submit" fontSize="20px">
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
