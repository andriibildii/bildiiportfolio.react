import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

function Footer() {
    return (
        <>
            <footer className="footer" id="footer">
                <Container>
                    <Row className="aligne-item-center">
                        <Col className="text-center-sm-end">
                            <p className="footer-logo">
                                andrii<span>bildii</span>
                            </p>
                        </Col>
                        <Col className="text-center-sm-end">
                            <p>CopyRight 2022. All Rights Reserved</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
}

export default Footer;
