import { render, fireEvent } from "@testing-library/react";
import MFAForm from "../../../components/mfa-form/mfa-form";

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

describe("MFAForm component", () => {
  it("should call onHandleBack when the back button is clicked", () => {
    const onHandleBack = jest.fn();
    const { getByTestId } = render(
      <MFAForm
        inputs={{}}
        onHandleChange={() => {}}
        onHandleSubmit={() => {}}
        onHandleBack={onHandleBack}
      />
    );
    fireEvent.click(getByTestId("back-button"));
    expect(onHandleBack).toHaveBeenCalled();
  });
});

describe("MFAForm component submit", () => {
  it("should call onHandleSubmit when the form is submitted", () => {
    const onHandleSubmit = jest.fn();
    const { getByTestId } = render(
      <MFAForm
        inputs={{}}
        onHandleChange={() => {}}
        onHandleSubmit={onHandleSubmit}
        onHandleBack={() => {}}
      />
    );
    const form = getByTestId("add-mfa-form");
    fireEvent.submit(form);
    expect(onHandleSubmit).toHaveBeenCalled();
  });
});
