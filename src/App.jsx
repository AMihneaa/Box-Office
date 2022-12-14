import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Import Components

//Import Pages Component
import Home from './Pages/Home';
import Starred from './Pages/Starred';
import Show from './Pages/Show';

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path={'/'}>
          <Home />
        </Route>

        <Route exact={true} path={'/starred'}>
          <Starred />
        </Route>

        <Route exact={true} path={`/show/:id`}>
          <Show />
        </Route>

        <Route>
          <div>Eror 404 : Page not found!</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
