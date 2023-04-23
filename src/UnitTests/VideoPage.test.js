import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import VideoPage from '../page/VideoPage';

describe('VideoPage', () => {
  it('renders an iframe element with the correct video source', () => {
    render(<VideoPage />);
    const iframeElement = screen.getByTitle('This is a video');
    expect(iframeElement).toBeInTheDocument();
    expect(iframeElement).toHaveAttribute('src', 'https://www.youtube.com/embed/dQw4w9WgXcQ');
  });

  it('renders a chat window with the correct title and description', () => {
    render(<VideoPage />);
    const chatWindowTitleElement = screen.getByText('Yes');
    const chatWindowDescriptionElement = screen.getByText('This is supposed to be a chat Window');
    expect(chatWindowTitleElement).toBeInTheDocument();
    expect(chatWindowDescriptionElement).toBeInTheDocument();
  });

  it('renders a textarea element for taking notes', () => {
    render(<VideoPage />);
    const textareaElement = screen.getByPlaceholderText('Write your notes here...');
    expect(textareaElement).toBeInTheDocument();
    expect(textareaElement.tagName).toBe('TEXTAREA');
  });

  it('has a save button for saving notes', () => {
    render(<VideoPage />);
    const saveButtonElement = screen.getByText('Save');
    expect(saveButtonElement).toBeInTheDocument();
    expect(saveButtonElement.tagName).toBe('BUTTON');
  });
});
