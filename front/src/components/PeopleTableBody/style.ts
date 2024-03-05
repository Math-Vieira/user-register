import styled from 'styled-components';

export const Td = styled.td`
  text-align: center;
  border: 1px solid #000;

  & span {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    width: 100%;
  }
`;

export const NotFoundContainer = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
