import { GraphQLObjectType, GraphQLString } from 'graphql';

const SpreadType = new GraphQLObjectType({
  name: 'Spread',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString }
  }
});

export default SpreadType;
