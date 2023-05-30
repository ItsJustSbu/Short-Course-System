import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CoursesGrid from "./CoursesGrid";
import '@testing-library/jest-dom';

describe("CoursesGrid", () => {
  test("renders CoursesGrid component", () => {
    const navigateMock = jest.fn();
    const useContextMock = jest.spyOn(React, "useContext");
    useContextMock.mockReturnValue({ user: null });

    const { getByText, getByAltText } = render(
      <MemoryRouter>
        <CoursesGrid />
      </MemoryRouter>
    );

    // Check if product names are rendered
    expect(getByText("Introduction to React.js")).toBeInTheDocument();

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
