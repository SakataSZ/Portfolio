import React from "react";


const EyeChatch = (props) => {
  return (
    <div>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
        }}
      />
      <div
        style={{
          position: "fixed",
          zIndex: "-1",
          width: "100%",
          height: "100vh",
          top: "50%",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default EyeChatch;
