import { render, screen } from '@testing-library/react';
import RegisterForm from './RegisterForm';

test('renders learn react link', () => {
  render(<RegisterForm />);
  const linkElement = screen.getByText(/course/i);
  expect(linkElement).toBeInTheDocument();
});
