
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "50vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ color: "red" }}>Error !</h1>
      <p>Sorry we're unable to find the page you're looking for. </p>
      <Link to="/">
        <button >
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
