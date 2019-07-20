import React, { Component } from 'react';
import themeList from "../config/gifThemeList";
import styled from 'styled-components'
import { isEmpty, sample } from 'lodash';
import gifThemeList from '../config/gifThemeList';



const ThemeMenu = styled.div`
  grid-area: containerR;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  padding-top: 12px;
  button.toggle:focus {
  outline: none !important;
  }
`

const ThemeButton = styled.button`
  background: none;
  color: black;
  text-transform: uppercase;
  border: 1px solid #e4e9ee;
  border-radius: 3px;
  height: 30px;
  opacity: 0.8;
  width: 60%;
  padding: 3px;
  margin: 10px;
  cursor: pointer;
`
/* 
button.toggle:focus {
  outline: none !important;
}

.toggle {
  background: #d66d75;
  background: -webkit-linear-gradient(to right, #e29587, #d66d75);
  background: linear-gradient(to right, #e29587, #d66d75);
  color: white;
  text-transform: uppercase;
  border: 0px solid #c779d0;
  border-radius: 3px;
  height: 50px;
  padding: 5px;
  font-size: 15px;
  margin: 20px;
  cursor: pointer;
  font-family: "Roboto Slab", serif;
  -ms-flex-align: center;
  align-items: center;
}

.toggle:hover {
  background: #d66d75;
  background: -webkit-linear-gradient(to right, #4bc0c8, #c779d0);
  background: linear-gradient(to right, #4bc0c8, #c779d0);
}

.toggle:hover > .emojihand {
  padding-top: 4px;
  animation: bounce 0.8s infinite alternate;
  -webkit-animation: bounce 0.8s infinite alternate;
}

@keyframes bounce {
  from {
    transform: translateY(-3px);
  }
  to {
    transform: translateY(0px);
  }
}
@-webkit-keyframes bounce {
  from {
    transform: translateY(-3px);
  }
  to {
    transform: translateY(0px);
  }
} */

class GifMenu  extends Component {
  constructor(props) {
    super(props);   
    this.state = {
      showMenu: false
    };
  } 

  toggleButtons(e) {
  this.setState({ show: !this.state.show });
  }

  render(){

     return(
    <ThemeMenu>
    <button
            className="toggle"
            checked={this.state.show}
            onClick={this.toggleButtons}
          >
            Pick a Theme<br />
            <div className="emojihand">
              <span role="img" aria-label="HandDown">
                👇
              </span>
            </div>
          </button>
    {isEmpty(gifThemeList) ? null :
         ( gifThemeList.map(theme => (
            <ThemeButton key={theme.id} value={theme.id} onClick={this.pickTheme}>
                {theme.buttonText}
            </ThemeButton>
         )))
    } 
    </ThemeMenu>
    
         )
    }
  }

export default GifMenu;