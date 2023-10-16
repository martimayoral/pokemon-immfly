import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import GlobalStyle from '../styles/globalStyle'

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContainerLayout = () => {
  return (
    <>
      <GlobalStyle />
      <ContainerDiv>
        <Outlet />
      </ContainerDiv>
    </>
  )
}

export default ContainerLayout
