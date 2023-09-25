import React from "react";
import style404 from "@/styles/404.module.css";

const NotFoundPage = () => {
  return (
    <div className={style404["error-container"]}>
      <h1 className={style404["error-title"]}>404 Not Found</h1>
      <p className={style404["error-message"]}>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFoundPage;
