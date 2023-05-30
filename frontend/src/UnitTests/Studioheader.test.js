import React from "react";
import { render } from "@testing-library/react";
import { CgProfile } from "react-icons/cg";
import StudioHeader from "../components/StudioHeader";
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';


describe("StudioHeader", () => {
    window.HTMLElement.prototype.scrollIntoView = function() {};
  test("renders StudioHeader component", () => {
    const { getByText, getByTestId } = render(<BrowserRouter><StudioHeader /></BrowserRouter>);

    // Check if the profile icon is rendered
    const profileIcon = getByTestId("profile-icon");
    expect(profileIcon).toBeInTheDocument();
    expect(profileIcon).toHaveClass("text-[250px]");

    // Check if the name and description are rendered
    expect(getByText("Hey, Connel LA Manhica")).toBeInTheDocument();
    expect(getByText("Let's get creating...")).toBeInTheDocument();
  });
});
