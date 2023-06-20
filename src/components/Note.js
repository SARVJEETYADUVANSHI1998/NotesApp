"use client"
import React, { useContext, useState } from 'react';
import { NoteContext } from '@/app/context/NoteContext';
import {AiOutlineDelete,AiOutlineEdit} from "react-icons/ai"

export default function Note(props) {
    const { notes, deleteNote, updateNote } = useContext(NoteContext);
    const [isDisabled,setDisabled] = useState(true)
    const [expand,setExpand] = useState(false)
    const [updatedTitle,setUpdatedTitle] = useState("");
    const [updatedContent,setUpdatedContent] = useState("green")


    const handleUpdate = (index)=>{
        setDisabled(true);
        const time = Date.now()
      const date = new Date(time);
        updateNote(updatedTitle,updatedContent,index,date.toDateString());
        
        console.log(updatedTitle)
        console.log(updatedContent)
    }
    const handleEdit = (note)=>{
        setDisabled(false)
        setUpdatedTitle(note.title)
        setUpdatedContent(note.content)
        console.log(updatedTitle)
        console.log(updatedContent)
    }
  return (
    <div  className=" w-[250px] rounded-2xl  bg-yellow-400 px-5 py-5 ">
    {
        isDisabled ?
        <>
        
         <h2 onClick={()=>true?setExpand(false):setExpand(true)}>{props.note.title}</h2>
         <p className=' mt-3'>{props.note.content}</p>
         <div className=' mt-5 flex items-center justify-between'>
            <p className=' text-sm'>{props.note.time}</p>
            <div className=' flex space-x-3'>
  
  <div onClick={() => deleteNote(props.index)} className='flex justify-center items-center bg-black text-white rounded-full w-[35px] h-[35px]'>
      <AiOutlineDelete size={20}/>
  </div>
  <div onClick={()=>handleEdit(props.note)} className='flex justify-center items-center bg-black text-white rounded-full w-[35px] h-[35px]'>
      <AiOutlineEdit size={20}/>
  </div>
 
  </div>
         </div>
   
   
    </> :
    (
        <>
            
            <input type='text'
                value ={updatedTitle}
                placeholder='title'
                className='outline-none bg-transparent w-full '
                onChange={(e) => setUpdatedTitle(e.target.value)}
                disabled={isDisabled}
            ></input>
            <input type='text'
                value ={updatedContent}
                placeholder='content'
                className=' outline-none mt-3 bg-transparent w-full '
                onChange={(e) => setUpdatedContent(e.target.value)}
                disabled={isDisabled}
            ></input>
            
            
             <button className=' mt-5 px-5 py-2 text-sm bg-black text-white rounded-xl' onClick={()=>handleUpdate(props.index)}>Update</button>
            </>
    )
        }</div>
  )
}
