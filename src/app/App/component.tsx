import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import HomePage from '../pages/HomePage';
import { Header, Footer } from 'shared/components';

import { AppWrapper } from './styles';

const App: React.FC = () => {
  return (
    <Router>
      <AppWrapper>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </AppWrapper>
    </Router>
  );
};

export default App;
