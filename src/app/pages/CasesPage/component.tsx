import React, { Fragment } from 'react';
import { CaseProps } from './Case/component';
import { data } from './mockData.json';
import Case from './Case';
import { v4 as uuidv4 } from 'uuid';
import { CaseWrapper } from './styles';
import { useTranslation } from 'react-i18next';

export interface CasesProps {
  tag: string;
}

const CasesPage: React.FC<CasesProps> = (props: CasesProps) => {
  const underlinedCases = [0, 2, 5];
  const cases: Array<CaseProps> = data;
  const { t } = useTranslation();
  return (
    <CaseWrapper>
      <p>{t(props.tag.toLocaleUpperCase())}</p>
      {cases.map((singleCase: CaseProps, index: number) => (
        <Fragment key={uuidv4()}>
          <Case {...singleCase}></Case>
          {underlinedCases.includes(index) && <hr />}
        </Fragment>
      ))}
    </CaseWrapper>
  );
};

export default CasesPage;
