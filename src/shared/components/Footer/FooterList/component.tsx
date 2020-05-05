import React from 'react';
import { useTranslation } from 'react-i18next';

import { MenuItem, MenuList } from 'shared/types';
import { TwitterIcon, LinkedinIcon, FacebookIcon } from 'shared/icons';

import { FooterListWrapper, FooterListHeading, SocialIconWrapper, FooterListItem, SocialIconLink } from './styles';

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
  const { t } = useTranslation();

  const footerLists: Array<MenuList> = [
    {
      id: Math.random(),
      heading: t('CATEGORIES'),
      list: [
        { name: t('EDUCATION'), link: '/', id: Math.random() },
        { name: t('CHILDREN'), link: '/', id: Math.random() },
        { name: t('ECOLOGY'), link: '/', id: Math.random() },
        { name: t('WAR'), link: '/', id: Math.random() },
        { name: t('MEDICINE'), link: '/', id: Math.random() },
        { name: t('ART'), link: '/', id: Math.random() },
      ],
    },
    {
      id: Math.random(),
      heading: t('ABOUT_US'),
      list: [
        { name: t('HOW_IT_WORKS'), link: '/', id: Math.random() },
        { name: t('ADVICES'), link: '/', id: Math.random() },
        { name: t('CASES'), link: '/', id: Math.random() },
        { name: t('CONTACTS'), link: '/', id: Math.random() },
      ],
    },
    {
      id: Math.random(),
      heading: t('PROJECT'),
      list: [
        { name: t('FIND_PROJECT'), link: '/', id: Math.random() },
        { name: t('ADD_PROJECT'), link: '/', id: Math.random() },
        { name: t('PROJECT_SELECTION_CRITERIA'), link: '/', id: Math.random() },
      ],
    },
  ];

  return (
    <FooterListWrapper>
      {footerLists.map((footerList: MenuList, index: number) => (
        <div key={footerList.id}>
          <FooterListHeading>{footerList.heading}</FooterListHeading>
          <ul>
            {footerList.list.map((item: MenuItem, i: number) => (
              /* calculate flex order index only for the first list of footer list items*/
              <FooterListItem key={item.id} order={index === 0 ? calculateFlexOrder(i, footerList.list.length) : null}>
                <a href={item.link}>{item.name}</a>
              </FooterListItem>
            ))}
          </ul>
        </div>
      ))}
      <div>
        <FooterListHeading>{t('SUBSCRIBE')}</FooterListHeading>
        {/*Email Input*/}
        <SocialIconWrapper>
          <SocialIconLink href="/">
            <TwitterIcon />
          </SocialIconLink>
          <SocialIconLink href="/">
            <FacebookIcon />
          </SocialIconLink>
          <SocialIconLink href="/">
            <LinkedinIcon />
          </SocialIconLink>
        </SocialIconWrapper>
      </div>
    </FooterListWrapper>
  );
};

export default FooterList;
