import React, { Component } from "react";
import Waypoint from 'react-waypoint';
import "./App.css";
import ChangeTheme from "./components/button";

var list = [];
const API = "http://api.giphy.com/v1/gifs/search?q=";
const Key = "&api_key=dc6zaTOxFJmzC&limit=50&offset=";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      offset: 0,
      query: "motion"
    };
    this.getGifs = this.getGifs.bind(this)
  }


  getGifs() {
    this.setState({ offset: this.state.offset + 50 })
    fetch(API + `${this.state.query}` + Key + `${this.state.offset}`)
      .then((response) => response.json())
      .then((data) => {
        list.push(...data.data);

        this.setState({ list })
      })

      .catch(error => {
        console.error(error);
      });
  }
  handleUpdateQuery = query => {
    this.setState({
      query: query,
      list: [],
      offset: 0,
    });
    //Improve design here
    fetch(API + `${this.state.query}` + Key + `${this.state.offset}`)
      .then((response) => response.json())
      .then((data) => {
        list = data.data;
        this.setState({ list })
        console.log(this.state)
      })
      .catch(error => {
        console.error(error);
      });
  };


  componentWillMount() {

    fetch(API + `${this.state.query}` + Key + `${this.state.offset}`)
      .then((response) => response.json())
      .then((data) => {
        list = data.data;
        this.setState({ list })
        console.log(this.state)
      })
      .catch(error => {
        console.error(error);
      });

  }

  /* componentWillReceiveProps(nextProps) {
    if ((this.props.query) !== (nextProps.query)) {
      console.log("new props!")
      this.getGifs();
    }
  }
 */
  render() {

    const listItems = list.map((gif) =>
      <li className="gif" key={gif.id}>
        <a className="linkGif" href={gif.url} target="_blank">
          <img className="gifImage" alt={gif.title} src={gif.images.downsized.url} />
        </a>
      </li >);

    return (


      <div className="container">
        <div className="header" id="animationBackground">
        </div>

        <ChangeTheme onClick={this.handleUpdateQuery} />

        <h1 className="Title">Design.!.<br /> </h1>
        <div className="main gallery">
          {listItems}
          <Waypoint
            onEnter={this.getGifs} />
        </div>

      </div>
    );
  }
}

export default App;


