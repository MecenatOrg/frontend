import styled, { keyframes } from 'styled-components';
import media from 'shared/media-types';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const AboutWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 60px 0 100px;
  ${media.tabletLMax} {
    flex-direction: column;
  }
  ${media.tabletMax} {
    padding: 30px 0 40px;
  }
`;

export const AboutImgWrapper = styled.div`
  position: relative;
  img {
    display: block;
    margin-left: 30px;
  }
  ${media.tabletMax} {
    img {
      max-width: 100%;
    }
  }
  ${media.mobileMax} {
    img {
      margin-left: 0;
    }
  }
`;

export const ProjectsVerifiedWrapper = styled.div`
  position: absolute;
  bottom: 85px;
  left: -65px;
  svg {
    cursor: pointer;
    animation: ${rotate} 5.3s linear infinite;
  }
  ${media.mobileMax} {
    display: none;
  }
`;

export const AboutTextWrapper = styled.div`
  flex-grow: 1;
  padding-top: 40px;
  padding-left: 90px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h2 {
    margin-bottom: 20px;
    max-width: 400px;
    width: 100%;
    span {
      position: relative;
      &::after {
        content: '';
        width: 12px;
        height: 13px;
      }
    }
  }
  button {
    margin-top: 40px;
  }
  ${media.tabletLMax} {
    padding-left: 0;
  }
`;
