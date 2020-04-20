import React from 'react';
import { FooterListWrapper, FooterListHeading, SocialIconWrapper, FooterListItem } from './styles';
import { TwitterIcon, LinkedinIcon, FacebookIcon } from 'shared/icons';

type FooterItem = {
  name: string;
  link: string;
};

type FooterList = {
  heading: string;
  list: FooterItem[];
};

/*
 * This method is created to calculate flex order property for list item element for tablet/mobile resolution.
 * The issue appears when the first list of footer list items is divided into two columns,
 * but order of items in columns starts looking different when we see it on desktop view.
 * For example, first column is Освіта, Екологія, Медицина, but should leave the same, like Освіта, Діти, Екологія.
 * To fix it, we need to set for the first half part of list items odd indexes in ascending order,
 * and for the second half part - even indexed in ascending order.
 * */
const calculateFlexOrder = (index: number, arrayLength: number): number => {
  // => [1, 2, 3, 4, 5, 6]
  const indexes = Array.from(Array(arrayLength).keys()).map(i => i + 1);
  // => [1, 3, 5, 2, 4, 6]
  const orders = [...indexes.filter(i => i % 2 !== 0), ...indexes.filter(i => i % 2 === 0)];

  return orders[index];
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
      {footerLists.map((footerList: FooterList, index: number) => (
        <div key={index}>
          <FooterListHeading>{footerList.heading}</FooterListHeading>
          <ul>
            {footerList.list.map((item: FooterItem, i) => (
              /* calculate flex order indexed only for the first list*/
              <FooterListItem key={i} order={index === 0 ? calculateFlexOrder(i, footerList.list.length) : null}>
                <a href={item.link}>{item.name}</a>
              </FooterListItem>
            ))}
          </ul>
        </div>
      ))}
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
