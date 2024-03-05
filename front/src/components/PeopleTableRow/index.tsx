import { useDispatch } from 'react-redux';
import { Button } from '../Button';
import { Person } from '../PeopleTable';
import * as S from './style';
import { setPersonToDelete, setPersonToEdit } from '@/store/people';

type PeopleTableRowProps = Person & {
  deletedPersonId: string;
};

export const PeopleTableRow = ({
  name,
  age,
  avatar,
  email,
  _id,
  deletedPersonId
}: PeopleTableRowProps) => {
  const dispatch = useDispatch();

  return (
    <tr className={_id === deletedPersonId ? 'animeLeftOut' : 'animeLeft'}>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        <img src={avatar} alt={`${name} - avatar`} />
      </td>
      <td>{age}</td>
      <td>
        <S.ActionContainer>
          <Button
            onClick={() => {
              dispatch(setPersonToDelete(_id));
            }}
          >
            Deletar
          </Button>
          <Button
            onClick={() => {
              dispatch(setPersonToEdit(_id));
            }}
          >
            Editar
          </Button>
        </S.ActionContainer>
      </td>
    </tr>
  );
};
