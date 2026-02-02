import type { ReactElement } from 'react';
import { BasicWorkflow, CardList, CardMeaning, DeckList,  ThemeList, SpreadList } from '@components/index';
import DefaultLayout from '@layout/DefaultLayout';

export default ():ReactElement => <DefaultLayout>
  <h1>Home</h1>
    <div>
      <CardList />
      <DeckList />
      <SpreadList />
      <ThemeList />
    </div>
    <BasicWorkflow /> 
    <CardMeaning />
</DefaultLayout>