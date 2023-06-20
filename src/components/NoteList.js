"use client"
import React, { useContext, useState } from 'react';
import { NoteContext } from '@/app/context/NoteContext';
import Note from './Note';

export default function NoteList() {
    const { notes, deleteNote, updateNote, searchNotes } = useContext(NoteContext);
    const [isDisabled,setDisabled] = useState(true)
    const [updatedTitle,setUpdatedTitle] = useState("");
    const [updatedContent,setUpdatedContent] = useState("green")


    const handleUpdate = (index)=>{
        setDisabled(true);
        updateNote(updatedTitle,updatedContent,index);
        
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
        <ul className=' grid grid-cols-4 gap-5'>{
            searchNotes.length === 0? 
            notes.map((note, index) => (
                <li key={index}  >
                <Note note={note} index={index}/>
                </li>
            )):searchNotes.map((note, index) => (
                <li key={index}  >
                <Note note={note} index={index}/>
                </li>
            ))}
        </ul>
    );
}
