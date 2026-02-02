import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';

import CreateDeck  from './index';

afterEach(() => cleanup());

describe('CreateDeck', () => {
  test('renders CreateDeck component', () => {
    render(<CreateDeck />);

    expect(screen.getByText('Create Deck')).toBeInTheDocument();
  }); 
}); 