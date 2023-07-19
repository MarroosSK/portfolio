import { Col, Container, Row } from "react-bootstrap";
import { skillDesc, skillSet } from "../../helpers/data";
import { Link } from "react-router-dom";
const Tech = () => {
  return (
    <Row className="d-flex justify-content-center align-items-center">
      <Col className="d-flex flex-column justify-content-center">
        <Container>
          {/* Info */}
          <div style={{ margin: "35px", paddingBottom: "20px" }}>
            <Row className="d-flex justify-content-between">
              <h6 style={{ color: "#0D6EFD" }}>Knowledge</h6>
              <p style={{ marginBottom: "35px" }}>{skillDesc}</p>
              <Col className="d-flex justify-content-center align-items-center flex-wrap gap-2 gap-md-5">
                {skillSet.map((skill) => (
                  <div
                    className="d-flex flex-column justify-content-center align-items-center"
                    key={skill.id}
                  >
                    <p>{skill.name}</p>
                    <div
                      key={skill.id}
                      className="d-flex justify-content-center align-items-center p-2"
                      style={{
                        boxShadow: "none",
                        heigh: "150px",
                        width: "150px",
                        backgroundColor: "rgba(39, 39, 39, 0.2)",

                        borderRadius: "10px",
                        bottom: { xs: "10px", sm: "30px", md: "80px" },
                      }}
                    >
                      <Link
                        to={skill.url}
                        className="custom_icon"
                        style={{ textDecoration: "none" }}
                      >
                        <div className="d-flex flex-column justify-content-center align-items-center">
                          <div>{skill.icon}</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </Col>
            </Row>
          </div>
        </Container>
      </Col>
    </Row>
  );
};

export default Tech;
