import styled from 'styled-components';

export const H1 = styled.h1`
  color: ${({ theme }) => theme.textColor};
  font-size: 60px;
  position: relative;
  z-index: 1;
  font-weight: 400;

  &::before {
    content: '';
    position: absolute;
    height: 1.2rem;
    width: 1.2rem;
    background-color: blue;
    z-index: -1;
    bottom: 20px;
    background-color: ${({ theme }) => theme.mainThemeColor};
  }
`;
