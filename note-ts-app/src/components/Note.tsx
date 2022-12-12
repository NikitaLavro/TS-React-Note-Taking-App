import { useNote } from "./NoteLayout";

//Bootstrap
import { Row, Col, Badge, Stack, Button } from "react-bootstrap";

//Routing
import { Link } from "react-router-dom";

//React Markdown
import ReactMarkdown from "react-markdown";

//Router
import { useNavigate } from "react-router-dom";

interface NoteProps {
  onDelete: (id: string) => void;
}

export function Note({ onDelete }: NoteProps) {
  const note = useNote();
  const navigate = useNavigate();

  return (
    <>
      <Row className="align-items-center mb4">
        <Col>
          <h1>{note.title}</h1>
          {note.tags.length > 0 ? (
            <Stack gap={1} direction="horizontal" className="flex-wrap">
              {note.tags.map((tag) => (
                <Badge className="text-truncate" key={tag.id}>
                  {tag.label}
                </Badge>
              ))}
            </Stack>
          ) : null}
        </Col>
        <Col xs="auto">
          <Stack gap={2} direction="horizontal">
            <Link to={`/${note.id}/edit`}>
              <Button variant="primary">Edit</Button>
            </Link>
            <Link to={`/`}>
              <Button
                variant="outline-danger"
                onClick={() => {
                  onDelete(note.id);
                  navigate("/");
                }}
              >
                Delete
              </Button>
            </Link>
            <Link to={`..`}>
              <Button variant="outline-secondary">Back</Button>
            </Link>
          </Stack>
        </Col>
      </Row>
      <ReactMarkdown>{note.markdown}</ReactMarkdown>
    </>
  );
}
