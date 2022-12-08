import React from "react";

//Components
import NoteForm from "./NoteForm";

//TS interface
import { NoteData } from "../App";

interface NewNoteProps {
  onSubmit: (data: NoteData) => void;
}

const NewNote = ({ onSubmit }: NewNoteProps) => {
  return (
    <>
      <h1 className="mb-4">New Note</h1>
      <NoteForm onSubmit={onSubmit} />
    </>
  );
};

export default NewNote;
