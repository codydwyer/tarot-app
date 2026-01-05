import { 
  GraphQLObjectType, 
  GraphQLString 
} from 'graphql';

import { CardType, DeckType, SpreadType, ThemeType } from '../types/index.js';
import { cardResolver } from '../resolvers/index.js';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    card: {
      type: CardType,
      args: { id: { type: GraphQLString } },
      resolve: cardResolver
    },
    deck: {
      type: DeckType,
      args: { id: { type: GraphQLString } },
      resolve: (parent, args) => {
        return args.id;
      }
    },
    spread: {
      type: SpreadType,
      args: { id: { type: GraphQLString } },
      resolve: (parent, args) => {
        return args.id;
      }
    },
    theme: {
      type: ThemeType,
      args: { id: { type: GraphQLString } },
      resolve: (parent, args) => {
        return args.id;
      }
    }
  }
})

export default RootQuery;
