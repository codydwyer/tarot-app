import type { ReactElement } from 'react';
import { BasicWorkflow, CardList, CardMeaning, DeckList,  ThemeList, SpreadList } from '@components/index';

export default ():ReactElement => <>
  <div>
    <CardList />
    <DeckList />
    <SpreadList />
    <ThemeList />
  </div>
  <BasicWorkflow /> 
  <CardMeaning />
</>