import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import React, { useState, useEffect } from 'react';

const initPost = ["Hello, "]

function App() {

const [post, setPost]=useState(initPost)
const [author, setAuthorName]=useState("")


const updateName = (value)=>{
  setAuthorName(value)
}


useEffect(() => {
  setTimeout(loadMessage, 1500); 

});

const loadMessage = ()=>{
  const placeHolder = document.querySelector("#robot");
  placeHolder.innerHTML=post + author + "! I'm a Bot!";
};


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="robot"></div>
        <br></br>
        <Message updateName={setAuthorName}/>
      </header>
    </div>
  );
}

export default App;
