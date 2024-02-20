import React from "react";

function Loader(p) {
  return (
    <div
      className="loadingdiv"
      style={{
        width: p.width ? p.width : "inherit",
        height: p.height ? p.height : "inherit",
      }}
    >
      <div className="loading">loader</div>
    </div>
  );
}

export default Loader;
