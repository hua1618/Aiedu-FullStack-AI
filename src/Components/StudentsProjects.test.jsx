import { render, screen } from '@testing-library/react';
import StudentsProjects from './StudentsProjects';

test('renders learn react link', () => {
  render(< StudentsProjects/>);
  const linkElement = screen.getByText(/course/i);
  expect(linkElement).toBeInTheDocument();
});
