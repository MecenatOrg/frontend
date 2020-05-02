import React, { Suspense } from 'react';
import { Route, Switch, Router } from 'react-router-dom';

import history from './history';

import { routes } from './path';

// * Core components ->
import { Root } from 'shared/components';
import { NotFound } from 'shared/components';
// import { Backdrop } from 'Components/Backdrop';
// ! This component does not exist yet
// import { Spinner } from 'shared/components';
// * <- Core components

// TODO ADD NEW PAGES
// * Lazy components ->
// ?  Home Page (default);
const HomePage = React.lazy(() => import('app/pages/HomePage'));
// ?  Cases Page

// ? Case Page

// ? Project Page

// ? Project Page

// * <- Lazy components

type RoutesProps = {};

const Routes: React.FC = () => {
  const preloadingComponent = (
    // <Backdrop overflowAll>
    <p>Loading...</p>
    // </Backdrop>
  );

  return (
    <Router history={history}>
      <Root>
        <Suspense fallback={preloadingComponent}>
          <Switch>
            <Route path={routes.home} exact>
              <HomePage />
            </Route>
            <Route path={routes.casesPage} exact>
              <h1>Cases Page</h1>
            </Route>
            <Route path={routes.casePage} exact>
              <h1>Case Page</h1>
            </Route>
            <Route path={routes.projects} exact>
              <h1>Projects Page</h1>
            </Route>
            <Route path={routes.project} exact>
              <HomePage />
            </Route>
            <Route path={'*'} exact>
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </Root>
    </Router>
  );
};

export default Routes;
