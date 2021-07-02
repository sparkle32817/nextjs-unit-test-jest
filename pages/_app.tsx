import { Provider } from "react-redux";

import Navbar from "src/components/NavBar";
import { store } from "src/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
