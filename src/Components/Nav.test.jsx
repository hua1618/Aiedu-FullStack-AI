import { render, screen } from '@testing-library/react';
import Nav from './Nav';

test('renders learn react link', () => {
  render(<Nav />);
  const linkElement = screen.getByText(/course/i);
  expect(linkElement).toBeInTheDocument();
});
