import React, { Component } from "react";
import styled from "styled-components";
import { sample } from "lodash";
import { Waypoint } from "react-waypoint";
import ReturnTop from "./ReturnTop";
import GifList from "./GifList";
import Menu from "./Menu";
import Header from "./Header";
import GifThemeList from "../config/gifThemeList";
import Loader from "./Loader";

const AppLayout = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: 150px 1fr 250px;
  grid-template-rows: 60px 90px minmax(800px, auto) 50px 100px;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  font-family: "Catamaran", sans-serif;
  grid-template-areas:
    "headerL headerM headerR"
    "subHeaderL subHeaderM subHeaderR"
    "containerL containerM containerR"
    "waypointL waypointM waypointR"
    "footerL footerM footerR";
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 60px 90px auto auto 100px;
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    grid-template-areas:
      "headerM"
      "subHeaderM"
      "buttonM"
      "containerM"
      "footerM";
    background-color: #fff;
    font-family: "Catamaran", sans-serif;
    max-width: 100vw;
    place-items: center;
  }
`;
const WayPointDiv = styled.div`
  grid-area: waypointM;
  align-self: end;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      offset: 0,
      gifTheme: sample(GifThemeList).id,
      loading: false,
      showMenu: false
    };
  }

  componentDidMount() {
    const { gifTheme } = this.state;
    this.fetchGifs(gifTheme);
  }

  componentDidUpdate(prevProps, prevState) {
    const { gifTheme } = this.state;
    if (prevState.gifTheme !== gifTheme) {
      this.fetchGifs(gifTheme);
    }
  }

  fetchGifs(gifTheme) {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${gifTheme}&api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then(response => response.json())
      .then(({ data: gifs, pagination: { offset } }) =>
        this.setState({ gifs, loading: false, offset })
      );
  }

  toggleMenu = () => {
    const { showMenu } = this.state;
    this.setState({ showMenu: !showMenu });
  };

  chooseTheme = e => {
    window.scrollTo(0, 0);
    this.setState({
      gifTheme: e.target.value,
      gifs: [],
      loading: true,
      showMenu: false
    });
  };

  render() {
    const { gifs, showMenu, gifTheme, loading } = this.state;

    return (
      <AppLayout>
        <Header />
        <Menu
          showMenu={showMenu}
          toggleMenu={this.toggleMenu.bind(this)}
          chooseTheme={this.chooseTheme.bind(this)}
          gifTheme={gifTheme}
        />
        {loading ? (
          <Loader />
        ) : (
          <React.Fragment>
            <GifList gifs={gifs} />
          </React.Fragment>
        )}

        <ReturnTop />
      </AppLayout>
    );
  }
}

export default App;
