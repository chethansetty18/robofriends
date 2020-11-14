import React from "react";
import Card from "./Card";
import "./CardList.css";

const CardList = (props) => {
  return (
    <div className="bby">
      {props.robotList.map((robo) => {
        return (
          <Card
            key={robo.id}
            id={robo.id}
            name={robo.name}
            username={robo.username}
            email={robo.email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
