import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/scrollspy.js";
import { Col, Container, Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import { ErrorPage, Footer, Navigation } from "./components";

function App() {
  return (
    <div>
      <Navigation />
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col>
            <Routes>
              <Route path="/" element={<Home />} />
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
