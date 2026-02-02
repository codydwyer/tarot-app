import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';

import PullLayout  from './index';

afterEach(() => cleanup());

describe('PullLayout', () => {
  test('renders PullLayout component', () => {
    render(<PullLayout />);

    expect(screen.getByText('Pull Cards')).toBeInTheDocument();
  }); 
}); 