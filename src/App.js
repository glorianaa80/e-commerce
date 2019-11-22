import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Check from './pages/chek';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} component={Home} exact />
        <Route path={"/checkout"} component={Check} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
