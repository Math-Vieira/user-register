import styled from 'styled-components';

export const Header = styled.header`
  background-color: ${({ theme }) => theme.headerColor};
  color: ${({ theme }) => theme.textColor};
  box-shadow: 3px 4px 4px ${({ theme }) => theme.headerShadowColor};
  position: fixed;
  top: 0;
  width: 100%;
`;

export const HeaderContentContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.headerColor};
  color: ${({ theme }) => theme.textColor};
  text-align: center;
  font-size: 20px;
  padding: 20px;
`;
