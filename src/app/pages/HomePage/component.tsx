import React from 'react';
import { Helmet } from 'react-helmet';

import Hero from './Hero';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Меценат - Головна сторінка</title>
      </Helmet>
      <Hero />
    </>
  );
};

export default HomePage;
