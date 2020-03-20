import React, { useState } from 'react';
import styled from 'styled-components'
import './App.css';

import Hanoi from './components/Hanoi';
import Controls from './components/Controls';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const App = () => {
  const initialDiscs = [[2, 1, 0], [], []]

  const getSize = () => {
    let max = 0;
    for (let peg of discs) {
      for (let disc of peg) {
        if (disc > max) max = disc
      }
    }
    return max+1;
  }
  const resize = (x) => {
    console.log(`Trying to resize to ${x}`);
    const ans = [[...Array(x).keys()], [], []];
    setDiscs(ans);
  }
  const [discs, setDiscs] = useState(initialDiscs);

  //Helper function that takes 2 pegs and figures out setDiscs
  const pegMove = (from, to) => {
    console.groupCollapsed("pegMove");
    console.log(`pegMove called from ${from} to ${to}`);

    // Do a deep copy
    const newDiscs = discs.map(peg => peg.slice(0));

    // Change the deep copy
    let mover = newDiscs[from].pop();
    let movee = newDiscs[to][newDiscs[to].length-1];
    if (movee === undefined) movee = "nope";
    if (mover === undefined) {
      if (from !== to) console.error(`pegMove failed - no discs on ${from}!`);
      console.groupEnd("Hanoi");
      return;
    }
    if (mover > movee) {
      console.error(`pegMove failed - peg ${to} has a disc of size ${movee}, which is smaller than ${mover}!`)
      console.groupEnd("Hanoi");
      return;
    }
    newDiscs[to].push(mover);

    // Finish the move
    setDiscs(newDiscs);
    console.groupEnd("Hanoi");
  }

  return (
    <StyledApp>
      <Controls increment={() => resize(getSize(discs)+1)} decrement={() => resize(getSize(discs)-1)}/>
      <Hanoi discs={discs} move={pegMove}/>
      {/* <button onClick={() => setDiscs([[0], [1], [2]])}>Make it 012 </button> */}
    </StyledApp>
  );
}

export default App;
