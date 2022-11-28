import NavBar from './features/NavBar/NavBar';
import Banner from './features/Banner/Banner';
import AboutHolder from './features/AboutHolder/AboutHolder';
import Projects from './features/Projects/Projects';
import Contacts from './features/Contacts/Contacts';
import Footer from './features/Footer/Footer';
import { Helmet } from 'react-helmet';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <Helmet>
                <title>BildiiPortfolio</title>
                <meta
                    name="description"
                    content="Portfolio website by Andrii Bildii with using React"
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
