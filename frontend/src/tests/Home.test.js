import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Home from "../pages/Home";

configure({ adapter: new Adapter() });

it("renders Home without crashing", async () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
        </Switch>
    </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
