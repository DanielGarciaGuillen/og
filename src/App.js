import React, { Component } from "react";
import Waypoint from "react-waypoint";
import { BeatLoader } from "react-spinners";

import "./App.css";
/* import ChangeTheme from "./components/button"; */
import Sticky from "./components/totop";

import buttonList from "./buttonList";

const API = "http://api.giphy.com/v1/gifs/search?q=";
const Key = "&api_key=dc6zaTOxFJmzC&limit=20&offset=";
const ChangeKey = "&api_key=dc6zaTOxFJmzC&limit=20";

var list = [];
let query = "";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      offset: 0,
      query: "design",
      loading: false,
      show: false
    };
    this.getGifs = this.getGifs.bind(this);

    this.toggleButtons = this.toggleButtons.bind(this);
  }

  /* componentDidMount() {
    this.getGifs;
  } */

  toggleButtons(e) {
    this.setState({ show: !this.state.show });
    console.log(this.state);
    console.log("button clicked");
  }

  handleQuery({ currentTarget }) {
    query = currentTarget.value;
    this.setState(
      {
        query,
        loading: true,
        offset: this.state.offset + 20
      },
      this.getGifs
    );
  }

  //API call
  getGifs() {
    fetch(API + `${this.state.query}` + Key + `${this.state.offset}`)
      .then(res => res.json())
      .then(function(MyJson) {
        const results = MyJson;
        const { data } = results;
        list.push(...data);
      });
    //Spread operator to update list of Gifs

    this.setState({ list: list, loading: false });
  }

  //Callback from Child ChangeTheme Component
  /*   async handleUpdateQuery(query) {
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
  } */

  render() {
    const buttons = buttonList.map(button => {
      return (
        <button className="theme" value={button.id} onClick={this.handleQuery}>
          {button.button}
        </button>
      );
    });

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

        <div className="menu">
          <button
            className="toggle"
            checked={this.state.show}
            onClick={this.toggleButtons}
          >
            Pick a Theme<br />
            <div className="emojihand">
              <span role="img" aria-label="HandDown">
                👇
              </span>
            </div>
          </button>
          <div className={this.state.show ? "buttons" : "noButtons"}>
            {buttons}
            <div className="me">
              by <br />
              <a href="https://www.linkedin.com/in/danielgguillen/?locale=en_US">
                {" "}
                <img
                  className="myGif"
                  src={require("./images/mygif.gif")}
                  alt="pictureofmyself"
                />
              </a>
            </div>
          </div>
        </div>
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
