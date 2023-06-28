import {
  AboutMeBrief,
  ContactBrief,
  Hero,
  ProjectGallery,
  Tech,
} from "../../components";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <Row id="home">
      <Col className="d-flex flex-column justify-content-center align-items-center">
        <Container>
          <div id="home">
            <Hero />
          </div>
          <div id="about">
            <AboutMeBrief />
            <Tech />
          </div>
          <div id="projects">
            <ProjectGallery />
          </div>
          <div id="contact">
            <ContactBrief />
          </div>
        </Container>
      </Col>
    </Row>
  );
};

export default Home;
