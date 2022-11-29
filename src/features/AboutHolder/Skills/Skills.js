import ProgressData from './ProgressData/ProgressData';
import { Col, Row } from 'react-bootstrap';
import './Skills.css';

function Skills() {
    return (
        <Row className="justify-content-center">
            <Col xl={8} lg={8} md={9} xs={12}>
                <div className="my-skills">
                    <ProgressData name="HTML" progress={'75%'} />
                    <ProgressData name="CSS" progress={'50%'} />
                    <ProgressData name="Git & GitHub" progress={'35%'} />
                    <ProgressData name="JavaScript" progress={'35%'} />
                    <ProgressData
                        name="ReactJS/Redux/React Router"
                        progress={'35%'}
                    />
                    <ProgressData name="TypeScript" progress={'15%'} />
                </div>
            </Col>
        </Row>
    );
}

export default Skills;
