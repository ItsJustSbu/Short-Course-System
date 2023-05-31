import { render, screen } from '@testing-library/react';
import CreatedQuizes from '../components/CreatedQuizes';
import '@testing-library/jest-dom';

describe('CreatedQuizes', () => {
  test('renders quizzes', () => {
    render(<CreatedQuizes />);
    
    // Assert that the quizzes are rendered correctly
    expect(screen.getByText('Quizzes')).toBeInTheDocument();
    expect(screen.getByText('Quiz 1')).toBeInTheDocument();
    expect(screen.getByText('A quiz is a fun and interactive way to test your knowledge on a particular topic. OpenMP (Open Multi-Processing) is an application programming interface (API) that enables parallel programming on shared memory multiprocessing architectures.')).toBeInTheDocument();
    expect(screen.getByText('Quiz 2')).toBeInTheDocument();
    expect(screen.getByText('A quiz is a fun and interactive way to test your knowledge on a particular topic. OpenMP (Open Multi-Processing) is an application programming interface (API) that enables parallel programming on shared memory multiprocessing architectures.')).toBeInTheDocument();
  });

  test('renders continue button for each quiz', () => {
    render(<CreatedQuizes />);
    
    // Assert that the continue button is rendered for each quiz
    const continueButtons = screen.getAllByText('Continue to quiz');
    expect(continueButtons.length).toBe(2);
  });
});
