// Card.js
import React from "react";
import { Card } from "antd";
import {
  CheckCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import './Card.css'

function CardComponent({id, title, description, buttonText,userId,userMap }) {
  function getUserName(str) {
    for (let i = 0; i < userMap.length; i++) {
      if (userMap[i].id === str) {
        return  userMap[i].name
      }
    }
  }
  return (
    <Card className="card">
      <div className="cardTitle" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "#B8BABE" }}>
        <div>{id}</div>
      <div style={{color:"black"}}><UserOutlined style={{ marginRight: "5px" }} />
             {getUserName(userId)}</div>
      </div>
      <div className="card-body">
        <h5 className="card-title" >
          <CheckCircleOutlined
            style={{ marginRight: "5px", color: "#52c41a" }}
          />
          {title}
        </h5>
        <div className="card-text">
          {description}
        </div>
      </div>
    </Card>
  );
}

export default CardComponent;
