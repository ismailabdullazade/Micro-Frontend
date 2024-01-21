import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "./components/Header";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header/>
    <div>Name: apple</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
