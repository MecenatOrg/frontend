import styled from 'styled-components';
import Colors from 'shared/colors';

export const FooterWrapper = styled.div`
  padding: 60px 0;
  background: ${Colors.DARK_BACKGROUND};
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
`;

export const Copyright = styled.div`
  color: ${Colors.WHITE};
  opacity: 0.63;
`;
