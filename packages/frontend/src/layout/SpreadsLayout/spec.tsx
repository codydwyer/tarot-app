import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';

import SpreadsLayout  from './index';

afterEach(() => cleanup());

describe('SpreadsLayout', () => {
  test('renders SpreadsLayout component', () => {
    render(<SpreadsLayout />);

    expect(screen.getByText('Spreads')).toBeInTheDocument();
  }); 
}); 