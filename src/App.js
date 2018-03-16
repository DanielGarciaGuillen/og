import React, { Component } from "react";
import Waypoint from "react-waypoint";
import { BeatLoader } from "react-spinners";

import "./App.css";
import ChangeTheme from "./components/button";
import Sticky from "./components/totop";

const API = "http://api.giphy.com/v1/gifs/search?q=";
const Key = "&api_key=dc6zaTOxFJmzC&limit=20&offset=";
const ChangeKey = "&api_key=dc6zaTOxFJmzC&limit=20";

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
    this.handleUpdateQuery = this.handleUpdateQuery.bind(this);
  }

  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }
  toTop() {
    window.scrollTo(0, 0);
  }

  async getGifs() {
    await this.setStateAsync({ offset: this.state.offset + 20, loading: true });
    const res = await fetch(
      API + `${this.state.query}` + Key + `${this.state.offset}`
    );
    console.log(this.state);
    const { data } = await res.json();
    list.push(...data);
    await this.setStateAsync({ list: list, loading: false });
    console.log(this.state);
  }

  //Callback from Child ChangeTheme Component
  async handleUpdateQuery(query) {
    list.length = 0;
    console.log(this.state);

    await this.setStateAsync({
      query: query,
      list: list,
      offset: 0,
      loading: true
    });

    const res = await fetch(API + `${this.state.query}` + ChangeKey);
    console.log(this.state);
    const { data } = await res.json();
    list.push(...data);
    await this.setStateAsync({ list: list });
    await this.setStateAsync({ loading: false });
    console.log(this.state);
  }

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
        <Sticky />
        {/* Gifs */}

        {/* Infite Scroll, fire fuctions on props when reached on the website */}

        <div className="main gallery">
          {" "}
          {listItems}
          <Waypoint onEnter={this.getGifs} />
        </div>

        {/* Loading Animation*/}
        <div className="spinner">
          <BeatLoader
            size={20}
            color={"#F7C59F"}
            loading={this.state.loading}
          />
        </div>
      </div>
    );
  }
}

export default App;
