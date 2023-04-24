import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./Counter";

describe("User Events test", () => {
  test("renders correctly", () => {
    render(<Counter />);

    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const buttonElement = screen.getByRole("button", {
      name: "Increment",
    });
    expect(buttonElement).toBeInTheDocument();
  });

  test("Renders a count of 0", () => {
    render(<Counter />);

    const counterElement = screen.getByRole("heading");

    expect(counterElement).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking the increment button", async () => {
    user.setup();

    render(<Counter />);

    const buttonElement = screen.getByRole("button", {
      name: "Increment",
    });

    await user.click(buttonElement);

    const counterElement = screen.getByRole("heading");
    expect(counterElement).toHaveTextContent("1");
  });

  test("renders a count of 2 after clicking two times in the increment button", async () => {
    user.setup();

    render(<Counter />);

    const buttonElement = screen.getByRole("button", {
      name: "Increment",
    });

    await user.dblClick(buttonElement);

    const counterElement = screen.getByRole("heading");
    expect(counterElement).toHaveTextContent("2");
  });

  test("render a count of 10 after clicking the set button", async () => {
    user.setup();
    render(<Counter />);

    const inputElement = screen.getByRole("spinbutton");

    await user.type(inputElement, "10");

    const setButtonElement = screen.getByRole("button", {
      name: "set",
    });

    await user.click(setButtonElement);

    const counterElement = screen.getByRole("heading");

    expect(inputElement).toHaveValue(10);
    expect(counterElement).toHaveTextContent("10");
  });

  test("Correctly focus order", async () => {
    user.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const inputElement = screen.getByRole("spinbutton");
    const setButtonElement = screen.getByRole("button", {
      name: "set",
    });

    await user.tab();
    expect(incrementButton).toHaveFocus();

    await user.tab();
    expect(inputElement).toHaveFocus();

    await user.tab();
    expect(setButtonElement).toHaveFocus();
  });
});
