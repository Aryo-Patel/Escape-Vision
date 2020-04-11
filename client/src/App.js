import React, {Fragment} from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import AllSelectors from './components/subjectSelectorPage/AllSelectors';
import Builder from './components/builder/Builder';

/*This is the housing for every part of the application. Right now, when a user acceses the page, the only
componnet that will show up will be the AllSelectors component. Through using links they can navigate to other
things that are inside switches */
function App() {
  return (
    <BrowserRouter>
        <Route exact path = "/" component = {AllSelectors} />
        <Switch>
          <Route exact path = "/builder" component = {Builder} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
