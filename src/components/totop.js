import React, { Component } from "react";
import styled from "styled-components";

import "../App.css";

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
      this.setState({
        scrollingLock: true
      });
    } else if (window.scrollY < 1400 || window.scrollY > 1999) {
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
            paddingTop: this.state.scrollingLock ? "250px" : "250px",
            width: "10%",
            cursor: "pointer"
          }}
        >
          <a onClick={this.toTop.bind(this)}>
            <img className="toTop" src={require("../images/cat.gif")} />
          </a>{" "}
        </div>
      </Contribute>
    );
  }
}

export default Sticky;
