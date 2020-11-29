import React from 'react'
import notes from "../notes"
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"



const App = () => {
    return (
        <div>
        <Header/>
        <Note notes={notes}/>
        <Footer/>
        </div>
    )
}


export default App;
