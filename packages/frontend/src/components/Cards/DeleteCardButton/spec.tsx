import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';

import DeleteCard  from './index';

afterEach(() => cleanup());

describe('DeleteCard', () => {
  test('renders DeleteCard component', () => {
    render(<DeleteCard />);

    expect(screen.getByText('Delete Card')).toBeInTheDocument();
  }); 
}); 