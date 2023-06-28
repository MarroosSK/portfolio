import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/scrollspy.js";
import { Col, Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import { ErrorPage, Footer, Navigation } from "./components";

function App() {
  return (
    <div>
      <Navigation />
      <Row className="d-flex justify-content-center align-items-center">
        <Col>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </Col>
      </Row>
      <Footer />
    </div>
  );
}

export default App;
