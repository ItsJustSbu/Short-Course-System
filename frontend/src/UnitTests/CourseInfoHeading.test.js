import { render, screen, fireEvent } from '@testing-library/react';
import CourseInfoHeading from '../components/CourseInfoHeading';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import '@testing-library/jest-dom';

// Mock the useNavigate hook
jest.mock('react-router-dom', () => {
    const originalModule = jest.requireActual('react-router-dom');
    return {
      ...originalModule,
      useNavigate: jest.fn(),
    };
});

describe('CourseInfoHeading', () => {
  test('renders course information', () => {
    render(<CourseInfoHeading state={123} />);
    
    // Assert that course information is rendered correctly
    expect(screen.getByText('Introduction to Ergonomics')).toBeInTheDocument();
    expect(screen.getByText('Michael Mkhize')).toBeInTheDocument();
    expect(screen.getByText('Become a Python Programmer and learn')).toBeInTheDocument();
  });

  test('calls navigate when enroll button is clicked', () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);
    
    render(<BrowserRouter><CourseInfoHeading state={123} /></BrowserRouter>);
    
    // Simulate a click on the enroll button
    fireEvent.click(screen.getByText('Enroll'));
    
    // Assert that navigate was called with the correct path and state
    expect(mockNavigate).toHaveBeenCalledWith('/course-info', { state: 123 });
  });
});
