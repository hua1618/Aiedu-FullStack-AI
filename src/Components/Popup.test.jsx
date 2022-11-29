import { render, screen } from '@testing-library/react';
import Popup from './Popup';
import { BrowserRouter } from 'react-router-dom';



const course = {course_name: 'JavaScript 1'}

test('renders learn react link', () => {
  render(<Popup trigger={true} course={course} />, {wrapper:BrowserRouter});
  const linkElement = screen.getByRole('button',{name: /Close/i});
  expect(linkElement).toBeInTheDocument();
});
