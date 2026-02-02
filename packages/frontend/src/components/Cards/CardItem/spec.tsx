import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';

import CardItem  from './index';

const mockCard = {
  id: '1',
  name: 'The Fool',
  image: 'fool.jpg'
};

afterEach(() => cleanup());

describe('CardItem', () => {
  test('renders CardItem component', () => {
    render(<CardItem card={mockCard} />);

    const cardImage = screen.getByAltText('The Fool');

    expect(cardImage).toBeInTheDocument();
    expect(cardImage).toHaveAttribute('src', 'assets/cards/fool.jpg');
  }); 
}); 