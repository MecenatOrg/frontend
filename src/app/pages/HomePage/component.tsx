import React from 'react';
import { Helmet } from 'react-helmet';

import About from './About';
import Hero from './Hero';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Меценат - Головна сторінка</title>
      </Helmet>
      <Hero />
      <About />
    </>
  );
};

export default HomePage;
