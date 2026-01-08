import { type ReactElement } from 'react';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';

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

export default ():ReactElement => {
  const { loading, error, data } = useQuery(GET_CARDS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  return <>
    <h2>Card List</h2>   
    {data && data.cards.map(({ id, name }: { id: string; name: string }) => (
      <div key={id}>
        <p>{name}</p>
      </div>
    ))}   
  </>
}