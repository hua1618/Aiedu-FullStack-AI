import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders learn react link', () => {
  render(<BookingForm />);
  const linkElement = screen.getByText(/course/i);
  expect(linkElement).toBeInTheDocument();
});
