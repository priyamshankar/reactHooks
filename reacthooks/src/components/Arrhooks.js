import React,{useState} from 'react'

const Arrhooks = () => {

    let arrObj=[
        {
            id:0,name:"priyamshankar", year:"2nd year"
        },
        {
            id:1,name:"priaymshdfah ", year:"1st year"
        },{
            id:2,name:"priyam thakur", year:"3rd year"
        },
    ]

    const [arrayClr,setarrayClr]=useState(arrObj);
    const clearBtn=()=>{
        setarrayClr([]);
        document.getElementById('clrBtn').style.display='none';
    }


  return (
    <>
    {

        arrayClr.map((elem)=>{
            return <p>
                key={elem.id}
            {elem.id} name is {elem.name} and the year is {elem.year}
            </p>
        })
    }
    <button id='clrBtn' onClick={clearBtn}>clear please</button>
    
    </>
  )
}

export default Arrhooks