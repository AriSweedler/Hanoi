import React from 'react';
import styled from 'styled-components';
import Peg from './Peg';


const StyledHanoi = styled.div`
  border: solid 4px blue;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const StyledDebugPrint = styled.div`
  border: solid 5px black;
`

const StyledControlPanel = styled.div`
  border: solid 5px green;
`

const StyledBoard = styled.div`
  border: dashed 5px red;
  display: flex;
  flex-grow: 1;
`

function Hanoi(props) {
  console.group("Hanoi");

  // TODO we eventually won't need this controlp anel
  const buttons = []
  for (let f = 0; f < props.discs.length; f++) {
    const btn_row = [];
    for (let t = 0; t < props.discs.length; t++) {
      btn_row.push(<button key={t} onClick={() => props.move(f, t)}>{f} to {t}</button>)
    }
    buttons.push(<div key={f}>{btn_row}</div>);
  }


  // TODO we eventually won't need this debugging print
  let printme = [];
  for (let i = 0; i < props.discs.length; i++) {
    let peg = <p key={i}>Peg {i} has: {props.discs[i].join(',')}</p>
    printme.push(peg);
  }

  // The visualization
  const pegs = [];
  for (let i = 0; i < props.discs.length; i++) {
    let peg = <Peg key={i}></Peg>
    pegs.push(peg);
  }

  console.groupEnd("Hanoi");
  return (
    <StyledHanoi>
      <p>This is the Hanoi app. The tower has {props.size} discs</p>
      <StyledDebugPrint>{printme}</StyledDebugPrint>
      <StyledBoard>{pegs}</StyledBoard>
      <StyledControlPanel>{buttons}</StyledControlPanel>
    </StyledHanoi>
  );
}

export default Hanoi;
