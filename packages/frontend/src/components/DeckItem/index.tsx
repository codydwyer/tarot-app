import { type ReactElement } from 'react';
import { type Card } from '@components/CardItem';
import './styles.css'

export type Deck = {
  id: string;
  name: string;
  description: string;
  cards: Card[];
}

export default ({ deck }: { deck: Deck}):ReactElement =>{
  const { id, name, description, cards } = deck;

  return <div className='deck-item' id={`deck-${id}`}>
    <h2>{name}</h2>
    <p>{description}</p>
    <p>Cards: {cards.length}</p>
  </div>
}