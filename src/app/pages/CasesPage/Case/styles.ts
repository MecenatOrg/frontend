import styled from 'styled-components';
import media from 'shared/media-types';
import Colors from 'shared/colors';

type StyleProps = {
  variant: string;
};

type ImageWrapperProps = {
  imageUrl: string;
};

export const CaseWrapper = styled.div`
  display: flex;
  .case-link {
    color: inherit;
    text-decoration: inherit;
    width: 100%;
  }
  .case-image {
    width: 100%;
    z-index: 1;
    position: relative;
  }
  ${(props: StyleProps) => {
    switch (props.variant) {
      case 'LARGE':
        return `
        padding: 60px 0;
        align-items: center;
        > div {
          width: 50%;
          margin: 0 20px;
        }
        .case-image {
          height: 370px;
          width: 100%;
          z-index: 1;
        }
        .svg-rounded-rectangle {
          position: absolute;
          left: -20px;
          top: 50%;
          transform: translateY(-50%);
        }
        ${media.tabletLMax} {
          align-items: center;
          .case-image {
            width: 100%;
          }
        }
        ${media.tabletMax} {
          flex-direction: column;
          padding: 30px 0;
          .case-image {
            height: 300px;
          }
          > div {
            width: 100%;
            margin: 0;
          }
          .svg-rounded-rectangle {
            width: 40%;
            left: -10px;
            height: auto;
          }
        }
        ${media.mobileMax} {
          .case-image {
            margin-left: 5px;
          }
        }
      `;
      case 'MEDIUM':
        return `
        width: 49%;
        padding: 80px 0;
        flex-direction: column;
        > div {
          width: 100%;
          margin: 0 20px;
        }
        .case-image {
          height: 300px;
          width: 100%;
          z-index: 1;
        }
        .svg-rectangle-oval {
          position: absolute;
          left: -10px;
          top: 50%;
          transform: translateY(-50%);
        }
        ${media.tabletLMax} {
          padding: 60px 0;
          .svg-rectangle-oval {
            width: 40%;
            left: -10px;
            top: 50%;
            transform: translateY(-50%);
          }
        }
        ${media.tabletMax} {
          width: 48%;
          .case-image {
            height: 200px;
          }
        }
        ${media.mobileMax} {
          width: 100%;
        }
      `;
      case 'SMALL':
        return `
        width: 30%;
        padding: 75px 0;
        flex-direction: column;
        > div {
          margin: 0 20px;
          width: 100%;
        }
        .svg-small-oval {
          position: absolute;
          left: -10px;
          top: 50%;
          transform: translateY(-50%);
          width: 40%;
          height: auto;
        }
        .case-image {
          height: 220px;
        }
        ${media.tabletMax} {
          padding: 55px 0;
          width: 48%;
          .case-image {
            height: 200px;
          }
        }
        ${media.mobileMax} {
          width: 100%;
        }
      `;
    }
  }};
`;

export const TitleWrapper = styled.p`
  font-weight: bold;
  margin: 0 15px;
  ${(props: StyleProps) => {
    switch (props.variant) {
      case 'LARGE':
        return `
        line-height: 34px;
        font-size: 26px;
      `;
      case 'MEDIUM':
        return `
        font-size: 22px;
        line-height: 30px;
      `;
      case 'SMALL':
        return `
        font-size: 22px;
        line-height: 30px;    
      `;
    }
  }};
  ${media.mobileMax} {
    margin: 0 5px;
  }
`;

export const ImageWrapper = styled.div`
  ${(props: ImageWrapperProps) => `background: url(${props.imageUrl})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const TextPreviewWrapper = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: ${Colors.GREY};
  margin: 10px 15px;
  ${media.mobileMax} {
    margin: 10px 5px;
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  font-size: 14px;
  line-height: 24px;
  margin: 9px 15px;
  font-weight: bold;
  > p:nth-child(even) {
    margin: 0 5px;
  }
  ${media.mobileMax} {
    margin: 9px 5px;
  }
`;
