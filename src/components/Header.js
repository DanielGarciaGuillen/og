import React from 'react';
import styled from 'styled-components';


const HeaderDiv = styled.div`
    grid-column: 2/4;
    height: 100%;
    border-radius: 10px;
    align-self: start; 
    background: linear-gradient(-45deg, #feac5e, #c779d0, #4bc0c8);
    background-size: 400% 400%;
    -webkit-animation: Gradient 25s ease infinite;
    -moz-animation: Gradient 25s ease infinite;
    animation: Gradient 25s ease infinite;
    &:hover {
    background: linear-gradient(-45deg, #feac5e, #c779d0, #4bc0c8);
    background-size: 400% 400%;
    -webkit-animation: Gradient 5s ease infinite;
    -moz-animation: Gradient 5s ease infinite;
    animation: Gradient 5s ease infinite;
    }
    @-webkit-keyframes Gradient {
      0% {
      background-position: 0% 50%;
    }
      50% {
      background-position: 100% 50%;
    }
      100% {
      background-position: 0% 50%;
    }
  }
  `
const Header = () => ( <HeaderDiv/> )

export default Header;