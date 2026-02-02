import type { ReactElement } from 'react';
import { CreateSpread, SpreadList } from '@components/index';
import DefaultLayout from '@layout/DefaultLayout';

export default ():ReactElement => <DefaultLayout>
  <h1>Spreads</h1>
  <SpreadList />
  <CreateSpread />
</DefaultLayout>