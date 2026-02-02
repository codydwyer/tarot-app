import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';

import CreateCard  from './index';

afterEach(() => cleanup());

describe('CreateCard', () => {
  test('renders CreateCard component', () => {
    render(<CreateCard />);

    expect(screen.getByText('Create Card')).toBeInTheDocument();
  }); 
}); 