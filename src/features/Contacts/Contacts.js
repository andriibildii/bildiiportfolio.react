import SocialIcons from '../../components/SocialIcons/SocialIcons';
import { Container, Col, Row } from 'react-bootstrap';
import './Contacts.css';

const Contacts = () => {
    return (
        <Container>
            <div className="contacts-bx wow slideInUp" id="contacts">
                <Row>
                    <Col xl={8} lg={8} md={12} xs={12}>
                        <h3>Let&apos;s connect on my social media:</h3>
                    </Col>
                    <Col xl={4} lg={4} md={6} xs={12}>
                        <SocialIcons />
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Contacts;
