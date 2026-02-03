import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';

import CreateDeckLayout  from './index';

afterEach(() => cleanup());

describe('CreateDeckLayout', () => {
  test('renders CreateDeckLayout component', () => {
    render(<CreateDeckLayout />);

    expect(screen.getByText('Create Deck')).toBeInTheDocument();
  }); 
}); 