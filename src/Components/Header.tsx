// import { NavLink } from 'react-router-dom';
import '../CSS/header.css'
import '../CSS/home.css'
// import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col'

function Header() {
  return (
    <div className="header">
      <Col sm={4}>
        <h1 className="logo-sauleja">Sauleja</h1>
      </Col>
    </div>
  )
}

export default Header
