import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

const CardType = new GraphQLObjectType({
  name: 'Card',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    number: { type: GraphQLInt },
    arcana: { type: GraphQLString },
    suit: { type: GraphQLString },
    image: { type: GraphQLString },
  }
});

export default CardType;