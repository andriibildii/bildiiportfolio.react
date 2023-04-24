import { useState, useEffect } from 'react';
import Scrolled from './Scrolled/Scrolled';
import Nav from 'react-bootstrap/Nav';
import { Col, Container, Row } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../../assets/img//header-img.png';
import './Banner.css';

export const Banner: React.FC = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['developer...', 'front-end developer!'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        const ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text]);

    const tick = () => {
        const i = loopNum % toRotate.length;
        const fullText = toRotate[i];
        const updateText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updateText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 1.8);
        }

        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(100);
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center justify-content-center">
                    <Col xs={12} md={6} xl={6}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? 'animate__animated animate__fadeIn'
                                            : ''
                                    }
                                >
                                    <div className="logo">
                                        h<span>i </span>there.<span>.</span>.
                                    </div>
                                    <div className="text-container">
                                        <h1>
                                            {`Hi i'm `}
                                            <span className="txt-rotate">
                                                {text}
                                            </span>
                                        </h1>
                                    </div>
                                    <button>
                                        <Nav.Link href="#contacts">
                                            Let&apos;s Connect
                                            <ArrowRightCircle size={25} />
                                        </Nav.Link>
                                    </button>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col xs={11} md={6} xl={6}>
                        <div className="image-container">
                            <img src={headerImg} alt="Header Img" />
                        </div>
                    </Col>
                </Row>
                <Scrolled />
            </Container>
        </section>
    );
};
