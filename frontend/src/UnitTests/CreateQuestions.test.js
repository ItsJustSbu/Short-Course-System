import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Questions from '../components/Questions';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('Questions', () => {
  test('renders questions form', () => {
    render(<Questions />);
    
    // Assert that the form elements are rendered correctly
    expect(screen.getByPlaceholderText('Intro to Ergonomics')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Quiz 1 : Instructions')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your course description')).toBeInTheDocument();
    
    // Assert that the question inputs and answer inputs are rendered correctly
    const questionInputs = screen.getAllByPlaceholderText('Enter your question');
    expect(questionInputs.length).toBe(6);
    
    const answerInputs = screen.getAllByPlaceholderText('Add Answer Option');
    expect(answerInputs.length).toBe(6);
    
    // Assert that the "Save" button is rendered
    expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument();
  });

  test('allows user to enter and save questions', () => {
    render(<Questions />);
    
    // Enter a question
    const questionInput = screen.getAllByPlaceholderText('Enter your question')[0];
    userEvent.type(questionInput, 'What is the meaning of life?');
    
    // Enter answers
    const answerInputs = screen.getAllByPlaceholderText('Add Answer Option');
    userEvent.type(answerInputs[0], '42');
    userEvent.type(answerInputs[1], 'Love');
    
    // Click the "Save" button
    const saveButton = screen.getByRole('button', { name: 'Save' });
    userEvent.click(saveButton);
    
    // Assert that the question and answers are saved correctly
    
  });
});
