import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import LoginComponent from '../components/LoginComponent';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

jest.mock('../firebase/firebase.js', () => ({
  __esModule: true,
  default: {
    auth: jest.fn(),
  },
}));

jest.mock('firebase/auth', () => ({
  __esModule: true,
  getAuth: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
  fetchSignInMethodsForEmail: jest.fn(),
}));

describe('LoginComponent', () => {
  beforeEach(() => {
    useNavigate.mockClear();
    jest.clearAllMocks();
  });

  test('handles form submission', async () => {
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);

    render(
      <MemoryRouter>
        <LoginComponent />
      </MemoryRouter>
    );

    // Mock user input
    const emailInput = screen.getByTestId('Email');
    const passwordInput = screen.getByTestId('Password');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    // Mock API response for fetchSignInMethodsForEmail
    const mockFetchSignInMethodsForEmail = jest.fn().mockResolvedValue([]);
    global.fetchSignInMethodsForEmail = mockFetchSignInMethodsForEmail;

    // Mock API response for signInWithEmailAndPassword
    const mockSignInWithEmailAndPassword = jest.fn().mockResolvedValue({});
    global.signInWithEmailAndPassword = mockSignInWithEmailAndPassword;

    // Submit the form
    fireEvent.submit(screen.getByTestId('LoginButton'));

    // Assertions
    expect(mockFetchSignInMethodsForEmail).toHaveBeenCalledWith('test@example.com');
    expect(mockSignInWithEmailAndPassword).toHaveBeenCalledWith(expect.any(Object), 'test@example.com', 'password123');
    // expect(navigateMock).toHaveBeenCalledWith('/home', { replace: true });
  });
});
