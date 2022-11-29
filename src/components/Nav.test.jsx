import { render, screen } from '@testing-library/react';
import Nav from './Nav';
import { BrowserRouter } from 'react-router-dom';


test('renders learn react link', () => {
  render(<Nav />, {wrapper:BrowserRouter});
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
