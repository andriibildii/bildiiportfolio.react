import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Col, Container, Row } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import images from './images';
import 'animate.css';
import './Certificates.css';

export const Certificates: React.FC = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const scrollWidth =
            carousel.current?.scrollWidth && carousel.current.scrollWidth;
        const offsetWidth =
            carousel.current?.offsetWidth && carousel.current.offsetWidth;

        if (scrollWidth && offsetWidth) setWidth(scrollWidth - offsetWidth);
    }, []);

    return (
        <section className="projects" id="certificates">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? 'animate__animated animate__slideInUp'
                                            : ''
                                    }
                                >
                                    <h2>Certificates</h2>
                                </div>
                            )}
                        </TrackVisibility>

                        <Row>
                            <Col>
                                <motion.div
                                    ref={carousel}
                                    className="carousel"
                                    whileTap={{ cursor: 'grabbing' }}
                                >
                                    <motion.div
                                        drag="x"
                                        dragConstraints={{
                                            right: 0,
                                            left: -width,
                                        }}
                                        className="inner-carousel"
                                    >
                                        {images.map((image, index) => {
                                            return (
                                                <motion.div
                                                    key={index}
                                                    className="item"
                                                >
                                                    <img
                                                        src={image}
                                                        alt="certificates"
                                                    />
                                                </motion.div>
                                            );
                                        })}
                                    </motion.div>
                                </motion.div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
