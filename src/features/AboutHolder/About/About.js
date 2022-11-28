import getAge from '../../../utils/getAge';
import { Col, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div className="item personal-info-container">
            <div className="personal-info-items">
                <Row>
                    <Col
                        xl={{ span: 4, offset: 2 }}
                        md={{ span: 5, offset: 1 }}
                        xs={{ span: 6, offset: 0 }}
                    >
                        <div className="info-item">
                            <p>
                                <a>
                                    BIRTHDAY:
                                    <br />
                                    <span>22 july 1993</span>
                                </a>
                            </p>
                        </div>
                        <div className="info-item">
                            <p>
                                <a>
                                    AGE:
                                    <br />
                                    <span>{getAge('07/22/1993')}</span>
                                </a>
                            </p>
                        </div>
                        <div className="info-item">
                            <p>
                                <a
                                    href="mailto:andtii.bildii@gmail.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    EMAIL:
                                    <br />
                                    <span>andrii.bildii@gmail.com</span>
                                </a>
                            </p>
                        </div>
                        <div className="info-item">
                            <p>
                                <a>
                                    DEGREE:
                                    <br />
                                    <span>Master</span>
                                </a>
                            </p>
                        </div>
                    </Col>
                    <Col
                        xl={{ span: 4, offset: 0 }}
                        md={{ span: 5, offset: 0 }}
                        xs={{ span: 6, offset: 0 }}
                    >
                        <div className="info-item">
                            <p>
                                <a href="tel:+380689004783">
                                    PHONE:
                                    <br />
                                    <span>+38 068 900 47 83</span>
                                </a>
                            </p>
                        </div>
                        <div className="info-item">
                            <p>
                                <a>
                                    COUNTRY:
                                    <br />
                                    <span>Ukraine</span>
                                </a>
                            </p>
                        </div>
                        <div className="info-item">
                            <p>
                                <a>
                                    CITY:
                                    <br />
                                    <span>Kyiv</span>
                                </a>
                            </p>
                        </div>
                        <div className="info-item">
                            <p>
                                <a>
                                    LANGUAGES:
                                    <br />
                                    <span>english, ukrainian</span>
                                </a>
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default About;
