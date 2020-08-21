import styled from 'styled-components';
import Colors from 'shared/colors';
import media from 'shared/media-types';

export const CaseDetailsWrapper = styled.div`
  text-align: left;
  > p {
    font-weight: bold;
    font-size: 14px;
    line-height: 26px;
    text-align: left;
    margin: 50px 0 12px;
  }
  > button {
    margin-bottom: 80px;
    font-weight: bold !important;
    font-size: 13px !important;
    line-height: 16px !important;
    color: ${Colors.WHITE}!important;
  }
  .facebook-button {
    background: ${Colors.FACEBOOK}!important;
    padding: 8px 25px 8px 0px !important;
    margin-right: 10px;
  }
  .twitter-button {
    background: ${Colors.TWITTER}!important;
    padding: 8px 30px 8px 0px !important;
  }
  > hr {
    width: 100%;
    margin: 0 0 80px;
  }
`;
export const TagsWrapper = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  margin: 80px 0 12px;
  text-align: left;
`;

export const ImageWrapper = styled.div`
  > img {
    margin-top: 30px;
    object-fit: contain;
    width: 100%;
    max-height: 350px;
  }
  > p {
    font-weight: 500;
    font-size: 12px;
    line-height: 26px;
    color: ${Colors.GREY};
    margin: 10px 0 40px;
    text-align: center;
  }
`;

export const TitleWrapper = styled.div`
  font-weight: bold;
  font-size: 40px;
  line-height: 46px;
  text-align: left;
`;

export const TextWrapper = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: ${Colors.TEXT_COLOR};
  white-space: break-spaces;
  text-align: left;
`;

export const LastCasesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${media.tabletMax} {
    > div:last-child {
      display: none;
    }
  }
  ${media.mobileMax} {
    > div:nth-child(2) {
      display: none;
    }
  }
`;
