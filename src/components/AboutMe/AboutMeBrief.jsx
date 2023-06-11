import { Col, Row } from "react-bootstrap";
import {  skillSet } from "../../helpers/data";
import { Link } from "react-router-dom";
import "./About.css";
const AboutMeBrief = () => {
  return (
    <Row
      style={{ width: "100vw", height: "100vh", backgroundColor: "#2bffaa" }}
    >
      <Col className="mt-5 d-flex gap-5 flex-column justify-content-center align-items-center">
        <h6
          className="display-6"
          style={{ fontSize: "25px", fontWeight: "bold" }}
        >
          Tech
        </h6>
        <div className="mt-3 d-flex flex-column flex-sm-row gap-1 gap-sm-3 gap-md-5">
          {skillSet.map((skill) => (
            <div key={skill.id}>
              <Link to={skill.url} className=" custom_icon2">
                {skill.icon}
              </Link>
            </div>
          ))}
        </div>
        <h6
          className="display-6 mt-3"
          style={{ fontSize: "25px", fontWeight: "bold" }}
        >
          Tech to Learn
        </h6>
        <p style={{ fontSize: "12px" }}>
          Tailwind.css, Styled Components, Next.js, and more...
        </p>
      </Col>
    </Row>
  );
};

export default AboutMeBrief;
