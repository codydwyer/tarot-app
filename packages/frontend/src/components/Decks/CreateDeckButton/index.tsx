import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default ():ReactElement => 
  <Link to="/create-deck" className="create-deck-button">Create Deck</Link>;