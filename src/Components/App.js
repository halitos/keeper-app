import React, {useState} from 'react'
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"


const App = () => {
const [note, setNote] = useState({
    title: "title", 
    content : "content"
})
    return (
        <div>
        <Header/>
        <Note note={note}/>
        <Footer/>
        </div>
    )
}


export default App;
