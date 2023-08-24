import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const spinnerContainerStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  padding: "100px 0",
  backgroundColor: "black", // Semi-transparent black background
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999, // High z-index to be on top
};

function Spinner() {
  let [color, setColor] = useState("#ffffff");

  return (
    <div style={spinnerContainerStyle}>
      <ClipLoader
        color={color}
        css={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;
