import React from 'react';
import { render,screen } from '@testing-library/react';
import Navbar from '../components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';


test('renders navbar with correct navigation items', () => {

    window.HTMLElement.prototype.scrollIntoView = function() {};

    render(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      );
  
  // Check if the navigation items are rendered

    const homeElement = screen.getByText('Home');
    expect(homeElement).toBeInTheDocument();
    
    const myLearningElement = screen.getByText('My Learning');
    expect(myLearningElement).toBeInTheDocument();

    const portfolioElement = screen.getByText('Portfolio');
    expect(portfolioElement).toBeInTheDocument();

    const studioElement = screen.getByText('Studio');
    expect(studioElement).toBeInTheDocument();

});