import React, { Component } from "react";

import "./App.css";

var gifs = [];

/* const API = "http://api.giphy.com/v1/gifs/search?q=";
const DEFAULT_QUERY = "redux";
const KEY = "&api_key=dc6zaTOxFJmzC"; */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { gifs: [] };
  }

  componentWillMount() {
    fetch("http://api.giphy.com/v1/gifs/search?q=redux&api_key=dc6zaTOxFJmzC")
      .then((response) => response.json())
      .then((data) => {

        gifs = data.data;
        console.log(gifs)
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="main gallery">
        <div className="gif">
          <h1>Computer Starter Kit</h1>

          <img
            src="https://www.w3.org/TR/css-flexbox-1/images/computer.jpg"
            alt="You get: a white computer with matching peripherals"
          />
        </div>

        <div className="gif">
          <h1>Computer Starter Kit</h1>

          <img
            src="https://www.w3.org/TR/css-flexbox-1/images/computer.jpg"
            alt="You get: a white computer with matching peripherals"
          />
        </div>

        <div className="gif">
          <h1>Computer Starter Kit</h1>

          <img
            src="https://www.w3.org/TR/css-flexbox-1/images/computer.jpg"
            alt="You get: a white computer with matching peripherals"
          />
        </div>
      </div>
    );
  }
}

export default App;
