import { 
  GraphQLSchema, 
  GraphQLObjectType, 
  GraphQLString 
} from 'graphql';

import CardType from './card.js';
import DeckType from './deck.js';
import SpreadType from './spread.js';
import ThemeType from './theme.js';

import cards from '../data/cards.js';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    card: {
      type: CardType,
      args: { id: { type: GraphQLString } },
      resolve: (parent, args) => cards.find(card => card.id === args.id) // Implement your logic to fetch a card by ID here
    },
    deck: {
      type: DeckType,
      args: { id: { type: GraphQLString } },
      resolve: (parent, args) => {
        return args.id;
        // Implement your logic to fetch a deck by ID here
      }
    },
    spread: {
      type: SpreadType,
      args: { id: { type: GraphQLString } },
      resolve: (parent, args) => {
        return args.id;
        // Implement your logic to fetch a spread by ID here
      }
    },
    theme: {
      type: ThemeType,
      args: { id: { type: GraphQLString } },
      resolve: (parent, args) => {
        return args.id;
        // Implement your logic to fetch a theme by ID here
      }
    }
  }
})

const schema = new GraphQLSchema({
  query: RootQuery
});


export default schema;