import { render, screen } from '@testing-library/react';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';

test('renders learn react link', () => {
  render(<Home />, {wrapper:BrowserRouter});
  const linkElement = screen.getByText(/course/i);
  expect(linkElement).toBeInTheDocument();
});
