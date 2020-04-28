import styled from 'styled-components';
import Colors from 'shared/colors';
import media from 'shared/media-types';

export const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 60px 0 100px;
  > div {
    width: 50%;
  }
  ${media.tabletMax} {
    flex-direction: column;
    padding: 30px 0 40px;
    > div {
      width: 100%;
    }
  }
`;

export const HeroTextWrapper = styled.div`
  h1 {
    margin-bottom: 20px;
  }
  > p {
    color: ${Colors.GREY};
    line-height: 26px;
  }
  button {
    margin-top: 50px;
  }
  ${media.tabletMax} {
    button {
      display: none;
    }
  }
`;

export const BigBoxIconWrapper = styled.div`
  text-align: right;
  svg {
    ${media.tabletXLMax} {
      max-width: 350px;
    }
    ${media.mobileMax} {
      max-height: 350px;
      max-width: 335px;
    }
  }
  ${media.tabletMax} {
    text-align: center;
  }
`;
