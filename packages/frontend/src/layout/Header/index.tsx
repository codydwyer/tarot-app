import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default ():ReactElement => 
  <header>
    <Link to="/">Tarot</Link>
    <nav className="primary-navigation" aria-label='primary navigation'>
      <ul>
        <li><Link to="/pull">Pull cards</Link></li>
        <li><Link to="/decks">Decks</Link></li>
        <li><Link to="/spreads">Spreads</Link></li>
      </ul>
    </nav>
  </header>
;