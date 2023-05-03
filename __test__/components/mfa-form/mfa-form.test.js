// import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import MFAForm from "../../../src/components/mfa-form/mfa-form";

describe("MFAForm", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<MFAForm />);
    expect(baseElement).toBeTruthy();
  });
  it("should match snapshot", () => {
    const { asFragment } = render(<MFAForm />);
    const firstRender = asFragment();
    expect(firstRender).toMatchSnapshot();
  });
});
