import React from "react";
import styled from "styled-components";

const LoadingImage = styled.img`
  grid-area: containerM;
  width: 150px;
  border-radius: 1550px;
  justify-self: center;
`;

const Loader = () => <LoadingImage src={require("../images/giphy.gif")} />;

export default Loader;
