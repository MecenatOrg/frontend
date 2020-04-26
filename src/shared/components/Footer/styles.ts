import styled from 'styled-components';
import Colors from 'shared/colors';
import media from 'shared/media-types';

export const FooterWrapper = styled.footer`
  padding: 60px 0;
  background: ${Colors.GREY_DARK};
  font-size: 15px;
  line-height: 28px;
  color: ${Colors.WHITE};
`;

export const LogoWrapper = styled.div`
  margin-bottom: 60px;
`;

export const CopyrightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  ${media.tabletMMax} {
    font-size: 12px;
  }
`;

export const Copyright = styled.div`
  color: ${Colors.WHITE};
  opacity: 0.63;
`;
