import { Button } from '@/components/Button';
import * as S from './style';
import { useGetUser } from '@/hooks/requestHooks/user/use-get-user';
import { AuthenticatedLayout } from '@/layouts/Authenticated';
import { RootState } from '@/store';
import { setUser } from '@/store/user';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetPeople } from '@/hooks/requestHooks/person/use-get-people';

type Person = {
  name: string;
  email: string;
  avatar: string;
  age: number;
  _id: string;
};

type TableInfo = {
  totalPages: number;
  people: Person[];
};

export const DashboardPage = () => {
  const dispatch = useDispatch();
  const [tablePage, setTablePage] = useState(2);
  const user = useSelector((state: RootState) => state.user);
  const getUserService = useGetUser();
  const getPeopleService = useGetPeople();
  const peopleList: TableInfo = getPeopleService.data ?? {
    totalPages: 1,
    people: []
  };

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

  useEffect(() => {
    getPeopleService.makeRequest(tablePage);
  }, [tablePage]);
  console.log(peopleList);
  return (
    <AuthenticatedLayout userName={user.name}>
      <S.Main>
        <S.ContentContainer className="centralizer">
          <S.TableContainer>
            <S.TitleContainer>
              <S.Title>Lista de pessoas cadastradas</S.Title>
              <Button fontSize="20px">Adicione uma nova pessoa</Button>
            </S.TitleContainer>
            <S.Table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Avatar</th>
                  <th>Idade</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {peopleList.people.map((person: Person) => {
                  return (
                    <TableRow
                      key={person._id}
                      name={person.name}
                      email={person.email}
                      avatar={person.avatar}
                      age={person.age}
                      _id={person._id}
                    />
                  );
                })}
              </tbody>
            </S.Table>
          </S.TableContainer>
        </S.ContentContainer>
      </S.Main>
    </AuthenticatedLayout>
  );
};

const TableRow = ({ name, age, avatar, email }: Person) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{avatar}</td>
      <td>{age}</td>
      <td>Ações</td>
    </tr>
  );
};
