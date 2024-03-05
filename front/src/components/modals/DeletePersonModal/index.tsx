import { Button } from '@/components/Button';
import * as S from './style';
import { Modal } from '../types';

export const DeletePersonModal = ({ title, closeModal, actionText }: Modal) => {
  return (
    <S.ModalOverlay>
      <S.ModalContainer>
        <S.ModalTitle>{title}</S.ModalTitle>
        <S.Text>Tem certeza que deseja deletar a pessoa?</S.Text>
        <S.Text> Esta ação é irreversível.</S.Text>
        <S.ButtonsContainer>
          <Button onClick={closeModal}>CANCELAR</Button>
          <Button>{actionText}</Button>
        </S.ButtonsContainer>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};
