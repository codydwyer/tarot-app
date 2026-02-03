import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';

import DeleteSpread  from './index';

afterEach(() => cleanup());

describe('DeleteSpread', () => {
  test('renders DeleteSpread component', () => {
    render(<DeleteSpread />);

    expect(screen.getByText('Delete Spread')).toBeInTheDocument();
  }); 
}); 