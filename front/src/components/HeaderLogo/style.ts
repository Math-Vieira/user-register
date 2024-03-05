import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  @media (max-width: 744px) {
    & .logoText {
      display: none;
    }

    width: 100px;
  }
`;
