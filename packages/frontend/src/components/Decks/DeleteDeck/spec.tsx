import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';

import DeleteDeck  from './index';

afterEach(() => cleanup());

describe('DeleteDeck', () => {
  test('renders DeleteDeck component', () => {
    render(<DeleteDeck />);

    expect(screen.getByText('Delete Deck')).toBeInTheDocument();
  }); 
}); 