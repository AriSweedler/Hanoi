
import React from 'react';
import styled from 'styled-components'

const StyledControls = styled.div`
  display: flex;
  flex-direction: column;
  border: solid turquoise 7px;
`

const StyledAlgorithm = styled.div`
  border: solid yellow 7px;
  height: 8vh;

  display: flex;
  justify-content: center;
  align-items: center;

  button {
    :hover {
      background: #ccc;
    }
    height: 100%;
    border: solid 5px LemonChiffon;
  }
`

const StyledTODO = styled.div`
  border: solid red 4px;
`

const StyledSizeChange = styled.div`
  display: flex;
  height: 8vh;
  border: solid 2px black;

  // TODO am I CSS selecting what I mean to here?
  * {
    :hover {
      background: #ccc;
    }
    flex-grow: 1;
    border: solid 5px orange;
  }
`

function Controls(props) {
  return (
    <StyledControls>
      <StyledSizeChange>
        <button onClick={props.decrement}>Decrement</button>
        <button onClick={props.increment}>Increment</button>
      </StyledSizeChange>
      <StyledAlgorithm>
        <button onClick={props.reset}>Reset</button>
        <button onClick={props.decrement}>Solve</button>
        <div>Set the speed</div>
        <StyledTODO>TODO make optimal step</StyledTODO>
        <StyledTODO>TODO toggle visuals</StyledTODO>
      </StyledAlgorithm>
    </StyledControls>
  )
}

export default Controls;
