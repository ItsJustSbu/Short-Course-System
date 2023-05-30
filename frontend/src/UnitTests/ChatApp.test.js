import React from 'react';
import { render, screen } from '@testing-library/react';
import ChatApp from '../page/ChatApp';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

// describe('ChatApp', () => {
//     window.HTMLElement.prototype.scrollIntoView = function() {};

//   test('renders the component correctly', () => {
//     render(<BrowserRouter>
//         <ChatApp/>
//     </BrowserRouter>);
    
//     // Assert that the first part is rendered
//     const firstPart = screen.getByText('This is the first part');
//     expect(firstPart).toBeInTheDocument();
    
//     // Assert that the TextFieldComponent is rendered
//     const textFieldComponent = screen.getByTestId('text-field-component');
//     expect(textFieldComponent).toBeInTheDocument();
//   });
// });