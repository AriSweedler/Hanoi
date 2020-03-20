
import React from 'react';
import styled from 'styled-components'

const StyledControls = styled.div`
  display: flex;
  width: 100;

  * {
    flex-grow: 1;
    border: solid 2px orange;
    height: 12vh;
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
