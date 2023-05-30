import React from "react";
import { screen, render } from "@testing-library/react";
import Home from '../Home';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';



describe("Home", () => {
    window.HTMLElement.prototype.scrollIntoView = function() {};

  test("renders Navbar component", () => {
    const { getByTestId } = render(<BrowserRouter><Home/></BrowserRouter>);

    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });
});