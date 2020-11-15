import React, { Component } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import CardList from "./CardList";
import Scroll from "./Scroll";
import ErrorBoundary from "./ErrorBoundary";

export default class App extends Component {
  constructor() {
    super();
    this.state = { searchValue: "", robots: [] };
  }

  onSearchChange = (event) => {
    this.setState({ searchValue: event.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((robs) => this.setState({ robots: robs }));
  }
  render() {
    const { searchValue, robots } = this.state;
    const filteredRobots = robots.filter((robo) =>
      robo.name.toLowerCase().includes(searchValue.toLowerCase()) || 
      robo.email.toLowerCase().includes(searchValue.toLowerCase()
    );
    return (
      <div className="Body">
        <div>
          <SearchBar
            searchStr={searchValue}
            onSearchChange={this.onSearchChange}
          />
        </div>
        <div>
          <ErrorBoundary>
            <Scroll>
              <CardList robotList={filteredRobots} />
            </Scroll>
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}
