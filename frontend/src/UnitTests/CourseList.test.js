import { render, screen, fireEvent } from '@testing-library/react';
import CourseList from '../components/CourseList';
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

describe('CourseList', () => {
  test('renders list of courses', () => {
    render(<BrowserRouter><CourseList /></BrowserRouter>);
    
    // Assert that all course names are rendered
    expect(screen.getByText('Intro to Ergonomics')).toBeInTheDocument();
  });

  test('calls navigate when continue button is clicked', () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);
    
    render(<BrowserRouter><CourseList /></BrowserRouter>);
    
    // Simulate a click on the continue button
    fireEvent.click(screen.getByText('Continue'));
    
    // Assert that navigate was called with the correct path
    expect(mockNavigate).toHaveBeenCalledWith('/lesson');
  });
});
