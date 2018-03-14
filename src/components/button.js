import React from "react";
import "../App.css";

export class ChangeTheme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ currentTarget }) {
    const query = currentTarget.value;
    this.setState({ text: query });
    const { onClick } = this.props;

    console.log(this.props);
    console.log(this.state);
    //On Submit is coming from the app component binded to handleUpdateLocation
    onClick(query);
  }

  render() {
    return (
      <div className="buttons">
        <button className="button" value="design" onClick={this.handleClick}>
          Design
        </button>
        <button className="button" value="motion" onClick={this.handleClick}>
          Motion
        </button>
        <button
          className="button"
          value="architecture"
          onClick={this.handleClick}
        >
          Architecture
        </button>
        <button className="button" value="3d" onClick={this.handleClick}>
          3d
        </button>
        <button
          className="button"
          value="digital%20art"
          onClick={this.handleClick}
        >
          Digital Art
        </button>
        <button className="button" value="pixelart" onClick={this.handleClick}>
          Pixel Art
        </button>
        <button className="button" value="animation" onClick={this.handleClick}>
          Animation
        </button>
        <button className="button" value="render" onClick={this.handleClick}>
          Render
        </button>
        <button className="button" value="art" onClick={this.handleClick}>
          Art
        </button>
      </div>
    );
  }
}

export default ChangeTheme;
