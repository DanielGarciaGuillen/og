import React, { Component } from "react";
import styled from 'styled-components';



import Waypoint from "react-waypoint";
import { BeatLoader } from "react-spinners";
import { CSSTransitionGroup } from "react-transition-group";
import "./App.css";
import Sticky from "./totop";
import GifList from "./gifList";
import PickGifTheme from './PickGifTheme';
import Header from './Header';

const API = "http://api.giphy.com/v1/gifs/search?q=";
const Key = "&api_key=dc6zaTOxFJmzC&limit=12&offset=";

var list = [];
let query = "";
let results = [];

const AppLayout = styled.div`
    display: grid;
    min-height: 100vh;
    grid-template-columns: 150px 1fr 250px;
    grid-template-rows: 60px 90px auto 100px;
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    grid-template-areas:
      "headerL headerM headerR "
        "searchL searchM searchR "
        "containerL containerM containerR"
        "footerL footerM footerR ";
    
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      offset: 0,
      query: "abstract",
      loading: false,
      show: false
    };
    this.getGifs = this.getGifs.bind(this);
    this.moreGifs = this.moreGifs.bind(this);
    this.toggleButtons = this.toggleButtons.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
  }

  componentDidMount() {
    fetch(API + `${this.state.query}` + Key)
      .then(res => res.json())
      .then(function(MyJson) {
        results = MyJson;
      })
      .then(() => {
        const { data } = results;
        this.setState({ list: data });
      });
  }

  toggleButtons(e) {
    this.setState({ show: !this.state.show });
  }

  handleQuery({ currentTarget }) {
    window.scrollTo(0, 0);
    list.length = 0;
    query = currentTarget.value;
    console.log(query);
    this.setState(
      {
        query: query,
        list: list,
        offset: 0,
        loading: true,
        show: false
      },
      this.getGifs
    );
  }

  //API call
  getGifs() {
    fetch(API + `${this.state.query}` + Key + `${this.state.offset}`)
      .then(res => res.json())
      .then(function(MyJson) {
        results = MyJson;
      })
      .then(() => {
        const { data } = results;
        list.push(...data);
        this.setState({ list, loading: false });
      });
  }

  moreGifs() {
    results.length = 0;
    this.setState(
      { offset: this.state.offset + 12, loading: true },
      this.getGifs
    );
  }

  render() {
    const { list } = this.state;
    console.log(list)

  /*   
    const buttons = buttonList.map(button => {
      return (
        <button className="theme" key={button.id} value={button.id} onClick={this.handleQuery}>
          {button.button}
        </button>
      );
    });
 */
    const listItems = list.map(gif => (
      <li className="gif" key={gif.id}>
        <a className="linkGif" href={gif.url} target="_blank">
          <img
            className="gifImage"
            alt={gif.title}
            src={gif.images.fixed_width.url}
          />
        </a>
      </li>
    ));

    return (
      //GRID
      <AppLayout>
        {/* //Header */}
        <Header />
      
        <h1 className="title">
          DEsign.!.<br />
        </h1>
        <h5 className="subtitle">creative gifs</h5>

        <PickGifTheme />

     
      </AppLayout>
    );
  }
}

export default App;
