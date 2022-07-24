import React from "react";

const EyeChatch = (props) => {
  return (
    <div>
      <div
        style={{
          zIndex: "-2",
          position: "relative",
          width: "100%",
          height: "100vh",
        }}
      />
      <div
        style={{
          background: `url("https://onl.bz/QajeSuW") no-repeat center`,
          position: "fixed",
          zIndex: "-1",
          width: "100%",
          height: "100vh",
          top: "0",
          left: "0",
        }}
      >
        <div style={{
          position: 'fixed',
          top: "50%",
          color: "white"
        }}>{props.children}</div>
      </div>
    </div>
  );
};

export default EyeChatch;
