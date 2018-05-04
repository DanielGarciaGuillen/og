import React, { Component } from "react";
import Waypoint from "react-waypoint";
import { BeatLoader } from "react-spinners";

import "./App.css";
/* import ChangeTheme from "./components/button"; */
import Sticky from "./components/totop";

import buttonList from "./buttonList";

const API = "http://api.giphy.com/v1/gifs/search?q=";
const Key = "&api_key=dc6zaTOxFJmzC&limit=12&offset=";

var list = [];
let query = "";
let results = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      offset: 0,
      query: "design",
      loading: false,
      show: false
    };
    this.getGifs = this.getGifs.bind(this);
    this.moreGifs = this.moreGifs.bind(this);
    this.toggleButtons = this.toggleButtons.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
  }

  componentDidMount() {
    fetch(API + `${this.state.query}` + Key)
      .then(res => res.json())
      .then(function(MyJson) {
        results = MyJson;
      })
      .then(() => {
        const { data } = results;
        this.setState({ list: data });
      });
  }

  toggleButtons(e) {
    this.setState({ show: !this.state.show });
  }

  handleQuery({ currentTarget }) {
    window.scrollTo(0, 0);
    list.length = 0;
    query = currentTarget.value;
    console.log(query);
    this.setState(
      {
        query: query,
        list: list,
        offset: 0,
        loading: true,
        show: false
      },
      this.getGifs
    );
  }

  //API call
  getGifs() {
    fetch(API + `${this.state.query}` + Key + `${this.state.offset}`)
      .then(res => res.json())
      .then(function(MyJson) {
        results = MyJson;
      })
      .then(() => {
        const { data } = results;
        list.push(...data);
        this.setState({ list, loading: false });
      });

    console.log(this.state);
  }

  moreGifs() {
    results.length = 0;
    this.setState(
      { offset: this.state.offset + 12, loading: true },
      this.getGifs
    );
    console.log(this.state);
  }

  render() {
    const { list } = this.state;
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
          <Waypoint onEnter={this.moreGifs} />
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
