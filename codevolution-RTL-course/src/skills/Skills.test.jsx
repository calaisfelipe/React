import { render, screen, logRoles } from "@testing-library/react";

import { Skills } from "./Skills";

const list = ["javascript", "HTML", "CSS", "React"];

describe("list Tester", () => {
  test("skills Test", () => {
    render(<Skills list={list} />);

    const findElements = screen.getByRole("list");

    expect(findElements).toBeInTheDocument();
  });

  test("Render a list of skills", () => {
    render(<Skills list={list} />);

    const listItemElements = screen.getAllByRole("listitem");

    expect(listItemElements).toHaveLength(4);
  });

  test("Renders Login Button", () => {
    render(<Skills list={list} />);

    const loginButton = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginButton).toBeInTheDocument();
  });

  test("Start Learning button is not rendered", () => {
    render(<Skills list={list} />);

    const startButton = screen.queryByRole("button", {
      name: "Start Learning",
    });
    expect(startButton).not.toBeInTheDocument();
  });

  test("Start learning button is eventually displayed", async () => {
    //const view =
    render(<Skills list={list} />);
    //logRoles(view.container)

    const startLearning = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      },
      {
        timeout: 2000,
      }
    );

    screen.debug();
    expect(startLearning).toBeInTheDocument();
  });
});
