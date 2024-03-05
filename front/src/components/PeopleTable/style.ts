import styled from 'styled-components';

export const Table = styled.table`
  color: ${({ theme }) => theme.textColor};
  border-collapse: collapse;
  width: 100%;
  margin-top: 30px;

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

export const ButtonControllerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;

  & span {
    color: ${({ theme }) => theme.textColor};
    font-weight: bold;
    font-size: 35px;
    margin: 0 20px;
  }
`;
