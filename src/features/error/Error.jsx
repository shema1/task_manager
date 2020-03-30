import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <>
      <h1 className="error-page-title">Page Not Found</h1>
      <section class="error-container">
        <span>4</span>
        <span>
          <span class="screen-reader-text">0</span>
        </span>
        <span>4</span>
      </section>
      <div class="link-container">
        <Link className="more-link" to="/">
          Home
        </Link>
      </div>
    </>
  );
};

export default Error;
