import { type ReactElement } from 'react';
import './CardItem.style.css';

export type Card = {
  id: string;
  arcana: string;
  image: string;
  name: string;
  number: number;
  suit: string;
};

export default ({ card }: { card: Card }):ReactElement => {
  const { id, image, name } = card;

  return <div className='card' id={`card-${id}`}>
    <img src={`assets/cards/${image}`} alt={name} />
  </div>
}