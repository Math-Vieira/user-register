import { useEffect, useState } from 'react';
import * as S from './style';
import { useGetPeople } from '@/hooks/requestHooks/person/use-get-people';
import { Button } from '../Button';
import { PeopleTableHeader } from '../PeopleTableHeader';
import { PeopleTableBody } from '../PeopleTableBody';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { DeletePersonModal } from '../modals/DeletePersonModal';
import { setPersonToDelete } from '@/store/people';

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

type PeopleTableProps = {
  newPerson: Person | null;
  tablePage: number;
  updateTablePage: (pageNumber: number) => void;
};

export const PeopleTable = ({
  newPerson,
  tablePage,
  updateTablePage
}: PeopleTableProps) => {
  const getPeopleService = useGetPeople();
  const dispatch = useDispatch();
  const [deletedPersonId, setDeletedPersonId] = useState<string>('');
  const [peopleList, setPeopleList] = useState<TableInfo>({
    totalPages: 1,
    people: []
  });
  const personToDelete = useSelector(
    (state: RootState) => state.personToDelete
  );

  const incrementPage = () =>
    tablePage < peopleList.totalPages && updateTablePage(tablePage + 1);

  const decrementPage = () => tablePage > 1 && updateTablePage(tablePage - 1);

  //Get people on page change
  useEffect(() => {
    getPeopleService.makeRequest(tablePage);
  }, [tablePage]);

  //Set people list on data change
  useEffect(() => {
    if (getPeopleService.data) {
      setPeopleList(getPeopleService.data);
    }
  }, [getPeopleService.data]);

  //Add new person to list
  useEffect(() => {
    //TODO ver se nao bugou
    if (newPerson || deletedPersonId) {
      getPeopleService.makeRequest(tablePage);
    }
  }, [newPerson, deletedPersonId]);

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
      {personToDelete && (
        <DeletePersonModal
          title="Deletando pessoa"
          actionText="DELETAR PESSOA"
          closeModal={() => {
            dispatch(setPersonToDelete(''));
          }}
          defineDeletedPerson={(id: string) => setDeletedPersonId(id)}
          personToDelete={personToDelete}
        />
      )}
    </>
  );
};
