import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Studio from '../layouts/Studio';
import '@testing-library/jest-dom';

describe('Studio component', () => {

    window.HTMLElement.prototype.scrollIntoView = function() {};

    it('renders sidebar with correct links and icons', () => {
        render(
            <MemoryRouter>
              <Studio />
            </MemoryRouter>
          );

        expect(screen.getByText('Dashboard')).toBeInTheDocument();
        expect(screen.getByText('Courses')).toBeInTheDocument();
        expect(screen.getByText('Quizzes')).toBeInTheDocument();
        

    });

});