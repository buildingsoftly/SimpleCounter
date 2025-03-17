import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

function SecondsCounter({ seconds }) {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
      <div className="display-4 p-4 border border-light rounded">
        <i className="fas fa-clock me-2"></i>
        {seconds}
      </div>
    </div>
  );
}

function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <SecondsCounter seconds={seconds} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
