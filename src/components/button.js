import React from "react";
import "../App.css";
import Responsive from "react-responsive";

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

var query = "";

export class ChangeTheme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      show: false
    };

    this.handleQuery = this.handleQuery.bind(this);
    this.handleQueryDesktop = this.handleQueryDesktop.bind(this);
    this.validateTitle = this.validateTitle.bind(this);
    this.toggleButtons = this.toggleButtons.bind(this);
  }
  toggleButtons(e) {
    e.preventDefault;
    this.setState({ show: !this.state.show });
  }

  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  async handleQuery({ currentTarget }) {
    currentTarget.preventDefault;
    query = currentTarget.value;
    await this.setStateAsync({ text: query, show: false });
    console.log(this.state);
    await this.validateTitle();
    window.scrollTo(0, 0);
  }

  async handleQueryDesktop({ currentTarget }) {
    currentTarget.preventDefault;
    query = currentTarget.value;
    await this.setStateAsync({ text: query });
    console.log(this.state);
    await this.validateTitle();
  }

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
      //MOBILE ON CLICK CLOSE MENU
      <div className="menu">
        <Mobile>
          <button
            className="toggle"
            checked={this.state.show}
            onClick={this.toggleButtons}
          >
            Pick a Theme<br /> 👇
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
            <button
              className="theme"
              value="abstract"
              onClick={this.handleQuery}
            >
              abstract
            </button>
            <button className="theme" value="trippy" onClick={this.handleQuery}>
              trippy
            </button>
            <button
              className="theme"
              value="vintage"
              onClick={this.handleQuery}
            >
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
        </Mobile>
        {/*   //DESKTOP ON CLICK DONT CLOSE MENU */}
        <Desktop>
          <div className="buttons">
            <button
              className="theme"
              value="design"
              onClick={this.handleQueryDesktop}
            >
              Design
            </button>
            <button
              className="theme"
              value="motion"
              onClick={this.handleQueryDesktop}
            >
              Motion
            </button>
            <button
              className="theme"
              value="architecture"
              onClick={this.handleQueryDesktop}
            >
              Architecture
            </button>

            <button
              className="theme"
              value="art"
              onClick={this.handleQueryDesktop}
            >
              Art
            </button>

            <button
              className="theme"
              value="digital%20art"
              onClick={this.handleQueryDesktop}
            >
              Digital Art
            </button>
            <button
              className="theme"
              value="pixel"
              onClick={this.handleQueryDesktop}
            >
              Pixel
            </button>
            <button
              className="theme"
              value="8bit"
              onClick={this.handleQueryDesktop}
            >
              8bit
            </button>
            <button
              className="theme"
              value="3d"
              onClick={this.handleQueryDesktop}
            >
              3d
            </button>
            <button
              className="theme"
              value="animation"
              onClick={this.handleQueryDesktop}
            >
              Animation
            </button>
            <button
              className="theme"
              value="render"
              onClick={this.handleQueryDesktop}
            >
              Render
            </button>

            <button
              className="theme"
              value="space"
              onClick={this.handleQueryDesktop}
            >
              space
            </button>

            <button
              className="theme"
              value="glitch"
              onClick={this.handleQueryDesktop}
            >
              Glitch
            </button>
            <button
              className="theme"
              value="typography"
              onClick={this.handleQueryDesktop}
            >
              typography
            </button>
            <button
              className="theme"
              value="abstract"
              onClick={this.handleQueryDesktop}
            >
              abstract
            </button>
            <button
              className="theme"
              value="trippy"
              onClick={this.handleQueryDesktop}
            >
              trippy
            </button>
            <button
              className="theme"
              value="vintage"
              onClick={this.handleQueryDesktop}
            >
              vintage
            </button>
            <button
              className="theme"
              value="illustration"
              onClick={this.handleQueryDesktop}
            >
              illustration
            </button>
            <button
              className="theme"
              value="photography"
              onClick={this.handleQueryDesktop}
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
        </Desktop>
      </div>
    );
  }
}

export default ChangeTheme;
{
  /* <div className="me">
      by <br />
      <a href="https://www.linkedin.com/in/danielgguillen/?locale=en_US">
        {" "}
        <img
          className="myGif"
          src={require("../images/mygif.gif")}
          alt="pictureofmyself"
        />
      </a>
    </div> */
}
