import { ButtonHTMLAttributes, HtmlHTMLAttributes } from 'react';
import * as S from './style';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  fontSize?: string;
};

export const Button = ({ loading, fontSize, ...rest }: ButtonProps) => {
  return (
    <S.Button {...rest} $fontSize={fontSize}>
      {rest.children}
    </S.Button>
  );
};
