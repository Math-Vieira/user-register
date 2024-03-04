import { Button } from '@/components/Button';
import * as S from './styles';
import { useRouter } from 'next/router';
import { HeaderLogo } from '@/components/HeaderLogo';

export const UnauthenticatedLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();

  return (
    <>
      <S.Header>
        <S.HeaderContentContainer className="centralizer">
          <HeaderLogo />
          <S.ButtonContainer>
            <Button onClick={() => router.push('/')}>Logar</Button>
            <Button onClick={() => router.push('/register')}>
              Cadastre-se
            </Button>
          </S.ButtonContainer>
        </S.HeaderContentContainer>
      </S.Header>
      {children}
      <S.Footer>© 2024 - Matheus Vieira / Dash Skins - Challenge</S.Footer>
    </>
  );
};
