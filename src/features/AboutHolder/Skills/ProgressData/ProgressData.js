import { useEffect, useRef } from 'react';
import './ProgressData.css';

function ProgressData({ name, progress }) {
    const skillsRef = useRef(null);
    const progressRef = useRef(null);

    useEffect(() => {
        const progressData = progressRef.current.dataset;
        const progressStile = progressRef.current;

        function checkScroll(el) {
            let rect = el.getBoundingClientRect();
            return window.innerHeight >= rect.top + el.offsetHeight;
        }

        const handleScroll = () => {
            if (!checkScroll(skillsRef.current)) return;
            return (progressStile.style.width = progressData.progress);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="my-skill" ref={skillsRef}>
            <h3 className="my-skill-title">{name}</h3>
            <div className="my-skill-bar">
                <div
                    className="my-skill-progress"
                    ref={progressRef}
                    data-progress={progress}
                >
                    {name}
                </div>
            </div>
        </div>
    );
}

export default ProgressData;
