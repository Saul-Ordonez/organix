import React from "react";
import Schedule from "./Schedule";
import Year from "./Year";
import "./App.css";
import { Switch, Route } from 'react-router-dom';

function App() {

  return (
    <div>
    <Switch>
      <Route exact path='/' component={Schedule} />
      <Route path='/year' component={Year} />
    </Switch>
    </div>
  );
}

export default App;
