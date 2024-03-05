import { NotFound } from '../NotFound';
import { Person, TableInfo } from '../PeopleTable';
import { PeopleTableRow } from '../PeopleTableRow';
import * as S from './style';

type PeopleTableBodyProps = {
  peopleList: TableInfo;
  deletedPersonId: string;
};

export const PeopleTableBody = ({
  peopleList,
  deletedPersonId
}: PeopleTableBodyProps) => {
  return (
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
            deletedPersonId={deletedPersonId}
          />
        );
      })}
      {peopleList.people.length === 0 && (
        <tr>
          <S.Td colSpan={6} rowSpan={20}>
            <S.NotFoundContainer>
              <NotFound />
              <span>NENHUM DADO ENCONTRADO</span>
            </S.NotFoundContainer>
          </S.Td>
        </tr>
      )}
    </tbody>
  );
};
