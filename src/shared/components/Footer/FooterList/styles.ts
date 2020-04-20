import styled from 'styled-components';
import Colors from 'shared/colors';
import MediaTypes from 'shared/media-types';

type StyleProps = {
  order: number | null;
};

export const FooterListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
  @media (max-width: ${MediaTypes.TABLET}) {
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
  @media (max-width: ${MediaTypes.TABLET}) {
    ${({ order }: StyleProps): string => `order: ${order || 1}`};
  }
  > a {
    opacity: 0.63;
    line-height: 28px;
    font-size: 15px;
    color: ${Colors.WHITE};
    &:hover {
      opacity: 1;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;

export const SocialIconWrapper = styled.div`
  text-align: right;
  @media (max-width: ${MediaTypes.TABLET}) {
    text-align: left;
  }
`;
