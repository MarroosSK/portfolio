import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Row
      style={{ heigh: "100%", backgroundColor: "#16161616" }}
      className="text-center d-flex justify-content-center align-items-center"
    >
      <Col item xs={12} md={6} textAlign="center">
        <p fontSize="17px" style={{ color: "#fff" }}>
          Created by marroos
        </p>
      </Col>

      <Col
        item
        xs={12}
        md={4}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="10px"
        marginTop="40px"
      >
        <p fontSize="10px" style={{ color: "#fff", textAlign: "center" }}>
          @2023, All Rights Reserved
        </p>
      </Col>
    </Row>
  );
};

export default Footer;
