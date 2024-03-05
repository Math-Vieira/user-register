import { Button } from '@/components/Button';
import { Modal } from '../types';
import * as S from './style';
import { TextInput } from '@/components/Input/TextInput';
import { useForm } from 'react-hook-form';
import { Inputs } from './types';
import { zodResolver } from '@hookform/resolvers/zod';
import editPersonSchema from './validationSchema';
import { NumberInput } from '@/components/Input/NumberInput';
import { useCreatePerson } from '@/hooks/requestHooks/person/use-create-person';
import { useEffect } from 'react';
import { Person } from '@/components/PeopleTable';

type EditPersonModalProps = {
  personToEdit: string;
  initialData: Person | undefined;
  fetchPeople: () => void;
} & Modal;

export const EditPersonModal = ({
  closeModal,
  actionText,
  title,
  initialData,
  fetchPeople
}: EditPersonModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: zodResolver(editPersonSchema),
    defaultValues: initialData
  });
  const createPersonService = useCreatePerson();

  const onSubmit = async (data: Inputs) => {
    await createPersonService.makeRequest(data);
  };

  useEffect(() => {
    if (createPersonService.data) {
      fetchPeople();
      closeModal();
    }
  }, [createPersonService.data]);
  return (
    <S.ModalOverlay>
      <S.ModalContainer>
        <S.ModalTitle>{title}</S.ModalTitle>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.InputContainer>
            <TextInput
              label="Nome"
              name="name"
              errors={errors}
              register={register}
              placeholder="Digite o nome da pessoa..."
            />
            <TextInput
              label="E-mail"
              name="email"
              errors={errors}
              register={register}
              placeholder="Digite o e-mail da pessoa..."
            />
            <TextInput
              label="Avatar (URL de uma imagem)"
              name="avatar"
              errors={errors}
              register={register}
              placeholder="Digite a URL do avatar da pessoa..."
            />
            <NumberInput
              label="Idade"
              name="age"
              errors={errors}
              register={register}
              placeholder="Digite a idade da pessoa..."
            />
          </S.InputContainer>
          <S.ButtonsContainer>
            <Button onClick={closeModal}>CANCELAR</Button>
            <Button disabled={createPersonService.loading}>{actionText}</Button>
          </S.ButtonsContainer>
        </S.Form>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};
