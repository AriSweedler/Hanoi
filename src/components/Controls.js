
import React from 'react';
import styled from 'styled-components'

const StyledControls = styled.div`
  display: flex;
  height: 10vh;
  border: solid 2px black;


  * {
    background: #ccc;
    flex-grow: 1;
    border: solid 5px orange;
  }

`

function Controls(props) {
  return (
    <StyledControls>
      <button onClick={props.decrement}>Decrement</button>
      <button onClick={props.increment}>Increment</button>
    </StyledControls>
  )
}

export default Controls;
