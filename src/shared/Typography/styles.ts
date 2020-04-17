import styled from 'styled-components';
import Colors from '../colors';

export const H1 = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 50px;
  line-height: 54px;
  color: ${Colors.DARK};
  @media (max-width: 576px) {
    font-size: 46px;
    line-height: 50px;
  }
`;

export const H2 = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 46px;
  color: ${Colors.BLACK};
  @media (max-width: 576px) {
    font-size: 36px;
    line-height: 42px;
  }
`;

export const H3 = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 26px;
  line-height: 34px;
  color: ${Colors.BLACK};
`;

export const H4 = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  color: ${Colors.BLACK};
`;

export const Text = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: ${Colors.BODY_TEXT};
`;
