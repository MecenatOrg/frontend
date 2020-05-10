import React from 'react';
import { CategoryWrapper, TitleWrapper, CountWrapper, IconWrapper } from './styles';

export type CategoryProps = {
  id?: number;
  title: string;
  icon: string;
  link: string;
  count?: string;
};

const Category: React.FC<CategoryProps> = ({ title, count, icon, link }: CategoryProps) => {
  return (
    <CategoryWrapper href={link}>
      <TitleWrapper>{title}</TitleWrapper>
      <CountWrapper>{count}</CountWrapper>
      <IconWrapper>
        <img src={icon} alt="" />
      </IconWrapper>
    </CategoryWrapper>
  );
};

export default Category;
