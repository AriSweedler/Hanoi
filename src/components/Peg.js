import React from 'react';
import styled from 'styled-components';
import Disc from './Disc';

// TODO how to make sure each peg always takes the same amount of space
const StyledPeg = styled.div`
  border: solid 3px Red;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`

function Peg(props) {
  console.groupCollapsed("Peg");
  let discs = []
  for (let p of props.discs) {
    console.log(`Gotta draw ${p}`);
    discs.unshift(<Disc key={p} num={p}/>)
  }

  console.groupEnd("Peg");
  return (
    <StyledPeg onClick={() => props.clicked()}>
      {discs}
    </StyledPeg>
  );
}

export default Peg;
