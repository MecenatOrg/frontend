import styled from 'styled-components';

export const FooterListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
`;

export const FooterListHeading = styled.div`
  font-weight: bold;
  padding-bottom: 10px;
`;

export const FooterListItem = styled.li`
  > a {
    opacity: 0.63;
    line-height: 28px;
    font-size: 15px;
    color: #fff;
    &:hover {
      opacity: 1;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;

export const SocialIconWrapper = styled.div`
  text-align: right;
`;
