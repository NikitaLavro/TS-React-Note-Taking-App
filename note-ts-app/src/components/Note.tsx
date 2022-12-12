import { useNote } from "./NoteLayout";

//Bootstrap
import { Row, Col, Badge, Stack } from "react-bootstrap";

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
      </Row>
    </>
  );
}
