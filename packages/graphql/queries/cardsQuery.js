import { CardType } from '../types/index.js';
import { cardsResolver } from '../resolvers/index.js';
import { GraphQLList } from 'graphql';

const cardsQuery = {
  type: new GraphQLList(CardType),
  args: {},
  resolve: cardsResolver
};

export default cardsQuery;