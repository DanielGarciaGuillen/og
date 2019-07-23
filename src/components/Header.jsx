import React from "react";
import styled from "styled-components";

const HeaderBarDiv = styled.div`
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
  @media (max-width: 768px) {
    grid-column: 1/4;
  }
`;

const Title = styled.h1`
  grid-area: subHeaderM;
  align-self: center;
  justify-self: start;
  font-size: 55px;
  color: #959e9f;
`;

const Subtitle = styled.h5`
  grid-area: subHeaderM;
  -ms-flex-item-align: center;
  align-self: center;
  font-size: 16px;
  padding-top: 69px;
  font-weight: 300;
  opacity: 0.9;
`;

const Header = () => (
  <React.Fragment>
    <HeaderBarDiv />
    <Title>DEsign.!.</Title>
    <br />
    <Subtitle>CREATIVE GIFS</Subtitle>
  </React.Fragment>
);

export default Header;
