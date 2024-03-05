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
