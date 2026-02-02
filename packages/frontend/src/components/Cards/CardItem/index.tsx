import { type ReactElement } from 'react';
import './styles.css';

export type Card = {
  id: string;
  name?: string;
  arcana?: string;
  image?: string;
  number?: number;
  suit?: string;
};

export default ({ card }: { card: Card }):ReactElement => {
  const { id, image, name } = card;

  return <div className='card' id={`card-${id}`}>
    <img src={`assets/cards/${image}`} alt={name} />
  </div>
}