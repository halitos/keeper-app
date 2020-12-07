import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import NoteInput from "./NoteInput";

const App = () => {
  const [newNotes, setNewNotes] = useState([]);
  const url = "https://halit-chat-server.glitch.me/messages";

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((res) => {
        setNewNotes((prevNote) => {
          return [...prevNote, ...res];
        });
      })
      .catch((error) => console.log(error));
  }, []);

  const addNote = (note) => {
    setNewNotes((prevNote) => {
      return [...prevNote, note];
    });
  };

  const deleteNote = (id) => {
    setNewNotes((prevNote) => {
      return prevNote.filter((note, index) => index !== id);
    });
  };

  return (
    <div>
      <Header />
      <NoteInput addNote={addNote} />
      {newNotes &&
        newNotes.map((note, i) => {
          return (
            <Note
              key={i}
              id={i}
              deleteNote={deleteNote}
              title={note.title}
              content={note.content}
            />
          );
        })}
      <Footer />
    </div>
  );
};

export default App;
