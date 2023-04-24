import ProjectCard from './ProjectCard/ProjectCard';
import { Col, Container, Row } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import socialPlatform from '../../assets/img/SP.webp';
import cryptoInfo from '../../assets/img/ctyptoInfo.webp';
import goReddit from '../../assets/img/go-reddit.webp';
import rhythm from '../../assets/img/jammingL.webp';
import lawFirm from '../../assets/img/lawfirm.webp';
import discussIt from '../../assets/img/discussit.png';
import hdmovies from '../../assets/img/hdmovies.png';
import contactPage from '../../assets/img/contactPage.png';
import 'animate.css';
import './Projects.css';

export const Projects: React.FC = () => {
    const projects = [
        {
            title: 'Contact page',
            description:
                'Template of contact page with the ability to send customers information and subscribe to news',
            tools: 'React/TypeScript/React Hook Form/React-Query/TailwindCSS/Headlessui/Vite',
            gitUrl: 'https://github.com/andriibildii/contact-page',
            appUrl: 'https://contact-page-bildii.vercel.app',
            imgUrl: contactPage,
        },
        {
            title: 'HDMovies',
            description:
                'Movie search application using Next.js 13 and the OMDB API',
            tools: 'Next.JS/TypeScript/TailwindCSS/Redux Toolkit/ OMDB API',
            gitUrl: 'https://github.com/andriibildii/hdmovies',
            appUrl: 'https://hdmovies.vercel.app',
            imgUrl: hdmovies,
        },
        {
            title: 'DiscussIt',
            description: 'Create and comment posts',
            tools: 'Next.JS/TypeScript/TailwindCSS/NextAuth/Prisma',
            gitUrl: 'https://github.com/andriibildii/discuss-it-web',
            appUrl: 'https://discuss-it-web.vercel.app/',
            imgUrl: discussIt,
        },
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
            title: 'Find your rhythm',
            description: 'Making playlists With the Spotify API',
            tools: 'ReactJS/async requests',
            gitUrl: 'https://github.com/andriibildii/jammming',
            appUrl: 'https://find-your-rhythm.surge.sh',
            imgUrl: rhythm,
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
