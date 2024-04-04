import React from "react";
import "./assets/scss/app.scss";
import { Provider } from "react-redux";
import store from "./store";
import { AppPages } from "../pages";

function App() {
  return (
    <Provider store={store}>
      <AppPages />
    </Provider>
  );
}

export default App;
