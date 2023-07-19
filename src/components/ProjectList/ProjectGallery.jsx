import { Button, Badge, Container, Card, Col, Row } from "react-bootstrap";
import { myProjects } from "../../helpers/data";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./ProjectGallery.css";
import { motion, useInView, useAnimation } from "framer-motion";
import Title from "../Title/Title";

const ProjectGallery = () => {
  const targetRef = useRef();
  const isInView = useInView(targetRef, { treshold: 0.2 });
  const animation = useAnimation();
  const [allProjects, setAllProjects] = useState(myProjects);

  useEffect(() => {
    if (isInView) {
      animation.start({
        y: 0,
        transition: { type: "spring", duration: 2, bounce: 0.1 },
      });
    }
  }, [isInView, animation]);

  return (
    <Row ref={targetRef}>
      <Container>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-3">
          <Title name="Projects" />
        </div>
        <hr style={{ color: "#0D6EFD" }} />
        <Col
          className="d-flex flex-column justify-content-center justify-content-sm-between align-items-center"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          <motion.div
            initial={{ y: "200vw" }}
            className="gallery"
            animate={animation}
          >
            {allProjects.map((project) => (
              <div
                className="d-flex flex-column flex-md-row mb-5"
                style={{ gap: "25px" }}
                key={project.id}
              >
                <Link to={project.url} target="_blank">
                  <img
                    src={project.img}
                    style={{ maxWidth: "400px" }}
                    className="img_hover"
                  />
                </Link>
                <Col key={project.id}>
                  <Card
                    style={{
                      height: "100%",
                      boxShadow: "none",
                      backgroundColor: "inherit",
                      border: "none",
                    }}
                  >
                    <Card.Body style={{ maxWidth: "500px" }}>
                      <Link to={project.url} target="_blank">
                        <Card.Title
                          style={{
                            fontSize: "20px",
                            color: "#0D6EFD",
                          }}
                        >
                          {project.title}
                        </Card.Title>
                      </Link>
                      <Card.Text
                        style={{
                          fontSize: "12px",
                          color: "#6f7071",
                        }}
                      >
                        {project.info}
                      </Card.Text>
                      {project.stack.map((tech) => (
                        <Badge
                          className="custom-badge"
                          style={{ color: "#6f7071" }}
                          key={tech}
                        >
                          {tech}
                        </Badge>
                      ))}
                      <div className="d-flex flex-row mt-3">
                        <Card.Link
                          href={project.url}
                          target="_blank"
                          className="source_code"
                        >
                          Live Preview
                        </Card.Link>
                        <Card.Link
                          href={project.source}
                          target="_blank"
                          className="source_code"
                        >
                          Source Code
                        </Card.Link>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
            ))}
          </motion.div>
        </Col>
      </Container>
      <div className="d-flex justify-content-center align-items-center">
        <Link
          to={"https://github.com/MarroosSK?tab=repositories"}
          target="_blank"
        >
          <Button
            className="btn btn-dark btn_size"
            style={{ color: "#000", marginBottom: "33px" }}
          >
            more projects
          </Button>
        </Link>
      </div>
    </Row>
  );
};

export default ProjectGallery;
