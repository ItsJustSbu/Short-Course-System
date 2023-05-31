import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavItem from "../components/NavItem";
import '@testing-library/jest-dom';


describe("NavItem", () => {
  test("renders the icon and text correctly", () => {
    const svg = "/path/to/icon.svg";
    const text = "Home";
    const link = "/";

    render(
      <MemoryRouter>
        <NavItem svg={svg} text={text} link={link} />
      </MemoryRouter>
    );

    const icon = screen.getByAltText(text);
    expect(icon).toBeInTheDocument();

    const textElement = screen.getByText(text);
    expect(textElement).toBeInTheDocument();
  });

  test("does not render the text when not provided", () => {
    const svg = "/path/to/icon.svg";
    const link = "/";

    render(
      <MemoryRouter>
        <NavItem svg={svg} link={link} />
      </MemoryRouter>
    );

    const textElement = screen.queryByText("");
    expect(textElement).toBeNull();
  });

  test("navigates to the correct link when clicked", () => {
    const svg = "/path/to/icon.svg";
    const text = "Home";
    const link = "/";

    render(
      <MemoryRouter>
        <NavItem svg={svg} text={text} link={link} />
      </MemoryRouter>
    );

    const navItem = screen.getByText(text);
    expect(navItem.closest("a")).toHaveAttribute("href", link);
  });
});
