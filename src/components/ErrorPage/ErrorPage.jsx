import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
      <h2>Something went wrong, page not found...</h2>
      <Button className="btn btn-secondary" onClick={() => navigate("/")}>
        back
      </Button>
    </div>
  );
};

export default ErrorPage;
