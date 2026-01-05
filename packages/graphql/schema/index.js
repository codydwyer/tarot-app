import { 
  GraphQLSchema
} from 'graphql';

import RootQuery from '../queries/index.js';

const schema = new GraphQLSchema({
  query: RootQuery
});

export default schema;