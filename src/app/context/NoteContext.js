"use client"

import React, { createContext, useState, useEffect } from 'react';

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [searchNotes, setSearchNotes] = useState([]);

  useEffect(() => {
   
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    // Save notes to local storage whenever the "notes" state changes
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (title, content,time) => {
    const newNote = { title, content ,time};
    setNotes([...notes, newNote]);
  };

  const updateNote = (title,content,index,time) =>{
    const newNote = { title, content,time };
    console.log(content)

    
        const updatedNotes = [...notes];
        updatedNotes[index] = newNote;
        setNotes(updatedNotes);
  }

  const searchNote = (text)=>{
    setSearchNotes(notes.filter((note)=>note.title.toLowerCase().includes(text.toLowerCase())));
  }

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote,updateNote ,searchNote,searchNotes}}>
      {children}
    </NoteContext.Provider>
  );
};
