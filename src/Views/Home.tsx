import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../CSS/home.css";
import React from "react";
import {BooksMetadata} from "../data/BooksMetadata";
import {BookCard} from "../Components/BookCard";

export const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          {Array.from(BooksMetadata.keys()).map((key) => {
            return (
              <BookCard bookKey={key} key={key}/>
            )
          })}
        </Row>
      </Container>
    </div>
  );
}
