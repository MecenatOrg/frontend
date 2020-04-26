import styled from 'styled-components';
import Colors from 'shared/colors';
import media from 'shared/media-types';

type StyleProps = {
  order: number | null;
};

export const FooterListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
  ${media.tabletMMax} {
    flex-flow: row wrap;
    margin-bottom: 0;
    > div {
      flex: 1 0 0;
      &:not(:last-child) {
        margin-bottom: 80px;
      }
      &:last-child {
        flex: 1 100%;
        margin-bottom: 40px;
      }
      &:first-child {
        flex: 1 100%;
        > ul {
          display: flex;
          flex-flow: row wrap;
          > li {
            flex: 1 50%;
          }
        }
      }
    }
  }
`;

export const FooterListHeading = styled.div`
  font-weight: bold;
  padding-bottom: 10px;
`;

export const FooterListItem = styled.li<StyleProps>`
  padding-bottom: 10px;
  ${media.tabletMMax} {
    ${({ order }: StyleProps): string => `order: ${order || 1}`};
  }
  > a {
    opacity: 0.63;
    line-height: 28px;
    font-size: 15px;
    color: ${Colors.WHITE};
    &:hover {
      opacity: 1;
    }
  }
`;

export const SocialIconWrapper = styled.div`
  text-align: right;
  ${media.tabletMMax} {
    text-align: left;
  }
`;

export const SocialIconLink = styled.a`
  width: 35px;
  height: 35px;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  border-radius: 50%;
  line-height: 35px;
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:hover {
    background: ${Colors.ORANGE_DARK};
  }
`;
