import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";
function LogHistoryData({ data }) {
  return (
    <ListGroup>
      <h1>Log History List</h1>
      {data.map((item) => {
        const parsedTime = new Date(item["time"]);
        const formattedTime = `${parsedTime.toLocaleDateString()} ${parsedTime.toLocaleTimeString()}`;
        return (
          <ListGroup.Item key={item.id}>
            {formattedTime} - Notified to {item["user"]} by
            {item["channel_type"]}, Message: {item["message"].message}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export default LogHistoryData;
