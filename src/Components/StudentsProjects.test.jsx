import { render, screen } from '@testing-library/react';
import StudentsProjects from './StudentsProjects';
import { BrowserRouter } from 'react-router-dom';


test('renders learn react link', () => {
  render(< StudentsProjects/>, {wrapper:BrowserRouter});
  const linkElement = screen.getByText(/Students/i);
  expect(linkElement).toBeInTheDocument();
});
