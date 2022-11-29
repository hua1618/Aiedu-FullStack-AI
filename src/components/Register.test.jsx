import { render, screen } from '@testing-library/react';
import Register from './Register';
import { BrowserRouter } from 'react-router-dom';


test('renders learn react link', () => {
  render(<Register />, {wrapper:BrowserRouter});
  const linkElement = screen.getByText(/Register/i);
  expect(linkElement).toBeInTheDocument();
});
