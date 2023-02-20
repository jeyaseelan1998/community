import React from "react";

const EmptyMsg = () => {
  return (
    <div
      className="empty-msg-container d-flex flex-column justify-content-center text-center"
      style={{ height: "80vh" }}
    >
      <h1>No Movies Added</h1>
    </div>
  );
};

export default EmptyMsg;
