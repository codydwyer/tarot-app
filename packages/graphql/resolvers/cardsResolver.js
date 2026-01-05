import axios from 'axios';
import { dbUrl } from '../conf.js';

const cardsResolver = (_parent, _args) => {
  const url = `${dbUrl}/cards`; 
  console.log('Fetching cards from URL:', url);
  return axios.get(url).then(response => response.data);
}

export default cardsResolver;