import type { ReactElement } from 'react';
import { CardList, DeckList, ThemeList } from '@components/index';
import DefaultLayout from '@layout/DefaultLayout';

export default ():ReactElement => <DefaultLayout>
  Decks
  <div>
    <DeckList />
    <CardList />
    <ThemeList />
  </div>
</DefaultLayout>