import type { ReactElement } from 'react';
import { CardList, ThemeList, SpreadList, DeckList } from '../common';

export default ():ReactElement => <>
    <div>
        <CardList />
        <DeckList />
        <SpreadList />
        <ThemeList />
      </div>
      <div>
        <h2>Main Layout</h2>
        <ol>
          <li>Select a spread</li>
          <li>Select cards</li>
          <li>Optional: Select theme</li>
          <li>Read Cards</li>
        </ol>
      </div>
      <div>
        <h2>Card Meaning</h2>
        <ul>
          <li>Prompt description</li>
          <li>Card description</li>
          <li>Note Taking</li>
          <li>Share button</li>
        </ul>
      </div>
</>