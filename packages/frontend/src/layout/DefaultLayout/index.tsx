import type { ReactElement, ReactNode } from 'react';
import Footer from '@layout/Footer';
import Header from '@layout/Header';
import Main from '@layout/Main';

import './styles.css';

type DefaultLayoutProps = {
  children: ReactNode;
}

export default (props: DefaultLayoutProps):ReactElement => <>
  <Header />
  <Main>{props.children}</Main >
  <Footer />
</>