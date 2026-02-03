import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';

import EditTheme  from './index';

afterEach(() => cleanup());

describe('EditTheme', () => {
  test('renders EditTheme component', () => {
    render(<EditTheme />);

    expect(screen.getByText('Edit Theme')).toBeInTheDocument();
  }); 
}); 