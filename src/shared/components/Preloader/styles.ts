import styled, { keyframes } from 'styled-components';

const scale = keyframes`
  0% {
    transform: scale(1.0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1.0);
  }
`;

export const PreloaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fdf9f6;
  width: 100vw;
  height: 100vh;
`;

export const BoxIconWrapper = styled.div`
  animation: ${scale} 1s linear infinite;
`;
