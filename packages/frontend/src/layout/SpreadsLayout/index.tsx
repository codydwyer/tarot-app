import type { ReactElement } from 'react';
import { SpreadList } from '@components/index';
import DefaultLayout from '@layout/DefaultLayout';

export default ():ReactElement => <DefaultLayout>
  Spreads
    <SpreadList />
</DefaultLayout>