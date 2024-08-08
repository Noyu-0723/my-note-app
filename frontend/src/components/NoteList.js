import React, { useEffect, useState } from 'react';
import { getNote } from '../services/api';

const NoteList = () => {
  const [note, setNote] = useState([]);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const data = await getNote();
        setNote(data);
      } catch (error) {
        console.error('Error fetching note:', error);
      }
    };

    fetchNote();
  }, []);

  return (
    <div>
      <h1>Note</h1>
      <ul>
        {note.map(note => (
          <li key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
