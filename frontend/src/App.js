import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NoteList from './components/NoteList';
import NoteDetail from './components/NoteDetail';
import NoteEdit from './components/NoteEdit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<NoteList />} />
        <Route path="/notes/:id" element={<NoteDetail />} />
        <Route path="/edit/:id?" element={<NoteEdit />} />
      </Routes>
    </Router>
  );
}

export default App;
