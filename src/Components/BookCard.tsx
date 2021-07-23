import Col from 'react-bootstrap/Col'
import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'

interface Props {
  bookKey: string
}

export const BookCard: FC<Props> = ({ bookKey }) => {
  const history = useHistory();

  return (
    <Col sm={12} md={6} lg={4}>
      <div className="s-book-card">
        <img src={`/images/${bookKey}/main.jpg`} className="d-inline-block s-fill-width" alt={bookKey}
             onClick={() => history.push(`/books/${bookKey}`)}/>
      </div>
    </Col>
  )
}
