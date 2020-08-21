import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomePage from '../pages/HomePage';
import { Header, Footer } from 'shared/components';
import { AppWrapper } from './styles';
import axios from 'axios';
import gql from 'graphql-tag';
import { print } from 'graphql';

const listCases = gql`
  query listCases {
    listCases {
      items {
        id
        title
      }
    }
  }
`;

const getData: any = async () => {
  try {
    const graphqlData = await axios({
      url: 'https://qi7uiyentzddxcocotlg3nxske.appsync-api.eu-west-1.amazonaws.com/graphql',
      method: 'post',
      headers: {
        'x-api-key': 'da2-uebwrkeuybaejoa4dqc6yofbxy',
      },
      data: {
        query: print(listCases),
      },
    });
    console.log(graphqlData);
    const body = {
      graphqlData: graphqlData.data.data.listCases,
    };
    return {
      statusCode: 200,
      body: JSON.stringify(body),
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };
  } catch (err) {
    console.log('error posting to appsync: ', err);
  }
};

const App: React.FC = () => {
  getData();
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
