import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Category from 'shared/components/Category';
import { AllProjectsIcon, ArtIcon, ChildrenIcon, CovidIcon, EcoIcon, EducationIcon } from 'shared/images';

const Categories: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Row>
      <Col md={4}>
        <Category title={t('EDUCATION')} count={t('PROJECTS', { count: 43 })} icon={EducationIcon} />
      </Col>
      <Col md={4}>
        <Category title={t('COVID')} count={t('PROJECTS', { count: 1 })} icon={CovidIcon} />
      </Col>
      <Col md={4}>
        <Category title={t('ECOLOGY')} count={t('PROJECTS', { count: 5 })} icon={EcoIcon} />
      </Col>
      <Col md={4}>
        <Category title={t('CHILDREN')} count={t('PROJECTS', { count: 43 })} icon={ChildrenIcon} />
      </Col>
      <Col md={4}>
        <Category title={t('ART')} count={t('PROJECTS', { count: 2 })} icon={ArtIcon} />
      </Col>
      <Col md={4}>
        <Category title={t('ALL_PROJECTS')} icon={AllProjectsIcon} />
      </Col>
    </Row>
  );
};
export default Categories;
