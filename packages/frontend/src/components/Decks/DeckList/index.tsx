import { type ReactElement, useState } from 'react';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';
import DeckItem, { type Deck } from '../DeckItem';
import './styles.css'

const GET_DECKS = gql`
query GetDecks {
  decks {
    id
    name
    description
    cards {
      id
      name
    }
  }
}
`;

export type DecksData = {
  decks: Deck[];
};

export default ():ReactElement =>{
  const [ showing, setShowing ] = useState<boolean>(false);
  const { loading, error, data } = useQuery(GET_DECKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  return <>
    <h2>Deck List <button onClick={() => setShowing(!showing)}>{showing ? 'Hide' : 'Show'}</button></h2>   
    {showing && (<div>{data as DecksData && data.decks.map((deck: Deck) => (
      <DeckItem key={deck.id} deck={deck} />
    ))}</div>)}    
  </>
}