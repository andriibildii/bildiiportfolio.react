import React, { useEffect, useRef } from 'react';
import { FaGithub, FaChrome } from 'react-icons/fa';

import './ProjectCard.css';
import VanillaTilt from 'vanilla-tilt';

type PropsType = {
    title: string;
    description: string;
    tools: string;
    gitUrl: string;
    appUrl?: string;
    imgUrl: string;
};

type TiltPropsType = {
    children: React.ReactNode;
    className: string;
    id: string;
    options: {
        glare: boolean;
        'max-glare': number;
    };
};

const ProjectCard: React.FC<PropsType> = ({
    title,
    description,
    tools,
    gitUrl,
    appUrl,
    imgUrl,
}) => {
    function Tilt(props: TiltPropsType) {
        const { options, ...rest } = props;
        const tilt = useRef<HTMLDivElement | null>(null);

        useEffect(() => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            VanillaTilt.init(tilt.current, options);
        }, [options]);

        return <div ref={tilt} {...rest} />;
    }

    const options = {
        glare: true,
        'max-glare': 0.5,
    };

    return (
        <Tilt options={options} className="card" id="card">
            <div className="card-image">
                <img src={imgUrl} alt="card" />
            </div>
            <div className="card-text">
                <h2>{title}</h2>
                <p>{description}</p>
                <span>{tools}</span>
            </div>
            <div className="card-code">
                <div className="code border-l">
                    <a href={gitUrl} target="_blank" rel="noreferrer">
                        <FaGithub className="git" />
                    </a>
                </div>
                <div className="code border-r">
                    <a href={appUrl} target="_blank" rel="noreferrer">
                        <FaChrome className="chrome" />
                    </a>
                </div>
            </div>
        </Tilt>
    );
};

export default ProjectCard;
