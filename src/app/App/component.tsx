import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomePage from '../pages/HomePage';
import { Header, Footer } from 'shared/components';
import { AppWrapper } from './styles';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import CasesPage from 'app/pages/CasesPage';
import CaseDetails from 'app/pages/CasesPage/CaseDetails';

export interface CaseDetailsProps {
  match: {
    params: {
      id: string;
    };
  };
}

export interface CasesPageProps {
  match: {
    params: {
      tag: string;
    };
  };
}

const App: React.FC = () => {
  const httpLink = createHttpLink({
    // should be updated with real back url
    uri: 'http://localhost:4000/graphql',
  });

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        <AppWrapper>
          <Header />

          <Switch>
            <Route exact path="/">
              <Container>
                <HomePage />
              </Container>
            </Route>
            <Route exact path="/find-project">
              <Container></Container>
            </Route>
            <Route
              path="/project/:id"
              render={(props: CaseDetailsProps) => (
                <Container>
                  <CaseDetails id={parseInt(props.match.params.id, 10)} />
                </Container>
              )}
            />
            <Route
              path="/projects/:tag"
              render={(props: CasesPageProps) => (
                <Container>
                  <CasesPage tag={props.match.params.tag} />
                </Container>
              )}
            />
          </Switch>
          <Footer />
        </AppWrapper>
      </Router>
    </ApolloProvider>
  );
};

export default App;
