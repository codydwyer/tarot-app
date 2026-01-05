import axios from 'axios';
import { dbUrl } from '../conf.js';

const spreadResolver = (parent, args) => {
  const url = `${dbUrl}/spreads/${args.id}`; 
  console.log('Fetching spread from URL:', url);
  return axios.get(url).then(response => response.data);
}

export default spreadResolver;