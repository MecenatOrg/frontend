import React from 'react';
import Container from 'react-bootstrap/Container';

import { AppWrapper } from './styles';

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <Container>
      <AppWrapper>Hello World!</AppWrapper>
    </Container>
  );
};

export default App;
