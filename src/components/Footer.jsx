import { Container, Row, Col } from "react-bootstrap";
import logo from "../../salogo.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <img src={logo} alt="Logo" style={{height: 100}} />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} /></a>
              <a href="#"><img src={navIcon2} /></a>
              <a href="#"><img src={navIcon3} /></a>
            </div>
            <p>CopyRight 2025. All Rights Reserved by Sahil Alamgir</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}