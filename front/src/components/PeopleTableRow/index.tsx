import { Person } from '../PeopleTable';

export const PeopleTableRow = ({ name, age, avatar, email }: Person) => {
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
