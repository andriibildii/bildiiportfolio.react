import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import './SocialIcons.css';

export const SocialIcons: React.FC = () => {
    return (
        <div className="social-icon">
            <a
                href="https://www.linkedin.com/in/andrii-bildii-365709243/"
                target="__blank"
            >
                <FaLinkedinIn className="icon" />
            </a>
            <a href="https://www.instagram.com/andrii.bildii/" target="__blank">
                <FaInstagram className="icon" />
            </a>
            <a href="https://github.com/andriibildii" target="__blank">
                <FaGithub className="icon" />
            </a>
        </div>
    );
};
