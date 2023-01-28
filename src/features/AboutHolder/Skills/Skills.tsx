import ProgressData from './ProgressData/ProgressData';
import { Col, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import './Skills.css';

const skills = [
    { name: 'HTML', progress: '75%' },
    { name: 'CSS', progress: '50%' },
    { name: 'Git & GitHub', progress: '35%' },
    { name: 'JavaScript', progress: '35%' },
    { name: 'ReactJS/Redux/React Router', progress: '35%' },
    { name: 'TypeScript', progress: '15%' },
];

export const Skills: React.FC = () => {
    return (
        <Row className="justify-content-center">
            <Col xl={8} lg={8} md={9} xs={12}>
                <div className="my-skills">
                    {skills.map(skill => (
                        <ProgressData
                            name={skill.name}
                            progress={skill.progress}
                            key={uuidv4()}
                        />
                    ))}
                </div>
            </Col>
        </Row>
    );
};
