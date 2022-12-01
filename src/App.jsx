import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Import Components
import Navs from './Components/Navs';

//Import Pages Component
import Home from './Pages/Home';
import Starred from './Pages/Starred';

function App() {
  return (
    <div>
      <Navs />

      <Switch>
        <Route exact={true} path={'/'}>
          <Home />
        </Route>

        <Route exact={true} path={'/starred'}>
          <Starred />
        </Route>

        <Route>
          <div>Eror 404 : Page not found!</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
