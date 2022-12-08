//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

//Router
import { Routes, Route, Navigate } from "react-router-dom";

//Components
import NewNote from "./components/NewNote";

export interface Note extends NoteData {
  id: string;
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
  return (
    <Container>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/new" element={<NewNote />} />
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
