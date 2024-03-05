import { Person, TableInfo } from '../PeopleTable';
import { PeopleTableRow } from '../PeopleTableRow';

type PeopleTableBodyProps = {
  peopleList: TableInfo;
};

export const PeopleTableBody = ({ peopleList }: PeopleTableBodyProps) => {
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
          />
        );
      })}
    </tbody>
  );
};
