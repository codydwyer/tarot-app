import axios from 'axios';
import { dbUrl } from '../conf.js';

const deckResolver = (parent, args) => {
  const url = `${dbUrl}/decks/${args.id}`; 
  console.log('Fetching deck from URL:', url);
  return axios.get(url).then(response => response.data);
}

export default deckResolver;