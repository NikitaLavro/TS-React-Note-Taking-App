import React from "react";

//Components
import NoteForm from "./NoteForm";

const NewNote = () => {
  return (
    <>
      <h1 className="mb-4">New Note</h1>
      <NoteForm />
    </>
  );
};

export default NewNote;
