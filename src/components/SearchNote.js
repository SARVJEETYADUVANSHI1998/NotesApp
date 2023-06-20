"use client"
import React, { useContext, useState } from 'react'
import { NoteContext } from '@/app/context/NoteContext'

const SearchNote = () => {
    const [searchText,setSearchText] = useState("")
  
     const{searchNote}=useContext(NoteContext);
     const handleSearch = (text)=>{
        searchNote(text)
     }

  return (
    <div className=' flex-1 flex space-x-5'>
    <input type="search" placeholder="search title" className=" px-10 py-3 w-full bg-gray-100 rounded-md " onChange={(e)=>handleSearch(e.target.value)}/>
   
    </div>
  )
}

export default SearchNote