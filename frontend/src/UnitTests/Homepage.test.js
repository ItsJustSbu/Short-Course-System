import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Homepage from '../page/VideoPage';


describe('VideoPage', () => {

  window.HTMLElement.prototype.scrollIntoView = function() {};
  
  it('renders an iframe element with the correct video source', () => {
    render(<Homepage />);
    const iframeElement = screen.getByTitle('This is a video');
    expect(iframeElement).toBeInTheDocument();
    expect(iframeElement).toHaveAttribute('src', 'https://www.youtube.com/embed/dQw4w9WgXcQ');
  });

  it('renders a textarea element for taking notes', () => {
    render(<Homepage />);
    const textareaElement = screen.getByPlaceholderText('Write your notes here...');
    expect(textareaElement).toBeInTheDocument();
    expect(textareaElement.tagName).toBe('TEXTAREA');
  });

  it('has a save button for saving notes', () => {
    render(<Homepage />);
    const saveButtonElement = screen.getByText('Save');
    expect(saveButtonElement).toBeInTheDocument();
    expect(saveButtonElement.tagName).toBe('BUTTON');
  });
});