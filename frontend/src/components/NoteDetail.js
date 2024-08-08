import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function NoteDetail() {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    fetch(`/notes/${id}`)
      .then(response => response.json())
      .then(data => setNote(data))
      .catch(error => console.error('Error fetching note:', error));
  }, [id]);

  if (!note) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <Link to={`/edit/${note.id}`}>Edit</Link>
    </div>
  );
}

export default NoteDetail;
