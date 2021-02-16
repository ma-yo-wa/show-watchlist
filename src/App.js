import React from "react";
import Home from "./components/Home";
import Search from "./components/Search";
import Show from "./components/Show";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/show" component={Show} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
