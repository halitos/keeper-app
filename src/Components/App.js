import React, {useState} from 'react'
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import NoteInput from './NoteInput'


const App = () => {
    const [newNotes, setNewNotes] = useState([]);

   const addNote = (note) =>{
    setNewNotes(prevNote => {
       return [...prevNote, note]
     })
   }

   const deleteNote = (id) =>{
    setNewNotes(prevNote => {
      prevNote.filter((note, index) => index !== id)
     })
   } 
   
   return (
        <div>
        <Header/>
        <NoteInput addNote={addNote}/>
        {newNotes && newNotes.map((note, i)=>{
         return(
            <Note 
            key={i}
            id={i}
            deleteNote={deleteNote}
            title={note.title}
            content={note.content}
            />
         ) 
        })}
        <Footer/>
        </div>
    )
}


export default App;
