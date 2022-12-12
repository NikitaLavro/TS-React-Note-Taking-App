import { useNote } from "./NoteLayout";

//Bootstrap
import { Row, Col, Badge, Stack, Button } from "react-bootstrap";

//Routing
import { Link } from "react-router-dom";

//React Markdown
import ReactMarkdown from "react-markdown";

export function Note() {
  const note = useNote();

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
              <Button variant="outline-danger">Delete</Button>
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
