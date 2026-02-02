import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';

import HomeLayout  from './index';

afterEach(() => cleanup());

describe('HomeLayout', () => {
  test('renders HomeLayout component', () => {
    render(<HomeLayout />);

    expect(screen.getByText('Home')).toBeInTheDocument();
  }); 
}); 