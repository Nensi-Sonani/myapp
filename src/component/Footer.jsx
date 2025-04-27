import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from 'react-bootstrap/Col';
import '../Css/Footer.css'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div>
            {/* FOOTER */}

            <footer>
                <Container>
                    <Row className="py-4">
                        <Col lg="4">
                            <div className="footer-item">
                                <Link
                                    className="navbar-brand fw-bold fs-4"
                                    to="/"
                                    style={{ fontFamily: '"Antic Didone", serif', color: '#ffffff' }}
                                >
                                    NailedJewel
                                </Link>
                                <p>© Ferkos Fine Jewelry 2017 - 2025</p>
                            </div>
                        </Col>
                        <Col lg="4">
                            <div className="footer-item">
                                <h3>Company</h3>
                                <ul>
                                    <li><a href="/about">About Us</a></li>
                                    {/* <li><a href="/Trending">Trending</a></li> */}
                                    <li><a href="/Bracelets">Bracelets</a></li>
                                    <li><a href="/Rings">Rings</a></li>
                                    <li><a href="/Necklaces">Necklaces</a></li>
                                    <li><a href="/earrings">Earrings</a></li>
                                    <li><a href="/contact">Contact Us</a></li>
                                </ul>
                            </div>
                        </Col><Col lg="4">
                            <div className="footer-item">
                                <h3>Contact Us</h3>
                                <p>office address and mobile number</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    )
}

export default Footer;