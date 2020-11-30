import React from 'react'

const Note = ({title, content, deleteNote, id}) => {

    const handleDelete = () =>{
        deleteNote(id)
    }

    return (     
            <div className="note">
                <h1>{title}</h1>
                <p>{content}</p>
                <button onClick={handleDelete}>DELETE</button>
            </div>
    )
}


export default Note; 