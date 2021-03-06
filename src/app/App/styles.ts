import styled from 'styled-components';
import Colors from 'shared/colors';

export const AppWrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 500;
  button,
  input,
  textarea {
    outline: none;
    &:hover,
    &:focus,
    &:active {
      outline: none;
    }
  }
  background-color: ${Colors.GREY_ULTRA_MEDIUM_LIGHT};
`;
