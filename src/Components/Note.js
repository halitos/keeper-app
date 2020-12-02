import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

const Note = ({title, content, deleteNote, id}) => {

    const handleDelete = () =>{
        deleteNote(id)
    }

    return (     
            <div className="note">
                <h1>{title}</h1>
                <p>{content}</p>
                <button onClick={handleDelete}><DeleteIcon/></button>
            </div>
    )
}


export default Note; 