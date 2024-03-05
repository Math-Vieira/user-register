import * as S from './style';
import { useGetUser } from '@/hooks/requestHooks/user/use-get-user';
import { AuthenticatedLayout } from '@/layouts/Authenticated';
import { RootState } from '@/store';
import { setUser } from '@/store/user';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const DashboardPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const getUserService = useGetUser();

  useEffect(() => {
    if (user.name === '...') getUserService.makeRequest(null);
  }, [user]);

  useEffect(() => {
    if (getUserService.data) {
      const { data } = getUserService;
      const { name, email } = data.data;
      dispatch(setUser({ name, email }));
    }
  }, [getUserService.data]);

  return (
    <AuthenticatedLayout userName={user.name}>
      <S.Main style={{ height: '100vh' }}>a</S.Main>
    </AuthenticatedLayout>
  );
};
