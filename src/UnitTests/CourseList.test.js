import { render, screen } from '@testing-library/react';
import CourseList from '../components/CourseList';

describe('CourseList', () => {
  test('renders list of courses', () => {
    render(<CourseList />);
    const courseNames = screen.getAllByText(/Intro to Ergonomics/i);
    expect(courseNames.length).toBe(6);
  });

  test('navigates to lesson on button click', () => {
    const mockNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
      useNavigate: () => mockNavigate,
    }));

    render(<CourseList />);
    const continueButton = screen.getByText(/Continue/i);
    continueButton.click();
    expect(mockNavigate).toHaveBeenCalledWith('/lesson');
  });
});