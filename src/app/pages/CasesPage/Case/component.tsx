import React from 'react';
import { CaseWrapper, TitleWrapper, TextPreviewWrapper, TagsWrapper, ImageWrapper } from './styles';
import { v4 as uuidv4 } from 'uuid';
import { Size } from 'config/configEnums';
import { RoundedRectangle, RectangleOvalToRight, Oval } from 'shared/shapes';
import { If } from 'react-if';

import Colors from 'shared/colors';

export interface CaseProps {
  imgUrl: string;
  tags: string[];
  title: string;
  textPreview?: string;
  variant: string;
}

const Case: React.FC<CaseProps> = (props: CaseProps) => {
  const _random = Math.round(Math.random());
  return (
    <CaseWrapper variant={props.variant}>
      <div className="case-image">
        <If condition={props.variant === 'LARGE'}>
          <RoundedRectangle className="svg-rounded-rectangle" size={Size.SMALL} fill={Colors.BLUE_NAVY} />
        </If>
        <If condition={props.variant === 'MEDIUM' && _random === 0}>
          <RectangleOvalToRight className="svg-rectangle-oval" size={Size.SMALL} fill={Colors.YELLOW_DARK} />
        </If>
        <If condition={props.variant === 'MEDIUM' && _random === 1}>
          <Oval className="svg-rectangle-oval" size={Size.SMALL} fill={Colors.AQUAMARINE_DARK} />
        </If>
        <If condition={props.variant === 'SMALL'}>
          <Oval className="svg-small-oval" size={Size.SMALL} fill={Colors.PURPLE_LIGHT} />
        </If>
        <ImageWrapper imageUrl={props.imgUrl}></ImageWrapper>
      </div>
      <div>
        <TagsWrapper>
          {props.tags.map((tag: string) => (
            <p key={uuidv4()}>{tag}</p>
          ))}
        </TagsWrapper>
        <TitleWrapper variant={props.variant}>{props.title}</TitleWrapper>
        <TextPreviewWrapper>{props.textPreview}</TextPreviewWrapper>
      </div>
    </CaseWrapper>
  );
};
export default Case;
