import React from "react";
import { useParams, Navigate, Outlet } from "react-router-dom";

//TS Interface
import { Note } from "../App";

interface NoteLayoutProps {
  notes: Note[];
}

const NoteLayout = ({ notes }: NoteLayoutProps) => {
  const { id } = useParams();
  const note = notes.find((n) => n.id === id);
  console.log(note);

  if (!note) return <Navigate to="/" replace />;

  return <Outlet context={note} />;
};

export default NoteLayout;
