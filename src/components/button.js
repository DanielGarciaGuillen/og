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
    this.validateTitle = this.validateTitle.bind(this);
  }

  //Getting value from pressed button and setState to the value
  handleQuery = ({ currentTarget }) => {
    currentTarget.preventDefault;
    query = currentTarget.value;

    this.setState({ text: query }, function() {
      this.validateTitle();
    });
  };

  //Passsing props to callback on parent component
  validateTitle() {
    const { onClick } = this.props;
    onClick(query);
    console.log(this.props);
    console.log(this.state);
  }

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
        <div className="me">
          by <br />
          <a href="https://www.linkedin.com/in/danielgguillen/?locale=en_US">
            {" "}
            <img
              className="myGif"
              src={require("../images/mygif.gif")}
              alt="pictureofmyself"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default ChangeTheme;
