import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Store } from "redux";
import { createStore } from "redux";
import todos from "./reducers/todos";
import { Todos } from "./states/TodoState";

import App from "./App";

const store: Store<Todos> = createStore(todos, []);

// @@redux/INIT
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
