import styled from 'styled-components'

const AbsoluteCenteredDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default AbsoluteCenteredDiv
