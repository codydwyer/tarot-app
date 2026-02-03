import type { ReactElement } from 'react';
import { DeckList, CreateDeckButton } from '@components/index';
import DefaultLayout from '@layout/DefaultLayout';

export default ():ReactElement => <DefaultLayout>
  <h1>Decks</h1>
  <DeckList />
  <CreateDeckButton />
</DefaultLayout>