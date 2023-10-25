import { renderToString } from "react-dom/server";
import App from "./App";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import { initStore } from "../store";
import LoginAPI from "../api/AuthAPI";

const loginAPI = new LoginAPI();

async function render(uri: string, data?: any) {
  const store = initStore({
    Login: { user: { first_name: "test from server side" } },
  });

  const initialState = store.getState();
  const renderResult = renderToString(
    <StaticRouter location={uri}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  );

  return [initialState, renderResult];
}

export { render };
