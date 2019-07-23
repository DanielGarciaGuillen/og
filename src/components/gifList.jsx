import React from "react";
import styled, { keyframes } from "styled-components";

const breathingAnimation = keyframes`
  0% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  25% {
    -webkit-transform: scale(0.95);
    -ms-transform: scale(0.95);
    transform: scale(0.95);
  }

  60% {
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
  }

  100% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }
`;

const GifListContainer = styled.div`
  grid-area: containerM;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 1rem;
  justify-items: center;
`;

const GifItem = styled.li`
  display: flex;
  flex-flow: column;
  border-radius: 3rem;
  padding-top: 2rem;
  justify-content: center;
  align-self: center;
  justify-self: center;
  transition: all 200ms ease-in;
  transform: scale(1);
  border-radius: 3px;
  &:hover {
    animation: ${breathingAnimation} 2s linear infinite;
  }
`;

const GifImage = styled.img`
  align-self: center;
  max-height: 400px;
  max-width: 350px;
  min-height: 240px;
  min-width: 240px;
  border-radius: 3px;
`;

class GifList extends React.Component {
  render() {
    const { gifs } = this.props;
    return (
      <GifListContainer>
        {gifs.map(gif => (
          <GifItem key={gif.id}>
            <a href={gif.url} target="_blank" rel="noopener noreferrer">
              <GifImage alt={gif.title} src={gif.images.original.url} />
            </a>
          </GifItem>
        ))}
      </GifListContainer>
    );
  }
}

export default GifList;
