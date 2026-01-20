import { DeckType } from '../types/index.js';
import { decksResolver } from '../resolvers/index.js';
import { GraphQLList } from 'graphql';

const decksQuery = {
  type: new GraphQLList(DeckType),
  args: {},
  resolve: decksResolver
};

export default decksQuery;