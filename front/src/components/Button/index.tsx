import { ButtonHTMLAttributes, HtmlHTMLAttributes } from 'react';
import * as S from './style';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

export const Button = ({ loading, ...rest }: ButtonProps) => {
  return <S.Button {...rest}>{rest.children}</S.Button>;
};
