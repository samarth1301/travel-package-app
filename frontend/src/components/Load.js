import React, { useState } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function Loader() {
  let [loading, setLoading] = useState(true);
  return (
    <div style={{ marginTop: "120px" }} className="text-center">
      <center>
        <div className="sweet-loading">
          <ClimbingBoxLoader
            color="#ff9900"
            cssOverride={{}}
            loading={loading}
            size={-4}
            speedMultiplier={1}
          />{" "}
        </div>
      </center>
    </div>
  );
}
export default Loader;

