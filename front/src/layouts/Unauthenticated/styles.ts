import styled from 'styled-components';

export const Header = styled.header`
  background-color: ${({ theme }) => theme.headerColor};
  color: ${({ theme }) => theme.textColor};
  box-shadow: 0px 4px 4px ${({ theme }) => theme.headerShadowColor};
`;

export const HeaderContentContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: end;
`;

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.headerColor};
  color: ${({ theme }) => theme.textColor};
`;
