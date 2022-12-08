import { useMemo } from "react";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

//Router
import { Routes, Route, Navigate } from "react-router-dom";

//Components
import NewNote from "./components/NewNote";

//Hooks
import { useLocalStorage } from "./hooks/useLocalStorage";

//uuID
import { v4 as uuidV4 } from "uuid";

export interface Note extends NoteData {
  id: string;
}

export interface RawNote extends RawNoteData {
  id: string;
}

export interface RawNoteData {
  title: string;
  markdown: string;
  tagIds: string[];
}

export interface NoteData {
  title: string;
  markdown: string;
  tags: Tag[];
}

export interface Tag {
  id: string;
  label: string;
}

function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("tags", []);

  const notesWithTags = useMemo(() => {
    return notes.map((note) => {
      return {
        ...note,
        tags: tags.filter((tag) => note.tagIds.includes(tag.id)),
      };
    });
  }, [notes, tags]);

  const onCreateNote = (data: NoteData) => {
    setNotes((prevNotes) => {
      return [
        ...prevNotes,
        { ...data, id: uuidV4(), tagIds: tags.map((tag) => tag.id) },
      ];
    });
  };

  return (
    <Container>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/new" element={<NewNote onSubmit={onCreateNote} />} />
        <Route path="/new" element={<h1>New</h1>} />
        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}

export default App;
