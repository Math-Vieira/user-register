import * as S from './styles';
import { useRouter } from 'next/router';
import { HeaderLogo } from '@/components/HeaderLogo';
import { destroyCookie } from 'nookies';

type AuthenticatedLayoutProps = {
  children: React.ReactNode;
  userName: string;
};

export const AuthenticatedLayout = ({
  children,
  userName
}: AuthenticatedLayoutProps) => {
  const router = useRouter();
  const logout = () => {
    destroyCookie(undefined, 'user.token');
    router.push('/');
  };

  return (
    <>
      <S.Header>
        <S.HeaderContentContainer className="centralizer">
          <HeaderLogo />
          <S.NameContainer onClick={logout}>{userName} / Sair</S.NameContainer>
        </S.HeaderContentContainer>
      </S.Header>
      {children}
      <S.Footer>© 2024 - Matheus Vieira / Dash Skins - Challenge</S.Footer>
    </>
  );
};
