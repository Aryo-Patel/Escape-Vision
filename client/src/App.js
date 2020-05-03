import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import AllSelectors from './components/subjectSelectorPage/AllSelectors';
import Builder from './components/builder/Builder';
import GameChoooser from './components/GameChooser';
import LockChooser from './components/LockChooser';
import SafeChooser from './components/SafeChooser';
import ChooseMirror from './components/ChooseMirror';
import DoorChooser from './components/DoorChooser';
import ClueChooser from './components/ClueChooser';
import QuestionContainer from './components/QuestionContainer';
/*This is the housing for every part of the application. Right now, when a user acceses the page, the only
componnet that will show up will be the AllSelectors component. Through using links they can navigate to other
things that are inside switches */
function App() {
  return (
    <BrowserRouter>
        <Route exact path = "/" component = {AllSelectors} />
        <Switch>
          <Route exact path = "/builder" component = {Builder} />
          <Route exact path = "/game-chooser" component = {GameChoooser} />
          <Route exact path = "/lock-chooser" component = {LockChooser} />
          <Route exact path = "/safe-chooser" component = {SafeChooser} />
          <Route exact path = "/choose-mirror" component = {ChooseMirror} />
          <Route exact path = "/door-chooser" component = {DoorChooser} />
          <Route exact path = "/clue-chooser" component = {ClueChooser} />
          <Route exact path = "/choose-question-container" component = {QuestionContainer} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
