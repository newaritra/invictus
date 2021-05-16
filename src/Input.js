import React, { useEffect, useState } from 'react'
import "./Input.css"

function Input({objArray,uniqueLength}) {
    const [wordCount,setWordCount]=useState(null);
    const [table,setTable]=useState(false);
    let tempObjArray=[]
    const toggleTable=()=>{
        setTable(table=>!table)
        wordCount===""|| wordCount===null|| wordCount==="0"&&setTable(false)
    }
    useEffect(()=>{
    setTable(false);
},[wordCount])
    return (
        <div>
            <form onSubmit={e=>e.preventDefault()}>
                <h4>Enter a number</h4>
                <input type="number"  value={wordCount} onChange={e=>setWordCount(e.target.value)}/>
                <button onClick={toggleTable} disabled={wordCount===""? true:false}>Submit</button>
            </form>
            {(wordCount>uniqueLength|| wordCount<0) &&<h2 style={{marginLeft:"38%",}}>Enter a number within 0 and {uniqueLength}</h2>}
            {table&&wordCount<=uniqueLength &&wordCount>0&& <table>
                <thead>
                    <tr>
                    <th>Word</th>
                    <th>Frequency</th>
                    </tr>
                </thead>
                {objArray.slice(0,wordCount).map(item=>
                <tr>
                    <td>{item[0]}</td>
                    <td>{item[1]}</td>
                </tr>)
                }
            </table>}
        </div>
    )
}

export default Input
