import { UnauthenticatedLayout } from '@/layouts/Unauthenticated';
import * as S from './styles';
import logo from '@/assets/img/image 1.png';
import { FormTitle } from '@/components/FormTitle';

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
            </S.FormContainer>
          </S.FormAndCardContainer>
        </S.ContentContainer>
      </S.Main>
    </UnauthenticatedLayout>
  );
};
