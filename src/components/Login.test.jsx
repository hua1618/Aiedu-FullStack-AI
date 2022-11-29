import { render, screen } from '@testing-library/react';
import Login from './Login';
import { BrowserRouter } from 'react-router-dom';


test('renders learn react link', () => {
  render(<Login />, {wrapper:BrowserRouter});
  const linkElement = screen.getByText(/marketing/i);
  expect(linkElement).toBeInTheDocument();
});
