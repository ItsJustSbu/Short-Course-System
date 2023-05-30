import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import LoginComponent from '../components/LoginComponent';

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {
    ...originalModule,
    useNavigate: jest.fn(),
  };
});

describe('LoginComponent', () => {
  test('should handle user registration click', () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    render(
      <Router>
        <LoginComponent />
      </Router>
    );

    // const registerButton = screen.getByTestId("Button");
    fireEvent.click(screen.getByTestId("Button"));

    expect(mockNavigate).toHaveBeenCalledWith('/register', { replace: true });
  });
  
});

