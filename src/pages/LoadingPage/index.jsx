import React from 'react'
import styled, { keyframes } from 'styled-components'
import AbsoluteCenteredDiv from '../../components/Styled/AbsoluteCenteredDiv'

const rotate = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.5);
  }

  100% {
    transform: rotate(1);
  }
`

const RowFlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const AnimatedDot = styled.div`
  width: 30px;
  height: 30px;
  margin: 15px;
  border-radius: 25px;
  background-color: gray;
  animation: ${rotate} 2s ease-in-out infinite;
  animation-delay: ${props => props.$delay};
`

const LoadingPage = () => {
  return (
    <AbsoluteCenteredDiv>
      <h2>Loading...</h2>
      <RowFlexDiv>
        <AnimatedDot $delay='0s' />
        <AnimatedDot $delay='.25s' />
        <AnimatedDot $delay='.5s' />
      </RowFlexDiv>
    </AbsoluteCenteredDiv>
  )
}

export default LoadingPage
