import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardComponent from "../Components/CardComponent";
import "../CSS/home.css";
import bibele_prieks from "../Assets/Images/Bibele_prieksvaks.jpg";
import dieniska_gaisma from "../Assets/Images/Dieniska_prieksvaks.jpg";
import jauna_deriba from "../Assets/Images/Jauna_deriba_vaks.jpg";
import laipnibas_skola from "../Assets/Images/Laipnibas_skola_prieksvaks.jpg";
import sievietem from "../Assets/Images/Tikai_sievietem_prieksvaks.jpg";
import viriesiem from "../Assets/Images/Tikai_viriesiem_prieksvaks.jpg";

// import { Link } from 'react-router';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={4} sm={12}>
            <div className="s-book-card">
              <img
                src={bibele_prieks}
                className="d-inline-block align-top pointer thumbnail s-fill-width"
                alt="bibele"
              />
            </div>
          </Col>
          <Col lg={4} sm={12}>
            <div className="s-book-card">
              <img
                src={jauna_deriba}
                className="d-inline-block align-top pointer thumbnail s-fill-width"
              />
            </div>
          </Col>
          <Col lg={4} sm={12}>
            <div className="s-book-card">
              <img
                src={dieniska_gaisma}
                className="d-inline-block align-top pointer thumbnail s-fill-width"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4} sm={12}>
            <div className="s-book-card">
              <img
                src={laipnibas_skola}
                className="d-inline-block align-top pointer thumbnail s-fill-width"
              />
            </div>
          </Col>
          <Col lg={4} sm={12}>
            <div className="s-book-card">
              <img
                src={sievietem}
                className="d-inline-block align-top pointer thumbnail s-fill-width"
              />
            </div>
          </Col>
          <Col lg={4} sm={12}>
            <div className="s-book-card">
              <img
                src={viriesiem}
                className="d-inline-block align-top pointer thumbnail s-fill-width"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
