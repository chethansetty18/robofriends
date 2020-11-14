import React from "react";
import "./Card.css";

const Card = (props) => {
  const name = props.name;
  const email = props.email;
  const userName = props.username;
  const url = `https://robohash.org/${userName}?100x100`;

  return (
    <div className="Card">
      <div>
        <img alt="photo" src={url}></img>
      </div>

      <div className="data">
        <h4>{name}</h4>
        <h4>{email}</h4>
      </div>
    </div>
  );
};

export default Card;
