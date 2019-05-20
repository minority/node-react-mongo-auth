import React from "react";
import style from "./index.module.scss";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className={style.notFoundWrapper}>
      <h1>404</h1>
      <h2>Not Found Page</h2>
      <p>
        Go to <Link to="/">Main Page</Link>
      </p>
    </div>
  );
};
