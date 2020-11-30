import React, {useState} from 'react'

const NoteInput = ({addNote}) => {
const [note, setNote] = useState({
    title: "", 
    content : ""
})

const handleChange = (e) => {
    const {name, value} = e.target;
    setNote(prevNote => {
       return {
           ...prevNote,
           [name]: value
       }; 
    })
}

const submitNote = (e) =>{
    e.preventDefault();
    addNote(note);
    setNote({
        title: "", 
        content : ""
    })
}
    return (
        <form>
            <input name="title" onChange={handleChange} value={note.title} placeholder="Title"/>
            <textarea 
            name="content" 
            onChange={handleChange}
            value={note.content} 
            placeholder="Notes..."
            />
            <button onClick={submitNote} >Add</button>
        </form>
    )
}


export default NoteInput;