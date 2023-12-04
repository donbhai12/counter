"use client"
import React,{useState} from "react"
const counter =()=>{
  const [count,setcount] = useState(0);
  const descrease = () =>{
      if(!count ==0){
        setcount(count-1)
      }
      else{
        alert("Sorry Your Count is already 0")
      }
    
  }
  const increase= () =>{
    setcount(count+1)
  }
  return (<div className="text-center p-20 justify-center flex gap-7 "> 
            <button onClick={descrease} className="p-4 bg-red-600">-</button>
            <div className="p-4 font-6">{count}</div>
            <button onClick={increase} className="p-4 bg-green-600">+</button>
        </div>)
}
export default counter;