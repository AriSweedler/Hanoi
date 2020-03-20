import React from 'react';
import styled from 'styled-components';
import Peg from './Peg';

const StyledHanoi = styled.div`
  border: solid 5px blue;
  flex-grow: 1;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

function Hanoi(props) {
  console.group("Hanoi");

  // The visualization
  const pegs = [];
  for (let i = 0; i < props.discs.length; i++) {
    let peg = <Peg key={i} clicked={() => props.pegClicked(i)} discs={props.discs[i]}></Peg>
    pegs.push(peg);
  }

  console.groupEnd("Hanoi");
  return (
    <StyledHanoi>{pegs}</StyledHanoi>
  );
}

export default Hanoi;
