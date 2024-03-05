import styled from 'styled-components';

export const Main = styled.main`
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const ContentContainer = styled.div`
  min-height: 100vh;
  display: flex;
  width: 100%;

  justify-content: center;
`;

export const TableContainer = styled.div`
  width: 100%;
  margin-top: 15vh;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 744px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.textColor};
`;

export const Table = styled.table`
  color: ${({ theme }) => theme.textColor};
  border-collapse: collapse;
  width: 100%;
  margin-top: 30px;
  overflow-x: scroll;

  & th {
    text-align: left;
    border: 1px solid white;
    padding: 10px;
    font-size: 25px;
    background-color: ${({ theme }) => theme.mainThemeColor};
  }

  & td {
    border: 1px solid ${({ theme }) => theme.mainThemeColor};
    padding: 10px;
    font-size: 20px;
  }
`;
