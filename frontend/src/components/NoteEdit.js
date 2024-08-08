import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function NoteEdit() {
  const { id } = useParams();
  const [note, setNote] = useState({ title: '', content: '' });
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetch(`/notes/${id}`)
        .then(response => response.json())
        .then(data => setNote(data))
        .catch(error => console.error('Error fetching note:', error));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote(prevNote => ({ ...prevNote, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const method = id ? 'PUT' : 'POST';
    const url = id ? `/notes/${id}` : '/notes';

    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note)
    })
      .then(() => navigate('/notes'))
      .catch(error => console.error('Error updating note:', error));
  };

  return (
    <div>
      <h2>{id ? 'Edit Note' : 'New Note'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={note.title} onChange={handleChange} />
        </label>
        <br />
        <label>
          Content:
          <textarea name="content" value={note.content} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">{id ? 'Update Note' : 'Create Note'}</button>
      </form>
    </div>
  );
}

export default NoteEdit;
