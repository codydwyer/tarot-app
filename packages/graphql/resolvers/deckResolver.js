import axios from 'axios';
import { dbUrl } from '../conf.js';
import cardResolver from './cardResolver.js';

const deckResolver = async (parent, args) => {
  const deckUrl = `${dbUrl}/decks/${args.id}`; 
  const deckCardsUrl = `${dbUrl}/decks_cards?deckId=${args.id}`; 

  console.log('Fetching deck from URL:', deckUrl);
  console.log('Fetching deck cards from URL:', deckCardsUrl);

  const deck = await axios.get(deckUrl).then(response => response.data);
  const deckCards = await axios.get(deckCardsUrl).then(response => response.data);
  const deck_cards = deckCards.map(dc => dc.cardId);
  deck.cards = await Promise.all(deck_cards.map(cardId => cardResolver(null, { id: cardId })));
  
  return deck;
}

export default deckResolver;