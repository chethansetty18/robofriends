import React from "react";
import "./Card.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  handleMouseEnter = (event) => {};
  render() {
    const name = this.props.name;
    const email = this.props.email;
    const userName = this.props.username;
    const url = `https://robohash.org/${userName}?100x100`;

    return (
      <div className="Card" onMouseEnter={this.handleMouseEnter}>
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
