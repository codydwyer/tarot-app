import axios from 'axios';
import { dbUrl } from '../conf.js';

const themeResolver = (parent, args) => {
  const url = `${dbUrl}/themes/${args.id}`; 
  console.log('Fetching theme from URL:', url);
  return axios.get(url).then(response => response.data);
}

export default themeResolver;