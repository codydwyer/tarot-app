import type { ReactElement, ReactNode } from 'react';
import './styles.css';

type MainProps = {
  children: ReactNode;
}

export default (props: MainProps):ReactElement => <main>
  {props.children}
</main>;