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
      id: Math.random(),
      title: t('EDUCATION'),
      icon: EducationIcon,
      count: t('PROJECTS', { count: 43 }),
      link: '/projects/education',
    },
    {
      id: Math.random(),
      title: t('COVID'),
      icon: CovidIcon,
      count: t('PROJECTS', { count: 1 }),
      link: '/projects/covid-19',
    },
    {
      id: Math.random(),
      title: t('ECOLOGY'),
      icon: EcoIcon,
      count: t('PROJECTS', { count: 5 }),
      link: '/projects/ecology',
    },
    {
      id: Math.random(),
      title: t('CHILDREN'),
      icon: ChildrenIcon,
      count: t('PROJECTS', { count: 43 }),
      link: '/projects/children',
    },
    {
      id: Math.random(),
      title: t('ART'),
      icon: ArtIcon,
      count: t('PROJECTS', { count: 2 }),
      link: '/projects/art',
    },
    {
      id: Math.random(),
      title: t('ALL_PROJECTS'),
      icon: AllProjectsIcon,
      link: '/',
    },
  ];
  return (
    <Row>
      {categoriesList.map((category: CategoryProps) => (
        <Col md={4} key={category.id}>
          <Category {...category} />
        </Col>
      ))}
    </Row>
  );
};
export default Categories;
