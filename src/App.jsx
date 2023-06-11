import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { About, Contact, Home, Projects } from "./pages";
import { ErrorPage, Footer, Navigation } from "./components";

function App() {
  return (
    <div className="position-relative">
      <Navigation />
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/*" element={<ErrorPage />} />
            </Routes>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
