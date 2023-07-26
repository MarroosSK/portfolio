import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Row
      style={{ heigh: "100%", backgroundColor: "#16161616" }}
      className="text-center d-flex justify-content-center align-items-center"
    >
      <Col xs={12} md={6} className="text-align-center">
        <p fontSize="17px" style={{ color: "#fff" }}>
          Created by marroos
        </p>
      </Col>

      <Col
        xs={12}
        md={4}
        className="d-flex flex-column justify-content-center align-items-center gap-5 mt-10"
      >
        <p fontSize="10px" style={{ color: "#fff", textAlign: "center" }}>
          @2023, All Rights Reserved
        </p>
      </Col>
    </Row>
  );
};

export default Footer;
