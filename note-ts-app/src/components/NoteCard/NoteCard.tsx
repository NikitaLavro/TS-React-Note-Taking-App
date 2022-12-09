import React from "react";

//Bootstrap
import { Card } from "react-bootstrap";

//Router
import { Link } from "react-router-dom";

//TS Interface
import { SimplifiedNote } from "../../App";

//Styles
import styles from "./NoteCard.module.css";

const NoteCard = ({ id, title, tags }: SimplifiedNote) => {
  return (
    <Card
      as={Link}
      to={`/${id}`}
      className={`h-100 text-reset text-decoration-none ${styles.card}`}
    >
      <Card.Body></Card.Body>
    </Card>
  );
};

export default NoteCard;
