import { render, screen } from '@testing-library/react';
import Details from './Details';

test('renders learn react link', () => {
  render(<Details />);
  const linkElement = screen.getByText(/course/i);
  expect(linkElement).toBeInTheDocument();
});
