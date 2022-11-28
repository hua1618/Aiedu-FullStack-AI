import { render, screen } from '@testing-library/react';
import CourseInfo from './CourseInfo';

test('renders learn react link', () => {
  render(<CourseInfo />);
  const linkElement = screen.getByText(/course/i);
  expect(linkElement).toBeInTheDocument();
});
