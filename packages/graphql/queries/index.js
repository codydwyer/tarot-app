import { 
  GraphQLObjectType, 
} from 'graphql';

import cardQuery from './cardQuery.js';
import cardsQuery from './cardsQuery.js';
import deckQuery from './deckQuery.js';
import decksQuery from './decksQuery.js';
import spreadQuery from './spreadQuery.js';
import themeQuery from './themeQuery.js';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    card: cardQuery,
    cards: cardsQuery,
    deck: deckQuery,
    decks: decksQuery,
    spread: spreadQuery,
    theme: themeQuery
  }
});

export default RootQuery;
