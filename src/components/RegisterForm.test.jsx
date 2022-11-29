import { render, screen } from '@testing-library/react';
import RegisterForm from './RegisterForm';
import { BrowserRouter } from 'react-router-dom';



test('renders learn react link', () => {
  render(<RegisterForm />,{wrapper:BrowserRouter});
  const linkElement = screen.getByText(/Form/i);
  expect(linkElement).toBeInTheDocument();
});
