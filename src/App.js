import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import { get } from "./services/LogHistoryService";
import "./App.css";
import RegisterNewMessage from "./views/RegisterNewMessage";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LogHistoryData from "./views/LogHistoryData";
import Image from "react-bootstrap/Image";

import backgroundImage from "./images/background.png"; // Import the image

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchLogHistoryData();
  }, []);

  const fetchLogHistoryData = async () => {
    try {
      const result = await get("log-history");
      setData(result);
      console.log("made a request to get the log-history")
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <React.StrictMode>
      <Container>
        <Image
          src={backgroundImage}
          fluid
          style={{ width: "100%", height: "150px" }}
        />
        <Row>
          <Col xs lg="3">
            <RegisterNewMessage fetchLogHistoryData={fetchLogHistoryData}/>
          </Col>
          <Col xs lg="9">
            <LogHistoryData data={data} />
          </Col>
        </Row>
      </Container>
    </React.StrictMode>
  );
}

export default App;
