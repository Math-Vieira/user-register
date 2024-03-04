import styled from 'styled-components';

export const Button = styled.button<{ $fontSize?: string }>`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.mainThemeColor};
  padding: 5px 15px;
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;

  &:active {
    background-color: ${({ theme }) => theme.mainThemeColor};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  font-size: ${({ $fontSize }) => $fontSize || '16px'};
`;
