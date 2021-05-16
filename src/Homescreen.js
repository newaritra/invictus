import React, { useEffect, useState } from 'react'
import Input from './Input'
import axios from "axios"

function Homescreen() {
    const [urlData,setUrldata]=useState("")
    useEffect(()=>{
        const fetchData=async ()=>{
            const data=await axios.get("https://raw.githubusercontent.com/invictustech/test/main/README.md") 
            setUrldata(data.data)
        }
        fetchData()
        
    },[])
    let freqArray=urlData.replace(/[,.&-]/gi,function(x){
        return ""
    })
    freqArray=freqArray.replace(/[(\r\n|\n|\r)]/gi,function(x){
        return ""
    })
    freqArray=freqArray.split(" ")
    freqArray=freqArray.map(item=>item.toLowerCase())
    let uniqueArray=new Set(freqArray)
    uniqueArray=Array.from(uniqueArray);
    console.log(uniqueArray)
    console.log(freqArray)
    let obj={}
    for(let index in uniqueArray)
        obj[uniqueArray[index]]=0
    for(let index in freqArray)
        obj[freqArray[index]]++
    const objArray=[]
    for(let val in obj)
    {
        objArray.push([val,obj[val]])
    }
    objArray.sort(function(a, b) {
        return b[1] - a[1];
    });
    return (
        <div>
            <Input objArray={objArray} uniqueLength={uniqueArray.length}/>
        </div>
    )
}

export default Homescreen
