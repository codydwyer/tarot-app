import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';

import EditSpread  from './index';

afterEach(() => cleanup());

describe('EditSpread', () => {
  test('renders EditSpread component', () => {
    render(<EditSpread />);

    expect(screen.getByText('Edit Spread')).toBeInTheDocument();
  }); 
}); 