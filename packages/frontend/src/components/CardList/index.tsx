import { type ReactElement, useState } from 'react';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';
import CardItem, { type Card } from '@components/CardItem';
import './styles.css'

const GET_CARDS = gql`
  query GetCards {
    cards {
      id
      arcana
      image
      name
      number
      suit
    }
  }
`;

export type CardsData = {
  cards: Card[];
};

export default ():ReactElement => {
  const [ showing, setShowing ] = useState<boolean>(false);
  const { loading, error, data } = useQuery(GET_CARDS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  return <>
    <h2>Card List <button onClick={() => setShowing(!showing)}>{showing ? 'Hide' : 'Show'}</button></h2>   
    {showing && (<div>{data as CardsData && data.cards.map((card: Card) => (
      <CardItem key={card.id} card={card} />
    ))}</div>)}   
  </>
}