import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button'
import { FC } from "react";

interface Props {
  image: string;
  title: string;
  text: string;
}

export const CardComponent: FC<Props> = (props) => {
// function CardComponent(props: Props) {
  return (

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body className="card-body">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
  )

}

export default CardComponent;