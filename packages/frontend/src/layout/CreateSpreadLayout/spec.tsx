import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';

import CreateSpreadLayout  from './index';

afterEach(() => cleanup());

describe('CreateSpreadLayout', () => {
  test('renders CreateSpreadLayout component', () => {
    render(<CreateSpreadLayout />);

    expect(screen.getByText('Create Spread')).toBeInTheDocument();
  }); 
}); 