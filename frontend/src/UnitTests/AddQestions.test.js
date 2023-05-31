import React from 'react';
import { render } from '@testing-library/react';
import AddQestions from '../components/AddQestions';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('AddQuestions component', () => {
    window.HTMLElement.prototype.scrollIntoView = function() {};
  it('should render the correct number of quiz questions', () => {
    const { getAllByTestId } = render(<BrowserRouter><AddQestions /></BrowserRouter>);
    const questionElements = getAllByTestId('quiz-question');
    
    // Assert that the number of rendered questions matches the number of questions in the array
    expect(questionElements.length).toEqual(quiz_questions.length);
  });
});
