import React, { Component } from "react";
import styled from "styled-components";
import { sample, isEmpty } from "lodash";
import { Waypoint } from "react-waypoint";
import ReturnTop from "./ReturnTop";
import GifList from "./GifList";
import Menu from "./Menu";
import Header from "./Header";
import GifThemeList from "../config/gifThemeList";

const AppLayout = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: 150px 1fr 250px;
  grid-template-rows: 60px 90px minmax(800px, auto) 50px 100px;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  grid-template-areas:
    "headerL headerM headerR"
    "searchL searchM searchR"
    "containerL containerM containerR"
    "waypointL waypointM waypointR"
    "footerL footerM footerR";
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
      this.setState({ offset: 0 });
    }
  }

  fetchGifs(gifTheme) {
    this.setState({ loading: true });
    fetch(
      `${process.env.REACT_APP_API_URL}${gifTheme}${
        process.env.REACT_APP_API_KEY
      }`
    )
      .then(response => response.json())
      .then(({ data: gifs, pagination: { offset } }) =>
        this.setState({ gifs, loading: false, offset })
      );
  }

  addGifs(gifTheme, offset) {
    const updatedOffset = offset + 12;
    fetch(
      `${process.env.REACT_APP_API_URL}${gifTheme}${
        process.env.REACT_APP_API_KEY
      }${updatedOffset}`
    )
      .then(response => response.json())
      .then(({ data, pagination: { offset } }) => {
        const { gifs } = this.state;
        const updatedGifs = gifs.concat(...data);
        this.setState({
          gifs: updatedGifs,
          loading: false,
          offset
        });
      });
  }

  toggleMenu = () => {
    const { showMenu } = this.state;
    this.setState({ showMenu: !showMenu });
  };

  chooseTheme = e => {
    window.scrollTo(0, 0);
    this.setState({ gifTheme: e.target.value });
  };

  render() {
    const { gifs, showMenu, gifTheme, loading, offset } = this.state;

    return (
      <AppLayout>
        <Header />
        <Menu
          showMenu={showMenu}
          toggleMenu={this.toggleMenu.bind(this)}
          chooseTheme={this.chooseTheme.bind(this)}
          gifTheme={gifTheme}
        />
        {isEmpty(gifs) ? (
          "loading"
        ) : (
          <React.Fragment>
            <GifList gifs={gifs} />
            <WayPointDiv>
              <Waypoint
                onEnter={({ currentPosition }) => {
                  if (currentPosition === "inside") {
                    this.addGifs(gifTheme, offset);
                  }
                }}
              />
            </WayPointDiv>
          </React.Fragment>
        )}

        <ReturnTop />
      </AppLayout>
    );
  }
}

export default App;
