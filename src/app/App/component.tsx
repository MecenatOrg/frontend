import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import Header from '../../shared/components/Header';

import { AppWrapper } from './styles';
import { Container } from 'react-bootstrap';

const App: React.FC = () => {
  return (
    <Router>
      <AppWrapper>
        <Header />
        <Container>Hello world</Container>
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
