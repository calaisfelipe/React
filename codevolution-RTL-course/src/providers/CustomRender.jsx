import React from "react";
import { render } from "@testing-library/react";
import { ProviderTheme } from "./AppProviders";

const AllTheProviders = ({ children }) => {
  return <ProviderTheme>{children}</ProviderTheme>;
};

const customRender = (ui, options) => {
  render(ui, {
    wrapper: AllTheProviders,
    ...options,
  });
};

export * from "@testing-library/react";
export { customRender as render };
