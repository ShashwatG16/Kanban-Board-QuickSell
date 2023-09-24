import React from "react";
import CardComponent from "../card/Card.js";
//import "./Tickets.css"

import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

const Ticket = ({ ticket , userMap}) => {
  const { title, status, priority, userId ,id} = ticket;

  return (
    <CardComponent
    id = {id}
    userId = {userId}
      title={title}
      userMap = {userMap}
      description={
        <div className="discText">
  <span style={{  color: "#694DDB" }}>
    <CheckCircleOutlined
      style={{ marginRight: "5px" }}
    />
    Status: {status}
  </span>
  <span>
    <ExclamationCircleOutlined
      style={{ marginLeft: "15px", marginRight: "5px", color: "#faad14" }}
    />
    Priority:{priority}
  </span>
</div>

      }
    />
  );
};

export default Ticket;
