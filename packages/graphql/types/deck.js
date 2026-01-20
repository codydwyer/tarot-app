import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import CardType from './card.js';

const DeckType = new GraphQLObjectType({
  name: 'Deck',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    cards: { type: new GraphQLList(CardType) }
  }
});

export default DeckType;
