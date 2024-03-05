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

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    /* background-color: red; */
    width: 100%;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.cardColor};
  width: 500px;
  box-shadow: 3px 4px 4px 3px rgba(0, 0, 0, 0.54);
  padding: 70px;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const FormContainer = styled.div``;

export const Form = styled.form`
  margin-top: 30px;
`;

export const ButtonContainer = styled.div`
  margin-left: 2px;
  margin-top: 20px;
`;
