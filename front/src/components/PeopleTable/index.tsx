import { useEffect, useState } from 'react';
import * as S from './style';
import { useGetPeople } from '@/hooks/requestHooks/person/use-get-people';
import { PeopleTableRow } from '../PeopleTableRow';
import { Button } from '../Button';
import { PeopleTableHeader } from '../PeopleTableHeader';
import { PeopleTableBody } from '../PeopleTableBody';

export type Person = {
  name: string;
  email: string;
  avatar: string;
  age: number;
  _id: string;
};

export type TableInfo = {
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

  const incrementPage = () =>
    tablePage < peopleList.totalPages && setTablePage(tablePage + 1);

  const decrementPage = () => tablePage > 1 && setTablePage(tablePage - 1);

  useEffect(() => {
    getPeopleService.makeRequest(tablePage);
  }, [tablePage]);
  return (
    <>
      <S.Table>
        <PeopleTableHeader />
        <PeopleTableBody peopleList={peopleList} />
      </S.Table>
      <S.ButtonControllerContainer>
        <Button onClick={decrementPage} fontSize="50px">
          {'<'}
        </Button>
        <span>
          {tablePage} / {peopleList.totalPages}
        </span>
        <Button onClick={incrementPage} fontSize="50px">
          {'>'}
        </Button>
      </S.ButtonControllerContainer>
    </>
  );
};
