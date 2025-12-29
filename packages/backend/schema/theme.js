import { GraphQLObjectType, GraphQLString } from 'graphql';

const ThemeType = new GraphQLObjectType({
  name: 'Theme',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString }
  }
});

export default ThemeType;
