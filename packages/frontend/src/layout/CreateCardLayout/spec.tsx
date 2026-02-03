import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';

import CreateCardLayout  from './index';

afterEach(() => cleanup());

describe('CreateCardLayout', () => {
  test('renders CreateCardLayout component', () => {
    render(<CreateCardLayout />);

    expect(screen.getByText('Create Card')).toBeInTheDocument();
  }); 
}); 