import React ,{useState} from 'react'


const App = () => {
  const [myName,setmyName]=useState("my name is priyam shankar");
  const changeName=()=>{
  
  setmyName("my name is really priyam shankar...");
  }
  return (
    <>
    <h1>{myName}</h1>
    <button onClick={changeName}>click here</button>
    
    </>
  )
}

export default App