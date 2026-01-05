import axios from 'axios';
import { dbUrl } from '../conf.js';

const cardResolver = (_parent, args) => {
  const url = `${dbUrl}/cards/${args.id}`; 
  console.log('Fetching card from URL:', url);
  return axios.get(url).then(response => response.data);
}

export default cardResolver;