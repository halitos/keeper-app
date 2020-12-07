import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

const NoteInput = ({ addNote }) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [display, setDisplay] = useState(false);

  const handlePopup = () => {
    setDisplay(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const submitNote = (e) => {
    e.preventDefault();
    note.title ? addNote(note) : alert("please fill before add");
    setNote({
      title: "",
      content: "",
    });
    setDisplay(false);
  };
  return (
    <form className="create-note">
      {display && (
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
      )}
      <textarea
        onClick={handlePopup}
        name="content"
        onChange={handleChange}
        value={note.content}
        placeholder={display ? "Notes" : "Enter new note..."}
        rows={display ? "3" : "1"}
      />
      <Zoom in={display}>
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
      </Zoom>
    </form>
  );
};

export default NoteInput;
