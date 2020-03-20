import React from 'react';
import styled from 'styled-components';

const StyledDisc = styled.div`
  border: solid 3px orange;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: ${props => 7 + (props.num / 4)}%;
  width: ${props => 40 + (props.num * 6)}%;
`


function Disc(props) {
  console.groupCollapsed("Disc");

  console.groupEnd("Disc");
  return (
    <StyledDisc num={props.num}>
      disc {props.num}
    </StyledDisc>
  );
}

export default Disc;
