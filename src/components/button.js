import React from "react";
import "../App.css";
var query = "";

export class ChangeTheme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    /*  this.handleClick = this.handleClick.bind(this); */
    this.changeQuery = this.changeQuery.bind(this);
    this.validateTitle = this.validateTitle.bind(this);
  }

  changeQuery({ currentTarget }) {
    query = currentTarget.value;
    this.setState({ text: query }, function() {
      this.validateTitle();
    });
  }
  validateTitle() {
    const { onClick } = this.props;
    onClick(query);
    console.log(this.props);
    console.log(this.state);
  }

  /*  handleClick({ currentTarget }) {
    const query = currentTarget.value;
    this.setState({ text: query });

    console.log(this.props);
    console.log(this.state);
    //On Submit is coming from the app component binded to handleUpdateLocation
    const { onClick } = this.props;
    onClick(query);
  } */

  render() {
    const { query } = this.state;
    return (
      <div className="buttons">
        <button className="button" value="design" onClick={this.changeQuery}>
          Design
        </button>
        <button className="button" value="motion" onClick={this.changeQuery}>
          Motion
        </button>
        <button
          className="button"
          value="architecture"
          onClick={this.changeQuery}
        >
          Architecture
        </button>
        <button className="button" value="3d" onClick={this.changeQuery}>
          3d
        </button>
        <button
          className="button"
          value="digital%20art"
          onClick={this.changeQuery}
        >
          Digital Art
        </button>
        <button className="button" value="pixelart" onClick={this.changeQuery}>
          Pixel Art
        </button>
        <button className="button" value="animation" onClick={this.changeQuery}>
          Animation
        </button>
        <button className="button" value="render" onClick={this.changeQuery}>
          Render
        </button>
        <button className="button" value="art" onClick={this.changeQuery}>
          Art
        </button>
      </div>
    );
  }
}

export default ChangeTheme;
