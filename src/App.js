import React, { Component } from "react";
import Waypoint from "react-waypoint";

import { BeatLoader } from "react-spinners";
import Toggle from "react-toggle";

import "./App.css";
import ChangeTheme from "./components/button";

const API = "http://api.giphy.com/v1/gifs/search?q=";
const Key = "&api_key=dc6zaTOxFJmzC&limit=40&offset=";

var list = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      offset: 0,
      query: "design",
      loading: false
    };
    this.getGifs = this.getGifs.bind(this);
  }

  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  /* async componentDidMount() {
    const res = await fetch(
      API + `${this.state.query}` + Key + `${this.state.offset}`
    );
    console.log(this.state);
    const { data } = await res.json();
    list = data;
    await this.setStateAsync({ list: list });
    console.log(this.state);
  } */

  //API call with Props

  //API call to do Infinite Scrolling, firing on  <Waypoint onEnter={this.getGifs}
  //The funcion also manages the state related to offset, everytime you reach <Waypoint>
  //the offset is set to the amount of the calls already done, that way
  //the infite scroll doesn't repeat Gifs.

  async getGifs() {
    await this.setStateAsync({ offset: this.state.offset + 40, loading: true });

    const res = await fetch(
      API + `${this.state.query}` + Key + `${this.state.offset}`
    );
    console.log(this.state);
    const { data } = await res.json();
    list.push(...data);
    await this.setStateAsync({ list: list, loading: false });
    console.log(this.state);
  }

  /* fetch(API + `${this.state.query}` + Key + `${this.state.offset}`)
      .then(response => response.json())
      .then(data => {
        //Spread operator to push data into the List array
        list.push(...data.data);
        this.setState({ list });
        this.setState({ loading: false });
      })

      .catch(error => {
        console.error(error);
      });
    console.log(this.state);
  } */

  //Callback from Child ChangeTheme Component
  /* handleUpdateQuery = query => {
    list.length = 0;
    //Set query to prop.query passed by the Child Component, reset List arry and offset.
    this.setState({
      query: query,
      list: list,
      offset: 0,
      loading: true
    });
    console.log(this.state);
    //API Call with new props

    fetch(API + `${this.state.query}` + Key + `${this.state.offset}`)
      .then(response => response.json())
      .then(data => {
        list = data.data;
        console.log(this.state);
      })
      .then(this.setState({ list }))
      .catch(error => {
        console.error(error);
      });
    this.setState({ loading: false });
  }; */

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
        <h1 className="title">
          {" "}
          DEsign.!.<br />{" "}
        </h1>
        {/* Buttons */}

        <ChangeTheme onClick={this.handleUpdateQuery.bind(this)} />

        {/* Gifs */}

        {/* Infite Scroll, fire fuctions on props when reached on the website */}

        <div className="main gallery">
          {" "}
          {listItems}
          <Waypoint onEnter={this.getGifs} />
        </div>

        {/* Loading Animation*/}
        <BeatLoader size={150} color={"#F7C59F"} loading={this.state.loading} />
      </div>
    );
  }
}

export default App;
