import { Button } from '@/components/Button';
import * as S from './style';
import { Modal } from '../types';
import { useDeletePerson } from '@/hooks/requestHooks/person/use-delete-person';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

type DeletePersonModalProps = {
  defineDeletedPerson: (id: string) => void;
  personToDelete: string;
} & Modal;

export const DeletePersonModal = ({
  title,
  closeModal,
  actionText,
  personToDelete,
  defineDeletedPerson
}: DeletePersonModalProps) => {
  const deletePersonService = useDeletePerson();
  const dispatch = useDispatch();

  const deletePerson = async () => {
    await deletePersonService.makeRequest(personToDelete);
  };

  useEffect(() => {
    if (deletePersonService.data) {
      defineDeletedPerson(personToDelete);
      closeModal();
    }
  }, [deletePersonService.data]);
  return (
    <S.ModalOverlay>
      <S.ModalContainer>
        <S.ModalTitle>{title}</S.ModalTitle>
        <S.Text>Tem certeza que deseja deletar a pessoa?</S.Text>
        <S.Text> Esta ação é irreversível.</S.Text>
        <S.ButtonsContainer>
          <Button onClick={closeModal}>CANCELAR</Button>
          <Button disabled={deletePersonService.loading} onClick={deletePerson}>
            {actionText}
          </Button>
        </S.ButtonsContainer>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};
