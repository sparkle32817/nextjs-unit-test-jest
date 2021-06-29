import { render } from "@testing-library/react";

const Providers = ({ children }): any => {
  return children;
};

const customRender = (ui, options = {}): any => render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";

export { customRender as render };
