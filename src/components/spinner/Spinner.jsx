import React from "react";

import "./Spinner.css";

const Spinner = ({ style }) => {
  return (
    <div
      style={style}
      className="spinnerContainer d-flex justify-content-center align-items-center"
    >
      <div className="spinner-border spinner" role="status">
        {/* <span className="visually-hidden">Loading...</span> */}
      </div>
    </div>
  );
};

export default Spinner;
