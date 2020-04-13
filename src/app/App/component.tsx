import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import Footer from 'shared/components/Footer';

import { AppWrapper } from './styles';
import { Container } from 'react-bootstrap';

const App: React.FC = () => {
  return (
    <Router>
      <AppWrapper>
        <Container>Hello world</Container>
        <Footer />
      </AppWrapper>

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
