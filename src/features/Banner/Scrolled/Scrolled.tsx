import { useState, useEffect } from 'react';
import './Scrolled.css';

const Scrolled: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 250) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            {!scrolled && (
                <div className="scroll-container">
                    <span className="scroll-icon">
                        <span className="scroll-icon__wheel-outer">
                            <span className="scroll-icon__wheel-inner">
                                <h2>scroll</h2>
                            </span>
                        </span>
                    </span>
                </div>
            )}
        </>
    );
};

export default Scrolled;
