import React, { Component } from "react";
import styled from "styled-components";

const GoTopDiv = styled.div`
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
    grid-area: buttonM;
  }
`;

const Goback = styled.img`
  width: 50px;
  heigth: 50px;
`;

class Sticky extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollingLock: false
    };
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
      this.setState({ scrollingLock: true });
    } else if (window.scrollY < 1400 || window.scrollY > 1999) {
      this.setState({ scrollingLock: false });
    }
  }

  render() {
    return (
      <GoTopDiv>
        <div
          style={{
            gridArea: "containerR",
            position: this.state.scrollingLock ? "fixed" : "relative",
            marginTop: this.state.scrollingLock ? "50px" : "5000px",
            marginRight: this.state.scrollingLock ? "-120px" : "-120px",
            marginLeft: this.state.scrollingLock ? "-20px" : "-20px",
            paddingTop: this.state.scrollingLock ? "250px" : "250px",
            width: "10%",
            cursor: "pointer"
          }}
        >
          <a href="gobacktop" onClick={() => this.toTop()}>
            <Goback src={require("../images/cat.gif")} />
          </a>
        </div>
      </GoTopDiv>
    );
  }
}

export default Sticky;
