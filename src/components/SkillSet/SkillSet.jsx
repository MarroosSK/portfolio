import { Col, Row } from "react-bootstrap";
import { icons } from "../../helpers/data";
import "./SkillSet.css";
import { Link } from "react-router-dom";

const SkillSet = () => {
  return (
    <Row className="d-flex">
      <Col className="d-flex justify-content-center align-items-center flex-wrap gap-2">
        {icons.map((socialMedia) => (
          <div key={socialMedia.name}>
            <Link to={socialMedia.url} className="custom_icon" target="_blank">
              {socialMedia.icon}
            </Link>
          </div>
        ))}
      </Col>
    </Row>
  );
};

export default SkillSet;
