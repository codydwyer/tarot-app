import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';

import CreateThemeLayout  from './index';

afterEach(() => cleanup());

describe('CreateThemeLayout', () => {
  test('renders CreateThemeLayout component', () => {
    render(<CreateThemeLayout />);

    expect(screen.getByText('Create Theme')).toBeInTheDocument();
  }); 
}); 