import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dashboard from '../page/VideoPage';


describe('VideoPage', () => {

  window.HTMLElement.prototype.scrollIntoView = function() {};
  
  it('renders an iframe element with the correct video source', () => {
    render(<Dashboard />);
    const iframeElement = screen.getByTitle('This is a video');
    expect(iframeElement).toBeInTheDocument();
    expect(iframeElement).toHaveAttribute('src', 'https://www.youtube.com/embed/dQw4w9WgXcQ');
  });

  it('renders a textarea element for taking notes', () => {
    render(<Dashboard />);
    const textareaElement = screen.getByPlaceholderText('Write your notes here...');
    expect(textareaElement).toBeInTheDocument();
    expect(textareaElement.tagName).toBe('TEXTAREA');
  });

  it('has a save button for saving notes', () => {
    render(<Dashboard />);
    const saveButtonElement = screen.getByText('Save');
    expect(saveButtonElement).toBeInTheDocument();
    expect(saveButtonElement.tagName).toBe('BUTON');
  });
});
