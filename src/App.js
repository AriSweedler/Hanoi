import React, { useState } from 'react';
import styled from 'styled-components'
import './App.css';

import Hanoi from './components/Hanoi';
import Controls from './components/Controls';

const StyledHanoi = styled.div`
  border: solid 3px red;
`

const App = () => {
  const [size, setSize] = useState(3);
  const initialDiscs = [[...Array(size).keys()], [], []]
  const [discs, setDiscs] = useState(initialDiscs);

  //Helper function that takes 2 pegs and figures out setDiscs
  const pegMove = (from, to) => {
    console.group("pegMove");
    console.log(`pegMove called from ${from} to ${to}`);

    let mover = discs[from].pop();
    let peg_to = discs[to]
    let movee = peg_to[peg_to.length-1];
    if (movee === undefined) movee = "nope";
    // console.log(`We're moving a ${mover}-disc onto a ${movee}-disc `);

    if (mover === undefined) {
      if (from !== to) console.error(`pegMove failed - no discs on ${from}!`);
      console.groupEnd("Hanoi");
      return;
    } else if (mover > movee) {
      console.error(`pegMove failed - peg ${to} has a disc of size ${movee}, which is smaller than ${mover}!`)
      console.groupEnd("Hanoi");
      return;
    }

    // Log and make it happen
    discs[to].push(mover);
    console.info("Discs: %o", discs);
    setDiscs(discs);
    console.groupEnd("Hanoi");
  }

  return (
    <StyledHanoi>
      <Controls increment={() => setSize(size+1)} decrement={() => setSize(size-1)}/>
      <Hanoi discs={discs} size={size} move={pegMove}/>
      <button onClick={() => setDiscs([[0], [1], [2]])}>Make it 012 </button>
    </StyledHanoi>
  );
}

export default App;
