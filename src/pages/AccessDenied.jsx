
import React from "react";
import { Link } from "react-router-dom";
// import Header from "../layout/Header";

const AccessDenied = () => {
  return (
    <div>
      {/* <Header /> */}
      <div
        style={{
          display: "flex",
          height: "50vh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ color: "red" }}>OOOH! Access Denied</h1>
        <p>
          Sorry about that, but you don't have permission to access this page{" "}
        </p>
        <Link data-testid="link" to="/home">
          <button data-testid="Go-back-btn">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AccessDenied;
