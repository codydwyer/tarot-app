import type { ReactElement } from 'react';
import { BasicWorkflow } from '@components/index';
import DefaultLayout from '@layout/DefaultLayout';

export default ():ReactElement => <DefaultLayout>
  Pull
    <BasicWorkflow /> 
</DefaultLayout>