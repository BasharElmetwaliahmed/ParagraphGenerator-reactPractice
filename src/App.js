import React, { useRef, useState } from 'react'
import data from './data'
import './App.css'
function App() {
  const [text,setText]=useState([]);
  const Countref=useRef()
  const handleSubmit=(e)=>{
    e.preventDefault();
    const numParagraphs=Countref.current.value;
    setText(data.slice(0,Number(numParagraphs)))
    console.log(text)
     
  }

  return (
    <div className='app-container'>
      <h1>Paragraph Generator</h1>
      <form onSubmit={handleSubmit} className="form-generator">
      <h2>Paragraphs : </h2>
      <input type="number" ref={Countref} min='0' max='8'></input>
      <button type='submit'>Submit</button>
      </form>
     <div className='paragraphs-container'>
      {text.map((paragraph,index)=> <p key={index}>{paragraph}</p>)}

     </div>
    </div>
  )
}

export default App
