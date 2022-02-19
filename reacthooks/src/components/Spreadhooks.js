import React, { useState } from 'react'

const Spreadhooks = () => {
    const [spreadIt,setspreadIt]=useState({
        name:"priyam shnankar", regNo:"20BCE10032", ekfield:"kuch bhi"
    })
const clickIt=()=>{
    setspreadIt({...spreadIt,ekfield:"kuch aur bhi"});
}
  return (
    <>
    <h1>
    {spreadIt.ekfield}
    </h1>

    <button onClick={clickIt}>chane karo</button>
    </>
  )
}

export default Spreadhooks