import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';

import EditCard  from './index';

afterEach(() => cleanup());

describe('EditCard', () => {
  test('renders EditCard component', () => {
    render(<EditCard />);

    expect(screen.getByText('Edit Card')).toBeInTheDocument();
  }); 
}); 