import { 
  GraphQLString 
} from 'graphql';

import { CardType } from '../types/index.js';
import { cardResolver } from '../resolvers/index.js';


const cardQuery = {
  type: CardType,
  args: { id: { type: GraphQLString } },
  resolve: cardResolver
};

export default cardQuery;