import React ,{useState} from 'react'
import Arrhooks from './components/Arrhooks';
import Form from './components/form';
import Spreadhooks from './components/Spreadhooks';


const App = () => {
  const [myName,setmyName]=useState("my name is priyam shankar");
  const changeName=()=>{
  
  setmyName("my name is really priyam shankar...");
  }
  return (
    <>
    <h1>{myName}</h1>
    <button onClick={changeName}>click here</button>
    <Arrhooks/>
    <Spreadhooks/>
    <Form/>
    </>
  )
}

export default App