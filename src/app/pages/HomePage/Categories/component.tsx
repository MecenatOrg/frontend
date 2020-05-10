import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Category from 'shared/components/Category';
import { CategoryProps } from 'shared/components/Category/component';
import { AllProjectsIcon, ArtIcon, ChildrenIcon, CovidIcon, EcoIcon, EducationIcon } from 'shared/images';

const Categories: React.FC = () => {
  const { t } = useTranslation();
  const categoriesList: Array<CategoryProps> = [
    {
      title: t('EDUCATION'),
      icon: EducationIcon,
      count: t('PROJECTS', { count: 43 }),
      link: '/',
    },
    {
      title: t('COVID'),
      icon: CovidIcon,
      count: t('PROJECTS', { count: 1 }),
      link: '/',
    },
    {
      title: t('ECOLOGY'),
      icon: EcoIcon,
      count: t('PROJECTS', { count: 5 }),
      link: '/',
    },
    {
      title: t('CHILDREN'),
      icon: ChildrenIcon,
      count: t('PROJECTS', { count: 43 }),
      link: '/',
    },
    {
      title: t('ART'),
      icon: ArtIcon,
      count: t('PROJECTS', { count: 2 }),
      link: '/',
    },
    {
      title: t('ALL_PROJECTS'),
      icon: AllProjectsIcon,
      link: '/',
    },
  ];
  return (
    <Row>
      {categoriesList.map((category: CategoryProps, index) => (
        <Col md={4} key={index}>
          <Category {...category} />
        </Col>
      ))}
    </Row>
  );
};
export default Categories;
