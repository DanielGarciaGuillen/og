import React, { Component } from "react";
import styled from "styled-components";

const Contribute = styled.div`
  grid-area: containerR;
  font-size: 18px;
  width: 15%;
  border-radius: 3px;
  height: 100px;
  color: #1da1f2;
  text-align: center;
  padding: 4px;
  opacity: 0.9;

  :hover {
    opacity: 1;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

const ContributeButton = styled.a`
  background: #ff5c5c;
  border-radius: 3px;
  padding: 8px;
  text-transform: uppercase;
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  border: 0px;
  :hover {
    background: linear-gradient(to right, #00d2ff, #928dab);
    border: 1px solid white;
  }
`;

class Sticky extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollingLock: false
    };
    // example how to bind object in React ES6
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  toTop() {
    window.scrollTo(0, 0);
  }
  handleScroll() {
    if (window.scrollY > 2000) {
      console.log("should lock");
      this.setState({
        scrollingLock: true
      });
    } else if (window.scrollY < 1400 || window.scrollY > 1999) {
      console.log("not locked");
      this.setState({
        scrollingLock: false
      });
    }
  }

  render() {
    return (
      <Contribute>
        <div
          style={{
            gridArea: "containerR",
            position: this.state.scrollingLock ? "fixed" : "relative",
            marginTop: this.state.scrollingLock ? "50px" : "5000px",
            marginRight: this.state.scrollingLock ? "-120px" : "-120px",
            width: "10%",
            cursor: "pointer"
          }}
        >
          <a onClick={this.toTop.bind(this)}>
            <img src={require("../images/cat.gif")} />
          </a>{" "}
        </div>
      </Contribute>
    );
  }
}

export default Sticky;
