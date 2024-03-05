import { InputHTMLAttributes, useState } from 'react';
import * as S from './style';
import { UseFormRegister } from 'react-hook-form';

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  errors: any;
  initialValue?: number | '';
};

export const NumberInput = ({
  label,
  name,
  register,
  errors,
  initialValue = '',
  ...props
}: TextInputProps) => {
  const [value, setValue] = useState<number | ''>(initialValue);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    //get the last character of the input
    const value = e.target.value;
    const lastInput = +value.slice(-1);
    if (!numbers.includes(lastInput)) return;
    if (!value) return setValue('');
    setValue(+value);
  };

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input
        {...props}
        {...register(name)}
        autoComplete="off"
        value={value}
        onChange={handleChange}
      />
      {errors[name] && <S.Error>{errors[name].message}</S.Error>}
    </S.Container>
  );
};
