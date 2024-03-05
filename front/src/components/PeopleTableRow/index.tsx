import { useDispatch } from 'react-redux';
import { Button } from '../Button';
import { Person } from '../PeopleTable';
import * as S from './style';
import { setPersonToDelete } from '@/store/people';

export const PeopleTableRow = ({ name, age, avatar, email, _id }: Person) => {
  const dispatch = useDispatch();

  return (
    <tr className="animeLeft">
      <td>{name}</td>
      <td>{email}</td>
      <td>
        <img src={avatar} />
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
          <Button>Editar</Button>
        </S.ActionContainer>
      </td>
    </tr>
  );
};
