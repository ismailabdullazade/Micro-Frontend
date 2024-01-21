import React, { Suspense } from "react";
import ReactDOM from "react-dom";
// import Header from "apple/Header"

const Header = React.lazy(()=>import('apple/Header'))

import "./index.scss";
// TODO import all routes and expos
const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Suspense fallback={<div>Loading...</div>}>
      <Header/>
    </Suspense>
    <div>Name: samsung</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
