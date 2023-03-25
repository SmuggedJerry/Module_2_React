import React from "react";
import ReactDOMClient from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import App from "./app";

ReactDOMClient.createRoot(document.getElementById("root")).render(<App />);

// const container = document.getElementById("root");
// const root = ReactDOMClient.createRoot(container);
// root.render(<App />);
