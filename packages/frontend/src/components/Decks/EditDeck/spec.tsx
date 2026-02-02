import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';

import EditDeck  from './index';

afterEach(() => cleanup());

describe('EditDeck', () => {
  test('renders EditDeck component', () => {
    render(<EditDeck />);

    expect(screen.getByText('Edit Deck')).toBeInTheDocument();
  }); 
}); 