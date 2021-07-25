import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import '../CSS/home.css'
import React, { useEffect } from 'react'
import { BooksMetadata } from '../data/BooksMetadata'
import { BookCard } from '../Components/BookCard'

export const Home = () => {
  useEffect(() => {
    document.title = 'Sauleja'
  })

  return (
    <div>
      <Container>
        <Row>
          {Array.from(BooksMetadata.keys()).map((key) => (
            <BookCard bookKey={key} key={key}/>
          ))}
        </Row>
      </Container>
    </div>
  )
}
