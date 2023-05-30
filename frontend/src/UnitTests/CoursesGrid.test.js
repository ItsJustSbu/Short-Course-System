import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Bro, BrowserRouter, useNavigate } from "react-router-dom";
import CoursesGrid from "../CoursesGrid";
import '@testing-library/jest-dom';

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {
    ...originalModule,
    useNavigate: jest.fn(),
  };
});

describe("CoursesGrid", () => {
  window.HTMLElement.prototype.scrollIntoView = function() {};
  test("renders CoursesGrid component", () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    const { getByText, getByAltText } = render(
        <CoursesGrid />

    );

    // Check if product names are rendered
    expect(getByText("Introduction tonm React.js")).toBeInTheDocument();

    // Check if product colors are rendered
    expect(getByText("Dr Sarah Kapay")).toBeInTheDocument();

    // Check if product prices are rendered
    expect(getByText("$35")).toBeInTheDocument();

    // Simulate a click on the first product item
    const productImage = getByAltText("Front of men's Basic Tee in black.");
    fireEvent.click(productImage);

    // Assert that the desired navigation is triggered
    expect(navigateMock).toHaveBeenCalledWith("/course-info");
  });
});
