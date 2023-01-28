import { useEffect, useRef } from 'react';
import './ProgressData.css';

type PropsType = {
    name: string;
    progress: string;
};

const ProgressData: React.FC<PropsType> = ({ name, progress }) => {
    const skillsRef = useRef<HTMLDivElement | null>(null);
    const progressRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        const progressData: string = progressRef.current?.dataset?.progress;

        function checkScroll(el: HTMLElement) {
            const rect = el.getBoundingClientRect();
            return window.innerHeight >= rect.top + el.offsetHeight;
        }

        const handleScroll = () => {
            if (skillsRef.current !== null) {
                if (!checkScroll(skillsRef.current)) return;
            }

            if (progressRef.current !== null) {
                progressRef.current.style.width = progressData;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [progress]);

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
};

export default ProgressData;
