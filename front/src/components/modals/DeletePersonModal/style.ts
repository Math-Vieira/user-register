import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.headerColor};
  border: 1px solid ${({ theme }) => theme.mainThemeColor};
`;

export const ModalTitle = styled.h2`
  color: ${({ theme }) => theme.mainThemeColor};
  text-align: left;
  margin-bottom: 10px;
  min-width: 500px;
  font-size: 35px;

  @media (max-width: 744px) {
    min-width: 100%;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 10px;
  margin: 20px 0 5px 0;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.textColor};
  font-size: 20px;

  @media (max-width: 744px) {
    max-width: 80%;
    font-size: 18px;
  }
`;
