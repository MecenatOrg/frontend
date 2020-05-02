import styled from 'styled-components';

type BackdropProps = {
  show: boolean;
};

export const BackdropWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 9999;
  justify-content: center;
  align-items: center;
  ${({ show }: BackdropProps): string => `display: ${show ? 'flex' : 'none'};`};
`;

export const BackdropEmptyContent = styled.div`
  height: calc(100vh - 80px);
`;
