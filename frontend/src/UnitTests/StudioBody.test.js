import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useNavigate, Router, Route, BrowserRouter } from 'react-router-dom';
import StudioBody from '../components/StudioBody';
import CreaterStudio from "../page/CreaterStudio";

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {
    ...originalModule,
    useNavigate: jest.fn(),
  };
});


describe('StudioBody', () => {

    window.HTMLElement.prototype.scrollIntoView = function() {};


  test('renders Add Course button', () => {
    render(
      <BrowserRouter>
        <StudioBody />
      </BrowserRouter>
    );

    const addButton = screen.getByRole('button', { name: /add course/i });
    expect(addButton).toBeInTheDocument();
  });

  //not sure what's up with this tbh
  test('navigates to AddCourse page when Add Course button is clicked', () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    render(
     <BrowserRouter>
       <StudioBody />
     </BrowserRouter>
    );

    const addButton = screen.getByRole('button', { name: /add course/i });
    fireEvent.click(addButton);

    expect(mockNavigate).toHaveBeenCalledWith('/AddCourse');
  });

  test('renders My Courses section', () => {
    render(
      <BrowserRouter>
        <StudioBody />
      </BrowserRouter>
    );

    const myCoursesTitle = screen.getByText(/my courses/i);
    expect(myCoursesTitle).toBeInTheDocument();

    const courseNames = screen.getAllByText(/intro to ergonomics/i);
    expect(courseNames.length).toBe(3);
  });

  
  test('renders view all courses button', () => {
    render(
      <BrowserRouter>
        <StudioBody />
      </BrowserRouter>
    );

    const allCourseButton = screen.getByRole('button', { name: /view all courses/i });
    expect(allCourseButton).toBeInTheDocument();
  });

  test('navigates to Courses page when view all courses button is clicked', () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    render(
     <BrowserRouter>
       <StudioBody />
     </BrowserRouter>
    );

    const Courses = screen.getByRole('button', { name: /view all courses/i });
    fireEvent.click(Courses);

    expect(mockNavigate).toHaveBeenCalledWith('/Courses');
  });

  //Reminder to all a unit test for all the intro to argo thingies
  test('renders creator analytics section', () => {
    render(
        <BrowserRouter>
            <StudioBody/>
        </BrowserRouter>
    );

    const creatorAnalyticsTitle = screen.getByText(/creater analytics/i);
    expect(creatorAnalyticsTitle).toBeInTheDocument();

    //Dunno what's up here either
    // const chartElement = screen.getByRole('Chart', { name : /This is a Chart/i});
    // expect(chartElement).toBeInTheDocument;

    const viewAnalyticsButton = screen.getByRole('button', { name: /view analytics/i });
    expect(viewAnalyticsButton).toBeInTheDocument();

    });


});