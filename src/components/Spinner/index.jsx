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
  backgroundColor: "rgba(0, 0, 0, 0.7)", // Fondo negro semitransparente
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999, // Asegura que el spinner esté en la parte superior
};

function Spinner() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulación de carga, reemplaza con tu lógica real
  }, []);

  return (
    <div style={spinnerContainerStyle}>
      <ClipLoader
        color={color}
        loading={loading}
        css={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;
