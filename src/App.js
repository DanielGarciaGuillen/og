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
  constructor() {
    super();
    this.state = {
      list: [],
      offset: 0,
      query: "design",
      loading: false
    };
    this.getGifs = this.getGifs.bind(this);
    this.handleUpdateQuery = this.handleUpdateQuery.bind(this);
  }

  //Async function to change state
  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  //API call
  async getGifs() {
    await this.setStateAsync({ offset: this.state.offset + 20, loading: true });
    const res = await fetch(
      API + `${this.state.query}` + Key + `${this.state.offset}`
    );

    const { data } = await res.json();
    //Spread operator to update list of Gifs
    list.push(...data);
    await this.setStateAsync({ list: list, loading: false });
  }

  //Callback from Child ChangeTheme Component
  async handleUpdateQuery(query) {
    list.length = 0;

    await this.setStateAsync({
      query: query,
      list: list,
      offset: 0,
      loading: true
    });

    const res = await fetch(API + `${this.state.query}` + ChangeKey);

    const { data } = await res.json();
    list.push(...data);
    await this.setStateAsync({ list: list });
    await this.setStateAsync({ loading: false });
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
          DEsign.!.<br />
        </h1>
        <h5 className="subtitle">creative gifs</h5>

        {/* Buttons */}
        <ChangeTheme onClick={this.handleUpdateQuery} />

        {/*  Scroll to top */}
        <Sticky />

        {/* Gifs */}
        <div className="main gallery">
          {listItems}
          {/* Infite Scroll, fires function when user reachs end of gifs*/}
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
