import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.scss";

const Home = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <Suspense fallback={<div></div>}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
