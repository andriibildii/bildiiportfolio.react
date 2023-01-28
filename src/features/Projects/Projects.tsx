import ProjectCard from './ProjectCard/ProjectCard';
import { Col, Container, Row } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import cryptoInfo from '../../assets/img/ctyptoInfo.png';
import goReddit from '../../assets/img/go-reddit.png';
import loginRegister from '../../assets/img/login-register.png';
import rhythm from '../../assets/img/jammingL.png';
import flashcards from '../../assets/img/flashcards.png';
import appointment from '../../assets/img/appointment.png';
import lawFirm from '../../assets/img/lawfirm.png';
import './Projects.css';

export const Projects: React.FC = () => {
    const projects = [
        {
            title: 'CryptoInfo',
            description: 'SPA with using RapidAPI',
            tools: 'React/RTK Query/RapidAPI/Ant Design',
            gitUrl: 'https://github.com/andriibildii/crypto-info',
            appIrl: 'https://webcryptoinfo.netlify.app',
            imgUrl: cryptoInfo,
        },
        {
            title: 'Go/Reddit',
            description: "SPA with using Reddit's API",
            tools: 'React/Redux Toolkit/React Router/Fetch API',
            gitUrl: 'https://github.com/andriibildii/go-reddit',
            appIrl: 'https://go-reddit.netlify.app',
            imgUrl: goReddit,
        },
        {
            title: 'Login-Register',
            description: 'Login-Register Form with home page',
            tools: 'React/Redux Toolkit/React Router/Firebase',
            gitUrl: 'https://github.com/andriibildii/go-reddit',
            appIrl: 'https://login-register-app-react.netlify.app/login',
            imgUrl: loginRegister,
        },
        {
            title: 'Find your rhythm',
            description: 'Making playlists With the Spotify API',
            tools: 'React/async requests',
            gitUrl: 'https://github.com/andriibildii/jammming',
            appIrl: 'https://find-your-rhythm.surge.sh',
            imgUrl: rhythm,
        },
        {
            title: 'Flashcards',
            description:
                'App for create topics, quizzes for those topics, and flashcards for those quizzes',
            tools: 'Redux/Redux Toolkit',
            gitUrl: 'https://github.com/andriibildii/flashcards',
            appIrl: 'https://bildii-flashcards.netlify.app',
            imgUrl: flashcards,
        },
        {
            title: 'Appointment Planner',
            description: 'Manage contacts and appointments',
            tools: 'React/React Router',
            gitUrl: 'https://github.com/andriibildii/appointment-planner',
            appIrl: 'https://bildii-appointment-planner.netlify.app',
            imgUrl: appointment,
        },
        {
            title: 'Law Firm',
            description: 'Landing page for the law firm',
            tools: 'HTML/CSS',
            gitUrl: 'https://github.com/andriibildii/law_firm',
            appIrl: 'https://andriibildii.github.io/law_firm',
            imgUrl: lawFirm,
        },
    ];

    return (
        <section className="projects" id="projects">
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
                                    <h2>Projects</h2>
                                    <p>
                                        These projects were created until my
                                        learning and can represent my skills
                                    </p>
                                </div>
                            )}
                        </TrackVisibility>

                        <Row>
                            <Col>
                                <div className="cards">
                                    {projects.map((project, index) => {
                                        return (
                                            <ProjectCard
                                                key={index}
                                                {...project}
                                            />
                                        );
                                    })}
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
