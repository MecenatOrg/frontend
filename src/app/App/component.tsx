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

        <Switch>
          <Route exact path="/">
            <Container>
              <HomePage />
            </Container>
          </Route>
        </Switch>

        <Footer />
      </AppWrapper>
    </Router>
  );
};

export default App;
