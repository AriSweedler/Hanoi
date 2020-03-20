import React from 'react';
import styled from 'styled-components'

const StyledPeg = styled.div`
  border: solid 3px Red;
  flex-grow: 1;
  height: 100%;
`

function Peg(props) {
  console.group("Peg");

  console.groupEnd("Peg");
  return (
    <StyledPeg>
      <p>This is a Peg object. {props.discs}</p>
    </StyledPeg>
  );
}

export default Peg;
