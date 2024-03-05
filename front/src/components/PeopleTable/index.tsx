import { useEffect, useState } from 'react';
import * as S from './style';
import { useGetPeople } from '@/hooks/requestHooks/person/use-get-people';
import { PeopleTableRow } from '../PeopleTableRow';

export type Person = {
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

export const PeopleTable = () => {
  const [tablePage, setTablePage] = useState(1);
  const getPeopleService = useGetPeople();
  const peopleList: TableInfo = getPeopleService.data ?? {
    totalPages: 1,
    people: []
  };

  useEffect(() => {
    getPeopleService.makeRequest(tablePage);
  }, [tablePage]);
  return (
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
            <PeopleTableRow
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
  );
};
