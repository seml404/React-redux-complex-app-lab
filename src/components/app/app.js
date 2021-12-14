import React from "react";
import { MainPage, CartPage } from "../pages";
import AppHeader from "../app-header";

import Background from "./food-bg.jpg";

// import WithRestoService from "../hoc";
const App = () => {
  return (
    <div
      style={{ background: `url(${Background}) center center/cover no-repeat` }}
      className="app"
    >
      <AppHeader total={50} />
      <MainPage />
      <CartPage />
    </div>
  );
};

//  WithRestoService()(App);

export default App;
