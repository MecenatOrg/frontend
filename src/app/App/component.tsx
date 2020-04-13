import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';

import { AppWrapper } from './styles';

const App: React.FC = () => {
  return (
    <Router>
      <AppWrapper>Hello World!</AppWrapper>

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
