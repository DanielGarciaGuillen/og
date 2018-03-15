import React, { Component } from "react";
import Waypoint from "react-waypoint";
import "./App.css";
import ChangeTheme from "./components/button";

var list = [];
const API = "http://api.giphy.com/v1/gifs/search?q=";
const Key = "&api_key=dc6zaTOxFJmzC&limit=40&offset=";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      offset: 0,
      query: "design"
    };
    this.getGifs = this.getGifs.bind(this);
    /* this.handleUpdateQuery = this.handleUpdateQuery.bind(this); */
  }

  //API call with Props
  componentDidMount() {
    function dataFetch() {
      fetch(API + `${this.state.query}` + Key + `${this.state.offset}`)
        .then(response => response.json())
        .then(data => {
          list = data.data;
          this.setState({ list });
          console.log(this.state);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  //API call to do Infinite Scrolling, firing on  <Waypoint onEnter={this.getGifs}
  //The funcion also manages the state relaetd to offset, everytime it does
  //an API call the offset is set to the amount of the calls already done so
  //the infite scroll doesn't repeat Gifs.
  getGifs() {
    this.setState({ offset: this.state.offset + 40 });
    fetch(API + `${this.state.query}` + Key + `${this.state.offset}`)
      .then(response => response.json())
      .then(data => {
        //Spread operator to push data into the List array
        list.push(...data.data);
        this.setState({ list });
      })

      .catch(error => {
        console.error(error);
      });
  }

  //Callback from Button Component to update query search
  handleUpdateQuery = query => {
    list = [];
    //Set State to prop.query passed by the Button Component, reset arry list and offset.
    this.setState({
      query: query,
      list: list,
      offset: 0
    });
    console.log(this.state);
    //Call API with new props
    fetch(API + `${this.state.query}` + Key + `${this.state.offset}`)
      .then(response => response.json())
      .then(data => {
        list = data.data;

        console.log(this.state);
      })
      .catch(error => {
        console.error(error);
      });

    this.setState({ list: list });
  };

  render() {
    //Mapping through the list array.
    const listItems = list.map(gif => (
      <li className="gif" key={gif.id}>
        <a className="linkGif" href={gif.url} target="_blank">
          <img
            className="gifImage"
            alt={gif.title}
            src={gif.images.downsized.url}
          />
        </a>
      </li>
    ));

    return (
      //GRID
      <div className="container">
        {/* //Header */}
        <div className="header" id="animationBackground" />
        {/* Buttons */}
        <ChangeTheme onClick={this.handleUpdateQuery.bind(this)} />

        <h1 className="Title">
          DEsign.!.<br />{" "}
        </h1>
        <div className="main gallery">
          {listItems}
          <Waypoint onEnter={this.getGifs} />
        </div>
      </div>
    );
  }
}

export default App;
