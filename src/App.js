import NavBar from './features/NavBar/NavBar';
import Banner from './features/Banner/Banner';
import AboutHolder from './features/AboutHolder/AboutHolder';
import Projects from './features/Projects/Projects';
import Contacts from './features/Contacts/Contacts';
import Footer from './features/Footer/Footer';
import { Helmet } from 'react-helmet-async';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <Helmet>
                <title>Andrii Bildii Portfolio</title>
                <meta
                    name="description"
                    content="Portfolio website by Andrii Bildii with using ReactJS"
                />
                <link
                    rel="canonical"
                    href="https://bildiiportfolioreact.netlify.app/"
                />
            </Helmet>
            <NavBar />
            <Banner />
            <AboutHolder />
            <Projects />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
