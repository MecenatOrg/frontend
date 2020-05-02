import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from 'Router/Routes';

import { AppWrapper } from './styles';

const App: React.FC = () => {
  return (
    <Router>
      <AppWrapper>
        <Routes />
      </AppWrapper>
    </Router>
  );
};

export default App;
