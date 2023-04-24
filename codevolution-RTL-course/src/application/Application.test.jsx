import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application Tests", () => {
  test("searchName", () => {
    render(<Application />);

    const nameElement = screen.getByPlaceholderText("Full Name");

    const commentElement = screen.getByRole("textbox", {
      name: "Comment:",
    });

    const mainTittleElement = screen.getByRole("heading", {
      level: 1,
    });

    const sectionHeading = screen.getByRole("heading", {
      level: 2,
    });

    const nameElementTwo = screen.getByLabelText("Name", {
      selector: "input",
    });
    const termsElementTwo = screen.getByLabelText(
      "Eu li e concordo com os termos."
    );

    const paragrafElement = screen.getByText((content) =>
      content.startsWith("All")
    );

    const elementDisplay = screen.getByDisplayValue("calais");

    const altElement = screen.getByAltText("a person eating a hamburguer");

    const customElement = screen.getByTestId("custom-element");

    expect(nameElement).toBeInTheDocument();
    expect(commentElement).toBeInTheDocument();
    expect(mainTittleElement).toBeInTheDocument();
    expect(sectionHeading).toBeInTheDocument();
    expect(termsElementTwo).toBeInTheDocument();
    expect(paragrafElement).toBeInTheDocument();
    expect(elementDisplay).toBeInTheDocument();
    expect(altElement).toBeInTheDocument();
    expect(customElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();
  });
});
