import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import RegisterNewMessage from "./views/RegisterNewMessage";
import reportWebVitals from "./reportWebVitals";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LogHistoryData from "./views/LogHistoryData";
import Image from "react-bootstrap/Image";

import backgroundImage from "./images/background.png"; // Import the image

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
