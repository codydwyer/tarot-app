import { 
  GraphQLString 
} from 'graphql';

import { ThemeType } from '../types/index.js';
import { themeResolver } from '../resolvers/index.js';


const themeQuery = {
  type: ThemeType,
  args: { id: { type: GraphQLString } },
  resolve: themeResolver
};

export default themeQuery;