import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import LessonList from '../components/LessonList';

jest.mock('react-router-dom', () => {
    const originalModule = jest.requireActual('react-router-dom');
    return {
      ...originalModule,
      useNavigate: jest.fn(),
    };
  });

  const lessons = [
    {
        name: 'Lesson 1',
        description: "Become a Python Programmer and learn one of employer's most requested skills of 2023! This is the most comprehensive.",
        imageUrl:
      'https://www.kasandbox.org/programming-images/avatars/cs-hopper-cool.png',
        progress: 50   
        

    },
    {
        name: 'Lesson 2',
        description: "Become a Python Programmer and learn one of employer's most requested skills of 2023! This is the most comprehensive.",
        imageUrl:
      'https://www.kasandbox.org/programming-images/avatars/cs-hopper-cool.png',
        progress: 50   
  
    },
    {
        name: 'Lesson 3',
        description: "Become a Python Programmer and learn one of employer's most requested skills of 2023! This is the most comprehensive.",
        imageUrl:
      'https://www.kasandbox.org/programming-images/avatars/cs-hopper-cool.png',
        progress: 50   

    },
    {
        name: 'Lesson 4',
        description: "Become a Python Programmer and learn one of employer's most requested skills of 2023! This is the most comprehensive.",
        imageUrl:
        'https://www.kasandbox.org/programming-images/avatars/cs-hopper-cool.png',
        progress: 50   

    },
    {
        name: 'Lesson 5',
        description: "Become a Python Programmer and learn one of employer's most requested skills of 2023! This is the most comprehensive.",
        imageUrl:
        'https://www.kasandbox.org/programming-images/avatars/cs-hopper-cool.png',
        progress: 50   

    },
    {
        name: 'Lesson 6',
        description: "Become a Python Programmer and learn one of employer's most requested skills of 2023! This is the most comprehensive.",
        imageUrl:
        'https://www.kasandbox.org/programming-images/avatars/cs-hopper-cool.png',
        progress: 50   

    }
]

describe('LessonList component', () => {
    window.HTMLElement.prototype.scrollIntoView = function() {};

  test('renders lesson cards correctly', () => {
    
    render(<LessonList />, { wrapper: MemoryRouter });

    // Verify that lesson cards are rendered
    const lessonCards = screen.getAllByRole('listitem');
    expect(lessonCards).toHaveLength(lessons.length);

    // Verify that lesson names are displayed correctly
    for (let i = 0; i < lessons.length; i++) {
      const lessonName = screen.getByText(lessons[i].name);
      expect(lessonName).toBeInTheDocument();
    }

    // Verify that lesson descriptions are displayed correctly
    for (let i = 0; i < lessons.length; i++) {
      const lessonDescription = screen.getByText(lessons[i].description);
      expect(lessonDescription).toBeInTheDocument();
    }

    // Verify that lesson images are displayed correctly
    const lessonImages = screen.getAllByRole('img');
    expect(lessonImages).toHaveLength(lessons.length);

    // Verify that the "Start lesson" button triggers navigation
    const startLessonButton = screen.getByRole('button', { name: 'Start lesson' });
    fireEvent.click(startLessonButton);
    expect(mockNavigate).toHaveBeenCalledWith('/watch');

    expect(startLessonButton).toBeInTheDocument();

    
    expect(screen.getByText('Watch Lesson')).toBeInTheDocument();

    
  });

  test('Verify that the "Start lesson" button triggers navigation', () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    render(<LessonList />, { wrapper: MemoryRouter });

    const startLessonButton = screen.getByRole('button', { name: 'Start lesson' });
    fireEvent.click(startLessonButton);
    expect(mockNavigate).toHaveBeenCalledWith('/watch');

  });
});
