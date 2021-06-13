import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "../CSS/home.css";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import {BooksMetadata} from "../data/BooksMetadata";

interface ParamTypes {
  bookName: string
}

export const BookView = () => {
  const {bookName} = useParams<ParamTypes>();
  const book = BooksMetadata.get(bookName)! // TODO redirect to 404

  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} md={6} lg={5} >
            <img src={`/images/${bookName}/main.jpg`}
                 className="d-inline-block pointer s-fill-width"
                 alt={bookName}/>
          </Col>
          <Col sm={12} md={6} lg={7}>
            <div>
              {book.description}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
