import { 
  GraphQLString 
} from 'graphql';

import { DeckType } from '../types/index.js';
import { deckResolver } from '../resolvers/index.js';


const deckQuery = {
  type: DeckType,
  args: { id: { type: GraphQLString } },
  resolve: deckResolver
};

export default deckQuery;