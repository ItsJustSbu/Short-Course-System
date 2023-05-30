import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import RegistrationComponent from '../components/RegistrationComponent';

// Mock the createUserWithEmailAndPassword function
jest.mock('firebase/auth', () => ({
  __esModule: true,
  getAuth: jest.fn(),
  createUserWithEmailAndPassword: jest.fn(),
}));

describe('RegistrationComponent', () => {
  test('should handle form submission successfully', async () => {
    // Set up the mock implementations for createUserWithEmailAndPassword
    const createUserWithEmailAndPasswordMock = jest.fn().mockResolvedValue({ user: { uid: 'test-uid' } });
    getAuth.mockReturnValue({ createUserWithEmailAndPassword: createUserWithEmailAndPasswordMock });

    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<RegistrationComponent />} />
          <Route path="/home" element={<div>Welcome to the home page</div>} />
        </Routes>
      </MemoryRouter>
    );

    // Fill in the form fields
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByTestId('Email'), { target: { value: 'johndoe@example.com' } });
    fireEvent.change(screen.getByTestId('Password'), { target: { value: 'password123' } });
    fireEvent.change(screen.getByTestId('CPassword'), { target: { value: 'password123' } });

    // Trigger the form submission
    fireEvent.click(screen.getByText('Register'));

    // Wait for the registration process to complete
    await waitFor(() => expect(createUserWithEmailAndPasswordMock).toHaveBeenCalledTimes(1));

    // Perform assertions on the resulting behavior, e.g., navigating to the home page
    expect(screen.getByText('Welcome to the home page')).toBeInTheDocument();
  });

  // Add more test cases as needed for other scenarios and functionalities
});
