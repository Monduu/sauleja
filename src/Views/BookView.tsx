import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useParams } from 'react-router-dom'
import { BooksMetadata } from '../data/BooksMetadata'
import { SRLWrapper } from 'simple-react-lightbox'
import '../CSS/home.css'
import '../CSS/details.css'
import { Button } from 'react-bootstrap'
import { useEffect } from 'react'

interface ParamTypes {
  bookName: string
}

export const BookView = () => {
  const { bookName } = useParams<ParamTypes>()
  const book = BooksMetadata.get(bookName)! // TODO redirect to 404

  useEffect(() => {
    document.title = `Sauleja - ${book.title}`
  })

  const extraImages = () => {
    const images = []
    for (let i = 1; i <= book.numOfImages; i++) {
      images.push(
        <Col xs={4} key={`${bookName}-e-${i}`} className="s-extra-image-container" hidden={i > 3}>
          <img src={`/images/${bookName}/extra/${i}.jpg`} className="s-fill-width s-extra-image" alt={book.title} />
        </Col>
      )
    }
    return images
  }

  return (
    <div>
      <Container>
        <Row className="s-details-container">
          <Col sm={12} md={6} lg={5}>
            <SRLWrapper>
              <img
                src={`/images/${bookName}/main.jpg`}
                className="d-inline-block s-fill-width s-main-image"
                alt={book.title}
              />
              <Row className="s-image-row">{extraImages()}</Row>
            </SRLWrapper>
          </Col>
          <Col sm={12} md={6} lg={7}>
            <div className="s-book-description" dangerouslySetInnerHTML={{ __html: book.description }} />
            <Button href={book.storeUrl} target="_blank" style={{width: '100%'}} variant="danger">
              Apskatīt internetveikalā
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
