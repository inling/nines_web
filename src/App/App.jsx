import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.less';
import routes from '../routes';
function App() {
  return (
    <HashRouter>
      <Switch>
        {
          routes.map((route, key) => {
            if (route.exact) {
              return (
                <Route key={key} exact path={route.path} render={(props) => (
                  <route.component {...props} routes={route.routes} />
                )} />
              )
            } else {
              return (
                <Route key={key} path={route.path} render={(props) => (
                  <route.component {...props} routes={route.routes} />
                )} />
              )
            }
          })
        }
      </Switch>
    </HashRouter>
  );
}


export default App;
