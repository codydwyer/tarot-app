import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';

import CardMeaning  from './index';

afterEach(() => cleanup());

describe('CardMeaning', () => {
  test('renders CardMeaning component', () => {
    render(<CardMeaning />);

    expect(screen.getByText('Card Meaning')).toBeInTheDocument();
  }); 
}); 