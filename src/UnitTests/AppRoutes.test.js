import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, createMemoryHistory } from 'react-router-dom';
import App from '../App';

test('renders all routes', () => {
    const history = createMemoryHistory();
    render(
      <MemoryRouter initialEntries={['/', '/register', '/login', '/watch', '/list', '/home','/course-info']}>
        <App history={history} />
      </MemoryRouter>
    );
  
    expect(screen.getByText(/login/i)).toBeInTheDocument();
    expect(screen.getByText(/register/i)).toBeInTheDocument();
    expect(screen.getByText(/login/i)).toBeInTheDocument();
    expect(screen.getByText(/watch/i)).toBeInTheDocument();
    expect(screen.getByText(/list/i)).toBeInTheDocument();
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/course-info/i)).toBeInTheDocument();
  });