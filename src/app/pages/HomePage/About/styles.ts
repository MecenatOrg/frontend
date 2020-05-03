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
  position: relative;
  display: flex;
  align-items: flex-start;
  padding: 60px 0 100px;
  ${media.tabletMax} {
    padding: 30px 0 40px;
    flex-direction: column;
  }
`;

export const AboutImgWrapper = styled.div`
  position: relative;
  img {
    display: block;
    margin-left: 30px;
  }
  ${media.tabletLMax} {
    width: 45%;
    flex-shrink: 0;
    img {
      margin-left: 0;
      max-width: 100%;
    }
  }
  ${media.tabletMax} {
    width: 100%;
    img {
      margin-right: auto;
      margin-left: auto;
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
  ${media.tabletLMax} {
    bottom: 20px;
    left: -85px;
    transform: scale(0.7);
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
    }
    svg {
      position: absolute;
      bottom: 3px;
      left: 20px;
    }
  }
  button {
    margin-top: 40px;
  }
  ${media.tabletLMax} {
    padding-left: 40px;
    padding-top: 0;
  }
  ${media.tabletMax} {
    padding-left: 0;
    padding-top: 40px;
  }
  ${media.mobileMax} {
    h2 {
      svg {
        bottom: 1px;
        left: 17px;
      }
    }
  }
`;
