import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default ():ReactElement => 
  <Link to="/create-card" className="create-card-button">Create Card</Link>;