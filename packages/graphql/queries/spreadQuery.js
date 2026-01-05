import { 
  GraphQLString 
} from 'graphql';

import { SpreadType } from '../types/index.js';
import { spreadResolver } from '../resolvers/index.js';


const spreadQuery = {
  type: SpreadType,
  args: { id: { type: GraphQLString } },
  resolve: spreadResolver
};

export default spreadQuery;