import { render, screen } from '@testing-library/react';
import Register from './Register';

test('renders learn react link', () => {
  render(<Register />);
  const linkElement = screen.getByText(/course/i);
  expect(linkElement).toBeInTheDocument();
});
