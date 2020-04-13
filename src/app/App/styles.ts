import styled from 'styled-components';

export const AppWrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  line-height: 26px;
  font-weight: 500;
  button,
  input,
  textarea {
    &:hover,
    &:focus,
    &:active {
      outline: none;
    }
  }
`;
