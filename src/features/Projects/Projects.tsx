import ProjectCard from './ProjectCard/ProjectCard';
import { Col, Container, Row } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import socialPlatform from '../../assets/img/SP.webp';
import cryptoInfo from '../../assets/img/ctyptoInfo.webp';
import goReddit from '../../assets/img/go-reddit.webp';
import loginRegister from '../../assets/img/login-register.webp';
import rhythm from '../../assets/img/jammingL.webp';
import flashcards from '../../assets/img/flashcards.webp';
import appointment from '../../assets/img/appointment.webp';
import lawFirm from '../../assets/img/lawfirm.webp';
import './Projects.css';

export const Projects: React.FC = () => {
    const projects = [
        {
            title: 'SocialPlatform',
            description: 'SPA of Social Platform',
            tools: 'ReactJS/TypeScript/React Redux/Axios/Material UI',
            gitUrl: 'https://github.com/andriibildii/social_platform',
            appUrl: 'https://social-platform-bildii.netlify.app',
            imgUrl: socialPlatform,
        },
        {
            title: 'CryptoInfo',
            description: 'SPA with using RapidAPI',
            tools: 'ReactJS/RTK Query/RapidAPI/Ant Design',
            gitUrl: 'https://github.com/andriibildii/crypto-info',
            appUrl: 'https://webcryptoinfo.netlify.app',
            imgUrl: cryptoInfo,
        },
        {
            title: 'Go/Reddit',
            description: "SPA with using Reddit's API",
            tools: 'ReactJS/Redux Toolkit/React Router/Fetch API',
            gitUrl: 'https://github.com/andriibildii/go-reddit',
            appUrl: 'https://go-reddit.netlify.app',
            imgUrl: goReddit,
        },
        {
            title: 'Login-Register',
            description: 'Login-Register Form with home page',
            tools: 'ReactJS/Redux Toolkit/React Router/Firebase',
            gitUrl: 'https://github.com/andriibildii/go-reddit',
            appUrl: 'https://login-register-app-react.netlify.app/login',
            imgUrl: loginRegister,
        },
        {
            title: 'Find your rhythm',
            description: 'Making playlists With the Spotify API',
            tools: 'ReactJS/async requests',
            gitUrl: 'https://github.com/andriibildii/jammming',
            appUrl: 'https://find-your-rhythm.surge.sh',
            imgUrl: rhythm,
        },
        {
            title: 'Flashcards',
            description:
                'App for create topics, quizzes for those topics, and flashcards for those quizzes',
            tools: 'Redux/Redux Toolkit',
            gitUrl: 'https://github.com/andriibildii/flashcards',
            appUrl: 'https://bildii-flashcards.netlify.app',
            imgUrl: flashcards,
        },
        {
            title: 'Appointment Planner',
            description: 'Manage contacts and appointments',
            tools: 'ReactJS/React Router',
            gitUrl: 'https://github.com/andriibildii/appointment-planner',
            appUrl: 'https://bildii-appointment-planner.netlify.app',
            imgUrl: appointment,
        },
        {
            title: 'Law Firm',
            description: 'Landing page for the law firm',
            tools: 'HTML/CSS',
            gitUrl: 'https://github.com/andriibildii/law_firm',
            appUrl: 'https://andriibildii.github.io/law_firm',
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
