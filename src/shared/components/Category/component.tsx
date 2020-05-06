import React from 'react';
import { CategoryWrapper, TitleWrapper, CountWrapper, IconWrapper } from './styles';

type CategoryProps = {
  title: string;
  count?: string;
  icon: string;
};

const Category: React.FC<CategoryProps> = ({ title, count, icon }: CategoryProps) => {
  return (
    <CategoryWrapper>
      <TitleWrapper>{title}</TitleWrapper>
      <CountWrapper>{count}</CountWrapper>
      <IconWrapper>
        <img src={icon} alt="" />
      </IconWrapper>
    </CategoryWrapper>
  );
};

export default Category;
