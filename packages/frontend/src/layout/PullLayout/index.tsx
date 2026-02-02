import type { ReactElement } from 'react';
import { BasicWorkflow } from '@components/index';
import DefaultLayout from '@layout/DefaultLayout';

export default ():ReactElement => <DefaultLayout>
  <h1>Pull Cards</h1>
    <BasicWorkflow /> 
</DefaultLayout>