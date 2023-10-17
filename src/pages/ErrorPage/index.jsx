import React from 'react'
import AbsoluteCenteredDiv from '../../components/Styled/AbsoluteCenteredDiv'
import { Link } from 'react-router-dom'

const ErrorPage = ({ children }) => {
  return (
    <AbsoluteCenteredDiv>
      <h2>{children}</h2>
      <Link to='/pokemon'><span>Go back to the main page</span></Link>
    </AbsoluteCenteredDiv>
  )
}

export default ErrorPage
