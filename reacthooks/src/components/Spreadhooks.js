import React, { useState } from 'react'

const Spreadhooks = () => {
    const [spreadIt,setspreadIt]=useState({
        name:"priyam shankar", regNo:"20BCE10032", ekfield:"kuch bhi"
    })
const clickIt=()=>{
    setspreadIt({...spreadIt,ekfield:"kuch aur bhi",regNo:"20BAI10032"});
    // setspreadIt({...spreadIt,regNo:"20BAI10032"});
}
  return (
    <>
    <h1>
    {spreadIt.ekfield}
    <br />
    {spreadIt.regNo}
    </h1>

    <button onClick={clickIt}>change karo</button>
    </>
  )
}

export default Spreadhooks