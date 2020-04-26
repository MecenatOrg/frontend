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
  ${media.mobileMax} {
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
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
  }
  ${media.tabletMMax} {
    h1 {
      font-size: 46px;
    }
  }
`;

export const BigBoxIconWrapper = styled.div`
  svg {
    ${media.tabletLMax} {
      max-width: 400px;
    }
    ${media.tabletLMax} {
      max-width: 360px;
    }
    ${media.mobileMax} {
      max-height: 350px;
      max-width: 335px;
    }
  }
`;
