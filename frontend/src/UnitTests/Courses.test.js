import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Courses from '../page/Courses';
import '@testing-library/jest-dom';


describe('Courses', () => {

    window.HTMLElement.prototype.scrollIntoView = function() {};

  test('renders course list', () => {
    render(<BrowserRouter>
        <Courses />
      </BrowserRouter>);
    
    // Assert that the course list is rendered
    const courseElements = screen.getAllByTestId('course');
    expect(courseElements.length).toBe(2);
    
    // Assert that each course has the correct name and description
    const courseNames = screen.getAllByTestId('course-name');
    expect(courseNames[0]).toHaveTextContent('Intro to Ergonomics');
    expect(courseNames[1]).toHaveTextContent('Intro to Ergonomics+');
    
    const courseDescriptions = screen.getAllByTestId('course-description');
    expect(courseDescriptions[0]).toHaveTextContent('First Course');
    expect(courseDescriptions[1]).toHaveTextContent("Second Course with a passionate smile that asks the important question of what's in the box, what is what's in the box worth?");
  });
  
//   test('navigates to AddCourse page when add button is clicked', () => {
//     // Mock the useNavigate function
//     const navigateMock = jest.fn();
//     jest.mock('react-router-dom', () => ({
//       ...jest.requireActual('react-router-dom'),
//       useNavigate: () => navigateMock,
//     }));
    
//     render(<Courses />);
    
//     // Simulate clicking the add button
//     const addButton = screen.getByTestId('add-button');
//     addButton.click();
    
//     // Assert that the navigate function is called with the correct path
//     expect(navigateMock).toHaveBeenCalledWith('/AddCourse');
//   });
});