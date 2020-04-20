import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import HomePage from '../pages/HomePage';
import Header from '../../shared/components/Header';
import Footer from 'shared/components/Footer';

import { AppWrapper } from './styles';

const App: React.FC = () => {
  return (
    <Router>
      <AppWrapper>
        <Header />
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
