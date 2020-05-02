import React, { Fragment } from 'react';

import { Container } from 'react-bootstrap';
import { Header, Footer } from 'shared/components';

type RootProps = {
  children?: React.ReactElement;
};

// TODO This component will probably expand

const Root: React.FC<RootProps> = ({ children }: RootProps) => {
  return (
    <Fragment>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </Fragment>
  );
};

export default Root;
