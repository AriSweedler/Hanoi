import React from 'react';
import styled from 'styled-components'

const StyledHanoi = styled.div`
  border: solid 4px blue;
`

function Hanoi(props) {
  const buttons = []
  for (let f = 0; f < props.discs.length; f++) {
    const btn_row = [];
    for (let t = 0; t < props.discs.length; t++) {
      btn_row.push(<button key={t} onClick={() => props.move(f, t)}>{f} to {t}</button>)
    }
    buttons.push(<div key={f}>{btn_row}</div>);
  }


  let printme = [];
  for (let i = 0; i < props.discs.length; i++) {
    console.log(`setting printme`);
    let peg = <p key={i}>Peg {i} has: {props.discs[i].join(',')}</p>
    printme.push(peg);
  }

  console.log(`DISCS in Hanoi: %o`, props.discs)

  return (
    <StyledHanoi>
      <p>This is the Hanoi app. The tower has {props.size} discs</p>
      <div>{printme}</div>
      <div>{buttons}</div>
    </StyledHanoi>
  );
}

export default Hanoi;
