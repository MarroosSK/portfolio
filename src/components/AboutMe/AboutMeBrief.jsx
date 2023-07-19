import "./About.css";
import Title from "../Title/Title";
import { Button, Col, Row } from "react-bootstrap";
import { personal } from "../../helpers/data";

const AboutMeBrief = () => {
  return (
    <Row className="d-flex flex-row justify-content-center">
      <Title name="About" />
      <hr style={{ color: "#0D6EFD" }} />
      <Col
        xs={12}
        sm={12}
        md={8}
        className="d-flex flex-column justify-content-center"
        style={{ marginTop: "50px", marginBottom: "50px" }}
      >
        <div className="d-fley justify-content-center align-items-center">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex flex-column">
              <h6 className="mt-2">{personal.name}</h6>
              <p style={{ fontSize: "15px" }}>Full-stack Developer</p>
            </div>
            <Button
              variant="outline-dark"
              href="/files/resumeMarosChmel.pdf"
              target="_blank"
              className="btn_size"
            >
              Check CV
            </Button>
          </div>
        </div>

        <p
          className="display-2"
          style={{ fontSize: "15px", margin: "35px", lineHeight: "32px" }}
        >
          {personal.info}
        </p>
      </Col>
    </Row>
  );
};

export default AboutMeBrief;
