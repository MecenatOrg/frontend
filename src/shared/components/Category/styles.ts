import styled from 'styled-components';
import media from 'shared/media-types';
import Colors from '../../colors';

export const CategoryWrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 24px 30px 30px;
  margin-bottom: 30px;
  position: relative;
  color: ${Colors.BLACK};
  height: 180px;
  width: auto;
  border-radius: 4px;
  background: ${Colors.WHITE};
  cursor: pointer;
  &:hover {
    box-shadow: 0 20px 30px rgba(233, 229, 221, 0.6);
    text-decoration: none;
    color: ${Colors.BLACK};
  }
  ${media.mobileMax} {
    height: 120px;
  }
`;

export const TitleWrapper = styled.h5`
  font-weight: bold;
  font-size: 22px;
  line-height: 32px;
`;

export const CountWrapper = styled.span`
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
`;

export const IconWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 90px;
  height: 70px;
  overflow: hidden;
  img {
    display: block;
    width: 100%;
  }
`;
