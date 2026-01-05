import type { ReactElement } from 'react';

import { ApolloProvider } from "@apollo/client/react";
import { Provider } from 'react-redux';

import client from './apollo';
import { store } from '@redux/index';

import App from './App';


export default ():ReactElement => <ApolloProvider client={client}>
  <Provider store={store}>
    <App />
  </Provider>
</ApolloProvider>;