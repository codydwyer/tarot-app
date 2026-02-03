import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';

import DeleteTheme  from './index';

afterEach(() => cleanup());

describe('DeleteTheme', () => {
  test('renders DeleteTheme component', () => {
    render(<DeleteTheme />);

    expect(screen.getByText('Delete Theme')).toBeInTheDocument();
  }); 
}); 