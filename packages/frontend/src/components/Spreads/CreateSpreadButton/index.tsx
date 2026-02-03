import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default ():ReactElement => 
  <Link to="/create-spread" className="create-spread-button">Create Spread</Link>;