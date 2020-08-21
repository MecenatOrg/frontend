import React, { Fragment } from 'react';
import { detailsData } from './mockedDetailsData.json';
import { data } from '../mockData.json';
import { CaseDetailsWrapper, TagsWrapper, ImageWrapper, TitleWrapper, TextWrapper, LastCasesWrapper } from './styles';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon } from 'shared/icons';
import Case, { CaseProps } from '../Case/component';

export interface CaseDetailsProps {
  id: number;
}

const CaseDetails: React.FC<CaseDetailsProps> = (props: CaseDetailsProps) => {
  const { t } = useTranslation();
  const detailedCases = detailsData;
  const lastCasesData = data;

  const details = detailedCases.find(item => item.id === props.id)?.details;
  const lastCases = lastCasesData.slice(-3);
  lastCases.forEach(singleCase => {
    singleCase.variant = 'SMALL';
    singleCase.textPreview = '';
  });
  return (
    <CaseDetailsWrapper>
      {details && (
        <Fragment>
          {details.tags && (
            <TagsWrapper>
              {details.tags.map((tag: string) => (
                <p key={uuidv4()}>{tag}</p>
              ))}
            </TagsWrapper>
          )}

          {details.title && <TitleWrapper>{details.title}</TitleWrapper>}

          {details.images?.[0] && (
            <ImageWrapper>
              <img src={details.images[0].url} alt="" />
              {details.images?.[0].description && <p>{details.images[0].description}</p>}
            </ImageWrapper>
          )}

          {details.paragraphOne && <TextWrapper>{details.paragraphOne}</TextWrapper>}

          {details.images?.[1] && (
            <ImageWrapper>
              <img src={details.images[1].url} alt="" />
              {details.images?.[1].description && <p>{details.images[1].description}</p>}
            </ImageWrapper>
          )}

          {details.paragraphTwo && <TextWrapper>{details.paragraphTwo}</TextWrapper>}
          <p>{t('SOCIAL_SHARE')}</p>
          <FacebookShareButton className="facebook-button" url={window.location.href} quote={details?.title}>
            <FacebookIcon />
            Facebook
          </FacebookShareButton>
          <TwitterShareButton className="twitter-button" url={window.location.href}>
            <TwitterIcon />
            Twitter
          </TwitterShareButton>
          <hr />
          <TitleWrapper>{t('LAST_CASES')}</TitleWrapper>
          <LastCasesWrapper>
            {lastCases.map((lastCaseDetails: CaseProps) => (
              <Fragment key={uuidv4()}>
                <Case {...lastCaseDetails}></Case>
              </Fragment>
            ))}
          </LastCasesWrapper>
        </Fragment>
      )}
      {!details && <div>error occured</div>}
    </CaseDetailsWrapper>
  );
};
export default CaseDetails;
