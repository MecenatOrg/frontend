import styled from 'styled-components';
import media from 'shared/media-types';

type StyleProps = {
  isOpenList: boolean;
};

export const ArrowIconWrapper = styled.div<StyleProps>`
  display: none;
  ${media.tabletMax} {
    display: block;
    svg {
      transition: all 0.3s;
      ${({ isOpenList }) => `transform: rotate(${isOpenList ? '180deg' : '0'})`};
    }
  }
`;

export const ListWrapper = styled.ul<StyleProps>`
  ${media.tabletMax} {
    ${({ isOpenList }) => `display: ${isOpenList ? 'block' : 'none'}`};
  }
`;
