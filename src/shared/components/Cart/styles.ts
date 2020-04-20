import styled from 'styled-components';

import { media } from 'config/media';

type StyleProps = {
  editorial: boolean;
};

export const CartWrapper = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  display: flex;
  ${({ editorial }: StyleProps): string => `flex-direction: ${editorial ? 'row' : 'column'};`};

  svg {
    position: absolute;
    z-index: 1;
  }
  &:hover {
    /* box-shadow: 0px 20px 30px rgba(233, 229, 221, 0.6); */
  }
  ${media.mobile} {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  flex-shrink: 0;
  margin-bottom: 24px;
  background: #e5e5e5;
  /* ${({ editorial }: StyleProps): string => `width: ${editorial ? '587px' : '470px'};`};
  ${({ editorial }: StyleProps): string => `height: ${editorial ? '370px' : '290px'};`}; */
  img {
    width: 100%;
    height: 100%;
  }
  ${media.mobile} {
    width: 100%;
    height: 207px;
    
  }
`;

// export const ShapesWrapper = styled.div`
//   position: relative;
//   svg {
//     position: absolute;
//   }
// `;

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CartCaption = styled.span``;

export const CartTitle = styled.h3``;

const Carttext;
