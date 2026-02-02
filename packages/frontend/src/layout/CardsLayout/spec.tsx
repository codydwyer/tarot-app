import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';

import CardsLayout  from './index';

afterEach(() => cleanup());

describe('CardsLayout', () => {
  test('renders CardsLayout component', () => {
    render(<CardsLayout />);

    expect(screen.getByText('Cards')).toBeInTheDocument();
  }); 
}); 