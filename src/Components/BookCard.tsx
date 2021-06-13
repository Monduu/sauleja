import Col from "react-bootstrap/Col";
import React, {FC} from "react";

interface Props {
  bookKey: string,
}

export const BookCard: FC<Props> = ({bookKey}) => {
  return (
    <Col sm={12} md={6} lg={4}>
      <div className="s-book-card">
        <img
          src={`/images/${bookKey}/main.jpg`}
          className="d-inline-block align-top pointer thumbnail s-fill-width"
          alt={bookKey}
        />
      </div>
    </Col>
  )
}
