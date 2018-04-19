import React from "react";
import "../App.css";

var query = "";

export class ChangeTheme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      show: false
    };

    this.handleQuery = this.handleQuery.bind(this);
    this.validateTitle = this.validateTitle.bind(this);
    this.toggleButtons = this.toggleButtons.bind(this);
  }

  //Show/Hide Buttons on Mobile
  toggleButtons(e) {
    this.setState({ show: !this.state.show });
  }
  //Async function to setState
  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  //Getting value from clicked button and passing it to parent component
  async handleQuery({ currentTarget }) {
    query = currentTarget.value;
    await this.setStateAsync({ text: query, show: false });
    await this.validateTitle();
    window.scrollTo(0, 0);
  }

  //Passsing props to callback on parent component
  validateTitle() {
    const { onClick } = this.props;
    onClick(query);
  }

  render() {
    return (
      //ON CLICK CLOSE MENU
      <div className="menu">
        <button
          className="toggle"
          checked={this.state.show}
          onClick={this.toggleButtons}
        >
          Pick a Theme<br />{" "}
          <div className="emojihand">
            <span role="img" aria-label="HandDown">
              👇
            </span>
          </div>
        </button>

        <div className={this.state.show ? "buttons" : "noButtons"}>
          <button className="theme" value="design" onClick={this.handleQuery}>
            Design
          </button>
          <button className="theme" value="motion" onClick={this.handleQuery}>
            Motion
          </button>
          <button
            className="theme"
            value="architecture"
            onClick={this.handleQuery}
          >
            Architecture
          </button>

          <button className="theme" value="art" onClick={this.handleQuery}>
            Art
          </button>

          <button
            className="theme"
            value="digital%20art"
            onClick={this.handleQuery}
          >
            Digital Art
          </button>
          <button className="theme" value="" onClick={this.handleQuery}>
            Pixel
          </button>
          <button className="theme" value="8bit" onClick={this.handleQuery}>
            8bit
          </button>
          <button className="theme" value="3d" onClick={this.handleQuery}>
            3d
          </button>
          <button
            className="theme"
            value="animation"
            onClick={this.handleQuery}
          >
            Animation
          </button>
          <button className="theme" value="render" onClick={this.handleQuery}>
            Render
          </button>

          <button className="theme" value="space" onClick={this.handleQuery}>
            space
          </button>

          <button className="theme" value="glitch" onClick={this.handleQuery}>
            Glitch
          </button>
          <button
            className="theme"
            value="typography"
            onClick={this.handleQuery}
          >
            typography
          </button>
          <button className="theme" value="abstract" onClick={this.handleQuery}>
            abstract
          </button>
          <button className="theme" value="trippy" onClick={this.handleQuery}>
            trippy
          </button>
          <button className="theme" value="vintage" onClick={this.handleQuery}>
            vintage
          </button>
          <button
            className="theme"
            value="illustration"
            onClick={this.handleQuery}
          >
            illustration
          </button>
          <button
            className="theme"
            value="photography"
            onClick={this.handleQuery}
          >
            photography
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
      </div>
    );
  }
}

export default ChangeTheme;
