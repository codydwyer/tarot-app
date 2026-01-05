import type { ReactElement } from 'react';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { ApolloProvider } from "@apollo/client/react";

import App from './App';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache()
});

export default ():ReactElement => <ApolloProvider client={client}>
  <App />
  </ApolloProvider>;