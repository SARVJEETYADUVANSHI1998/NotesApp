"use client"
import React, { useState, useContext } from 'react';
import { NoteContext } from '@/app/context/NoteContext';

export default function NoteForm({setShow}) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { addNote } = useContext(NoteContext);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if(!title && !content)
      {
        alert("Please enter title or content")
      }
      else{
      const time = Date.now()
      const date = new Date(time);

      addNote(title, content,date.toDateString());
      setShow(false)
      setTitle('');
      setContent('');
      }
    };
  return (
    <form onSubmit={handleSubmit} onMouseOver={()=>setShow(true)} onMouseLeave={()=>setShow(false)} className='  bg-gray-400 w-[300px] p-5 rounded-lg space-y-5' >
      <input
        type="text"
        placeholder="Title"
        value={title}
        className=' w-full h-[50px] px-5'
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={content}
        className=' w-full pt-5  px-5'
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button className=' bg-black w-full text-white rounded-xl px-5 py-2' type="submit">Add Note</button>
    </form>
  )
}
