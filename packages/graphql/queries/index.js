import { 
  GraphQLObjectType, 
} from 'graphql';

import cardQuery from './cardQuery.js';
import deckQuery from './deckQuery.js';
import spreadQuery from './spreadQuery.js';
import themeQuery from './themeQuery.js';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    card: cardQuery,
    deck: deckQuery,
    spread: spreadQuery,
    theme: themeQuery
  }
})

export default RootQuery;
