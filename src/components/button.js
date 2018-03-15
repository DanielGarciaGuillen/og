import React from "react";
import "../App.css";
var query = "";

export class ChangeTheme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.handleQuery = this.handleQuery.bind(this);
    /* this.changeQuery = this.changeQuery.bind(this); */
    this.validateTitle = this.validateTitle.bind(this);
  }

  //Try doing callback on Change Query and with the two functions

  /*  changeQuery() {
    this.setState({ text: query }, function() {
      this.validateTitle();
    });
  } */

  handleQuery = ({ currentTarget }) => {
    currentTarget.preventDefault;
    query = currentTarget.value;
    this.setState({ text: query }, function() {
      this.validateTitle();
    });
  };

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
        <button className="button" value="design" onClick={this.handleQuery}>
          Design
        </button>
        <button className="button" value="motion" onClick={this.handleQuery}>
          Motion
        </button>
        <button
          className="button"
          value="architecture"
          onClick={this.handleQuery}
        >
          Architecture
        </button>
        <button className="button" value="3d" onClick={this.handleQuery}>
          3d
        </button>
        <button
          className="button"
          value="digital%20art"
          onClick={this.handleQuery}
        >
          Digital Art
        </button>
        <button className="button" value="pixelart" onClick={this.handleQuery}>
          Pixel Art
        </button>
        <button className="button" value="animation" onClick={this.handleQuery}>
          Animation
        </button>
        <button className="button" value="render" onClick={this.handleQuery}>
          Render
        </button>
        <button className="button" value="art" onClick={this.handleQuery}>
          Art
        </button>
      </div>
    );
  }
}

export default ChangeTheme;
