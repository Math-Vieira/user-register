import styled from 'styled-components';

export const Main = styled.main`
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const ContentContainer = styled.div`
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const FormAndCardContainer = styled.div`
  display: grid;
  grid-template-columns: 15fr 11fr;
  justify-content: center;
  gap: 30px;
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.cardColor};
  width: 500px;
  box-shadow: 3px 4px 4px 3px rgba(0, 0, 0, 0.54);
  padding: 70px;
`;

export const FormContainer = styled.div``;