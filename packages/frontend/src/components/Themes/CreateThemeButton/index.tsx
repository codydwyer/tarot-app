import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default ():ReactElement => 
  <Link to="/create-theme" className="create-theme-button">Create Theme</Link>;