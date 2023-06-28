import "./About.css";
import Title from "../Title/Title";
import { Button, Col, Image, Row } from "react-bootstrap";
import { personal } from "../../helpers/data";
import anonym from "../../assets/profilePic2.jpg";

const AboutMeBrief = () => {
  return (
    <Row className="d-flex flex-row justify-content-center ">
      <Title name="About me" />
      <hr style={{ color: "#2bffaa" }} />
      {/* foto+meno */}
      <Col
        xs={12}
        sm={12}
        md={6}
        className="d-flex flex-column justify-content-center"
      >
        <div className="align-self-center">
          <Image
            rounded
            src={anonym}
            className="img-fluid"
            style={{ height: "385px" }}
          />
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex flex-column">
              <h6 className="mt-2">{personal.name}</h6>
              <p style={{ fontSize: "12px" }}>React Developer</p>
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
      </Col>

      <Col xs={12} sm={12} md={6}>
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
