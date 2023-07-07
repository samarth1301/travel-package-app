import React from "react";

function Success({ message }) {
  return (
    <div>
      <div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>{message}</strong>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
}
export default Success;