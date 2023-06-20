"use client"
import NoteForm from "@/components/NoteForm"

import NoteList from "@/components/NoteList"

import SearchNote from "@/components/SearchNote";
import { useState } from "react";
import {AiOutlinePlus} from "react-icons/ai"

export default function Home() {
  const [ show,setShow] = useState(false)
  return (
    <div className={`w-full px-20 py-5 space-y-10 `}>
    
      <div className=" flex w-full items-center space-x-10">
      <h1>Notes App</h1>
       <SearchNote/>
      </div>
      <div  onMouseLeave={()=>setShow(false)} onClick={()=>!show?setShow(true):setShow(false)} className=" flex justify-center items-center bg-black text-white w-[60px] h-[60px] rounded-full">
      <AiOutlinePlus size={30}/>
      </div>
    <div  className={` ml-1 left-[140px] ease-in-out  duration-500  transition fixed ${!show ? "-top-[1000px]": "top-[58px]"}`}>
    <NoteForm setShow= {setShow}/>
    </div>
      
     
      <h2 className=" text-xl font-bold">Notes</h2>
      <NoteList />
    
    </div>
  )
}
