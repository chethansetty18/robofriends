import React from "react";
import "./Card.css";

class Card extends React.Component {
  handleMouseMove = (event) => {
    let targetNode = event.currentTarget;
    let imgNode = targetNode.firstChild.firstChild.firstChild.firstChild;
    imgNode.style.transform = "translateZ(2px)";
  };

  handleMouseOut = (event) => {
    let targetNode = event.currentTarget;
    let imgNode = targetNode.firstChild.firstChild.firstChild.firstChild;
    imgNode.style.transform = "translateZ(0px)";
  };
  render() {
    const name = this.props.name;
    const email = this.props.email;
    const userName = this.props.username;
    const url = `https://robohash.org/${userName}?100x100`;

    return (
      <div
        className="Card"
        onMouseMove={this.handleMouseMove}
        onMouseOut={this.handleMouseOut}
      >
        <div className="top">
          <div className="photoBack">
            <div className="photoHold">
              <img alt="photo" src={url}></img>
            </div>
          </div>
        </div>
        <div className="data">
          <h4>{name}</h4>
          <h4>{email}</h4>
        </div>
      </div>
    );
  }
}

export default Card;
