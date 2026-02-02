import type { ReactElement } from 'react';
import { CardList, CreateCard } from '@components/index';
import DefaultLayout from '@layout/DefaultLayout';

export default ():ReactElement => <DefaultLayout>
  <h1>Cards</h1>
  <CardList />
  <CreateCard /> 
</DefaultLayout>