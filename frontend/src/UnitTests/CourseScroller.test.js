import { render, screen } from '@testing-library/react';
import CourseScroller from '../components/CourseScroller';
import '@testing-library/jest-dom';

describe('CourseScroller', () => {
  test('renders course information', () => {
    render(<CourseScroller />);
    
    // Assert that the course information is rendered correctly
    expect(screen.getByText('What will you learn?')).toBeInTheDocument();
    expect(screen.getByText('Computer Organisation')).toBeInTheDocument();
    expect(screen.getByText('Who this course is for')).toBeInTheDocument();
    expect(screen.getByText('Office workers, students, small/home business workers, and administrators would want to improve their productivity.')).toBeInTheDocument();
    expect(screen.getByText('Requirements')).toBeInTheDocument();
    expect(screen.getByText('No programming experience is required')).toBeInTheDocument();
  });
});
