import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';

import CreateTheme  from './index';

afterEach(() => cleanup());

describe('CreateTheme', () => {
  test('renders CreateTheme component', () => {
    render(<CreateTheme />);

    expect(screen.getByText('Create Theme')).toBeInTheDocument();
  }); 
}); 