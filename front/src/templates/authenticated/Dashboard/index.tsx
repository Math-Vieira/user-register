import { Button } from '@/components/Button';
import * as S from './style';
import { useGetUser } from '@/hooks/requestHooks/user/use-get-user';
import { AuthenticatedLayout } from '@/layouts/Authenticated';
import { RootState } from '@/store';
import { setUser } from '@/store/user';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PeopleTable } from '@/components/PeopleTable';
import { AddPersonModal } from '@/components/modals/AddPersonModal';

export const DashboardPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const getUserService = useGetUser();
  const [addPersonModalVisible, setAddPersonModalVisible] = useState(false);

  useEffect(() => {
    if (user.name === '...') getUserService.makeRequest(null);
  }, [user]);

  useEffect(() => {
    if (getUserService.data) {
      //set user data - global store
      const { data } = getUserService;
      const { name, email } = data.data;
      dispatch(setUser({ name, email }));
    }
  }, [getUserService.data]);

  return (
    <>
      <AuthenticatedLayout userName={user.name}>
        <S.Main>
          <S.ContentContainer className="centralizer">
            <S.TableContainer>
              <S.TitleContainer>
                <S.Title>Lista de pessoas cadastradas</S.Title>
                <Button
                  onClick={() => setAddPersonModalVisible(true)}
                  fontSize="20px"
                >
                  Adicione uma nova pessoa
                </Button>
              </S.TitleContainer>
              <PeopleTable />
            </S.TableContainer>
          </S.ContentContainer>
        </S.Main>
      </AuthenticatedLayout>
      {addPersonModalVisible && (
        <AddPersonModal
          closeModal={() => setAddPersonModalVisible(false)}
          title="Cadastrando pessoa"
          actionText="CADASTRAR PESSOA"
        />
      )}
    </>
  );
};
