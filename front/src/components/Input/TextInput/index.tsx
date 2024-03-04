import { InputHTMLAttributes } from 'react';
import * as S from './style';

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & { label: string };

export const TextInput = ({ label, ...props }: TextInputProps) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input {...props} />
    </S.Container>
  );
};
