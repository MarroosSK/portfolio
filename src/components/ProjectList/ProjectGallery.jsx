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

  const handleFilter = (word) => {
    if (word === "all") {
      setAllProjects(myProjects);
    } else {
      let filteredStuff = myProjects.filter(
        (project) => project.technologies === word
      );
      setAllProjects(filteredStuff);
    }
  };

  useEffect(() => {
    if (isInView) {
      animation.start({
        x: 0,
        transition: { type: "spring", duration: 1, bounce: 0.3 },
      });
    }
  }, [isInView, animation]);

  return (
    <Row ref={targetRef}>
      <Container>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-3">
          <Title name="Projects" />
          <div className="d-flex flex-column flex-sm-row gap-2">
            <Button
              variant="outline-dark"
              className="btn_size"
              onClick={() => handleFilter("all")}
            >
              All
            </Button>
            <Button
              variant="outline-dark"
              className="btn_size"
              onClick={() => handleFilter("Bootstrap")}
            >
              Bootstrap
            </Button>
            <Button
              variant="outline-dark"
              className="btn_size"
              onClick={() => handleFilter("Material-UI")}
            >
              Material-UI
            </Button>
          </div>
        </div>
        <hr style={{ color: "#2bffaa" }} />
        <Col className="d-flex flex-column">
          <motion.div
            className="d-flex flex-row flex-wrap  mb-5"
            initial={{ x: "-100vw" }}
            animate={animation}
          >
            {allProjects.map((project) => (
              <Col
                xs={12}
                key={project.id}
                className="d-flex  justify-content-center align-items-center mt-3"
              >
                <Card
                  style={{
                    maxWidth: "500px",
                    height: "100%",
                    boxShadow: "none",
                    backgroundColor: "rgba(39, 39, 39, 0.2)",

                    borderRadius: "10px",
                    bottom: { xs: "10px", sm: "30px", md: "80px" },
                  }}
                  className="d-flex flex-column custom_card"
                >
                  <Link to={project.url} target="_blank">
                    <Card.Img
                      variant="top"
                      src={project.img}
                      style={{ maxWidth: "500px", height: "100%" }}
                      className=" img_hover"
                      rounded
                    />
                  </Link>
                  <Card.Body>
                    <Card.Title style={{ fontSize: "20px" }}>
                      {project.title}
                    </Card.Title>
                    <Card.Text style={{ fontSize: "12px" }}>
                      {project.info}
                    </Card.Text>
                    {project.stack.map((tech) => (
                      <Badge className="custom-badge" key={tech}>
                        {tech}
                      </Badge>
                    ))}
                    <div className="d-flex flex-column flex-sm-row mt-3">
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
            ))}
          </motion.div>
        </Col>
      </Container>
      <div className="d-flex justify-content-center align-items-center">
        <Link
          to={"https://github.com/MarroosSK?tab=repositories"}
          target="_blank"
        >
          <Button className="btn btn-dark btn_size" style={{ color: "#000" }}>
            more projects
          </Button>
        </Link>
      </div>
    </Row>
  );
};

export default ProjectGallery;
