import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import './App.less';
import Home from './pages/home/home';
import Register from './pages/register/register';
import Login from './pages/login/login';
import PCTR from './pages/personalCenter/personalCenter';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/PCTR" component={PCTR} />
      </Switch>
    </HashRouter>
  );
}

export default App;
