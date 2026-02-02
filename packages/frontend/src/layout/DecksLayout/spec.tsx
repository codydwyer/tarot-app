import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';

import DecksLayout  from './index';

afterEach(() => cleanup());

describe('DecksLayout', () => {
  test('renders DecksLayout component', () => {
    render(<DecksLayout />);

    expect(screen.getByText('Decks')).toBeInTheDocument();
  }); 
}); 