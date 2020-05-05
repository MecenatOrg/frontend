import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import About from './About';
import Hero from './Hero';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('pageTitle.HOME_PAGE')}</title>
      </Helmet>
      <Hero />
      <About />
    </>
  );
};

export default HomePage;
