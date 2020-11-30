import React from 'react'

const Note = ({ note }) => {
    return (
                <div className="note">
                    <h1>Title: {note.title}</h1>
                    <p>Content: {note.content}</p>
                </div>
    )
}


export default Note; 