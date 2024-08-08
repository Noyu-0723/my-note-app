import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NoteList from './components/NoteList';
import NoteDetail from './components/NoteDetail';
import NoteEdit from './components/NoteEdit';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/notes" exact component={NoteList} />
        <Route path="/notes/:id" component={NoteDetail} />
        <Route path="/edit/:id?" component={NoteEdit} />
      </Switch>
    </Router>
  );
}

export default App;
