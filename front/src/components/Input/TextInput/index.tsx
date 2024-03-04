import { InputHTMLAttributes } from 'react';
import * as S from './style';
import { UseFormRegister } from 'react-hook-form';

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  errors: any;
};

export const TextInput = ({
  label,
  name,
  register,
  errors,
  ...props
}: TextInputProps) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input {...props} {...register(name)} autoComplete="off" />
      {errors[name] && <S.Error>{errors[name].message}</S.Error>}
    </S.Container>
  );
};
