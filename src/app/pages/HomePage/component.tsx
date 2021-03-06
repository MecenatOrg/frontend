import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import About from './About';
import Hero from './Hero';
import Categories from './Categories';
import ContactForm from './ContactForm';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('pageTitle.HOME_PAGE')}</title>
      </Helmet>
      <Hero />
      <Categories />
      <About />
      <ContactForm />
    </>
  );
};

export default HomePage;
