import React from 'react';
import { FooterListWrapper, FooterListHeading, SocialIconWrapper, FooterListItem } from './styles';
import { TwitterIcon, LinkedinIcon, FacebookIcon } from '../../../icons';

type FooterItem = {
  name: string;
  link: string;
};

type FooterList = {
  heading: string;
  list: FooterItem[];
};

const FooterList: React.FC = () => {
  const footerLists: Array<FooterList> = [
    {
      heading: 'Категорії',
      list: [
        { name: 'Освіта', link: '' },
        { name: 'Діти', link: '/' },
        { name: 'Екологія', link: '/' },
        { name: 'Війна', link: '/' },
        { name: 'Медицина', link: '/' },
        { name: 'Мистецтво', link: '/' },
      ],
    },
    {
      heading: 'Про нас',
      list: [
        { name: 'Як це працює', link: '' },
        { name: 'Поради', link: '/' },
        { name: 'Кейси', link: '/' },
        { name: 'Контакти', link: '/' },
      ],
    },
    {
      heading: 'Проект',
      list: [
        { name: 'Знайти проект', link: '' },
        { name: 'Додати проект', link: '/' },
        { name: 'Критерії відбору проекту', link: '/' },
      ],
    },
  ];

  return (
    <FooterListWrapper>
      {footerLists.map((footerList: FooterList, index: number) => {
        return (
          <div key={index}>
            <FooterListHeading>{footerList.heading}</FooterListHeading>
            <ul>
              {footerList.list.map((item: FooterItem, i) => {
                return (
                  <FooterListItem key={i}>
                    <a href={item.link}>{item.name}</a>
                  </FooterListItem>
                );
              })}
            </ul>
          </div>
        );
      })}
      <div>
        <FooterListHeading>Підписатись на розсилку</FooterListHeading>
        {/*Email Input*/}
        <SocialIconWrapper>
          <TwitterIcon />
          <FacebookIcon />
          <LinkedinIcon />
        </SocialIconWrapper>
      </div>
    </FooterListWrapper>
  );
};

export default FooterList;
