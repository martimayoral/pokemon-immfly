import { Outlet } from 'react-router-dom'
import GlobalStyle from '../styles/globalStyle'

const ContainerLayout = () => {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  )
}

export default ContainerLayout
