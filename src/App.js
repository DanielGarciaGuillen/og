import React, { Component } from "react";



import "./App.css";


var gifs = [];

var list = [];


/* const API = "http://api.giphy.com/v1/gifs/search?q=";
const DEFAULT_QUERY = "redux";
const KEY = "&api_key=dc6zaTOxFJmzC"; */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { gifs: [] };
  }

  componentWillMount() {
    fetch("http://api.giphy.com/v1/gifs/search?q=design&api_key=dc6zaTOxFJmzC&limit=30")
      .then((response) => response.json())
      .then((data) => {

        list = data.data;
        console.log(list);
        this.setState({ list })
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const listItems = list.map((gif) => <li className="gif" key={gif.id}>
      <img className="gifImage" alt={gif.title} src={gif.images.downsized.url} />
    </li >);

    return (
      <div className="main gallery">
        {listItems}
      </div>


    );
  }
}

export default App;
