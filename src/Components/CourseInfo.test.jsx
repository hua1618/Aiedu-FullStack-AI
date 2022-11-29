import { render, screen } from '@testing-library/react';
import CourseInfo from './CourseInfo';
import { BrowserRouter } from 'react-router-dom';


const course = {course_name: 'JavaScript 1'}

test('renders learn react link', () => {
  render(<CourseInfo course={course} />, {wrapper:BrowserRouter});
  const linkElement = screen.getByText(/Details/i);
  expect(linkElement).toBeInTheDocument();
});
