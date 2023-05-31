import React from 'react';
import { render, screen } from '@testing-library/react';
import AddCourse from '../page/AddCourse';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

test('renders AddCourse component', () => {

    window.HTMLElement.prototype.scrollIntoView = function() {};
//ter
  render(
    <BrowserRouter>
        <AddCourse/>
    </BrowserRouter>
  )

  // Assert that the component renders without errors
  expect(screen.getByText('Edit Course')).toBeInTheDocument();
  expect(screen.getByText('What will you call this Course?')).toBeInTheDocument();
  expect(screen.getByText('What will students learn from your course?')).toBeInTheDocument();
  expect(screen.getByText('What are the prerequisites for taking this course?')).toBeInTheDocument();
  expect(screen.getByText('Who this course is for?')).toBeInTheDocument();
  expect(screen.getByText('What will the thumbnail be?')).toBeInTheDocument();
  expect(screen.getByText('Attach Lessons')).toBeInTheDocument();
  expect(screen.getByText('Save')).toBeInTheDocument();
});