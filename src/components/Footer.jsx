
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        <a href="/contact-us">Contact Us</a>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center py-3">
                        © {new Date().getFullYear()} EpiBooks
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
