import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';

import CreateSpread  from './index';

afterEach(() => cleanup());

describe('CreateSpread', () => {
  test('renders CreateSpread component', () => {
    render(<CreateSpread />);

    expect(screen.getByText('Create Spread')).toBeInTheDocument();
  }); 
}); 