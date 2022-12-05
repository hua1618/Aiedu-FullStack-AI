import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookingForm from './BookingForm';


const course = { course_name: 'JavaScript 1' }
test('renders learn react link', () => {
  render(<BookingForm course={course} />, { wrapper: BrowserRouter });
  const linkElement = screen.getByText(/Course Name:/i);
  expect(linkElement).toBeInTheDocument();
});
