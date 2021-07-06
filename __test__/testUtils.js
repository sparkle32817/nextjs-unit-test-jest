import { Provider } from "react-redux";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import { render } from "@testing-library/react";
import user from "@testing-library/user-event";

import { store } from "src/store";

export const push = jest.fn().mockResolvedValue(true);
const routerMock = {
  basePath: "",
  pathname: "/",
  route: "/",
  asPath: "/",
  query: {},
  locale: "",
  locales: [],
  defaultLocale: "",
  domainLocales: [],
  isLocaleDomain: false,
  push,
  replace: jest.fn().mockResolvedValue(true),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn().mockResolvedValue(undefined),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
};

const customRender = (ui, value = routerMock) => {
  return render(
    <Provider store={store}>
      <RouterContext.Provider value={value}>{ui}</RouterContext.Provider>
    </Provider>
  );
};
export * from "@testing-library/react";
export * from 'react-dom/test-utils';

export { customRender as render, user };
