import React from 'react';
import { render, screen} from '@testing-library/react';
import HomePage from '../page/HomePage';
import { MemoryRouter } from 'react-router-dom';

test('renders homepage', ()=>{

    render(
    <MemoryRouter>
    <HomePage />
    </MemoryRouter>
    )
    
    const homepage = screen.getByTestId('homepage');
    expect(homepage).toBeInTheDocument();
});