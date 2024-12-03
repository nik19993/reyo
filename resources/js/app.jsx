import "./bootstrap";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./frontend/App";
if (document.getElementById("root")) {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);
}
