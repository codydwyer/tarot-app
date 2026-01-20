import axios from 'axios';
import { dbUrl } from '../conf.js';
import deckResolver from './deckResolver.js';

const decksResolver = async (_parent, _args) => {
  const url = `${dbUrl}/decks`; 
  console.log('Fetching decks from URL:', url);
  const decksRaw = await axios.get(url).then(response => response.data);
  const decks = await Promise.all(decksRaw.map(deck => deckResolver(null, { id: deck.id })));

  return decks;
}

export default decksResolver;