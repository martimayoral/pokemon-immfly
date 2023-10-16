import AbsoluteCenteredDiv from '../../components/Styled/AbsoluteCenteredDiv'

const ErrorPage = ({ children }) => {
  return (
    <AbsoluteCenteredDiv>
      <h2>{children}</h2>
    </AbsoluteCenteredDiv>
  )
}

export default ErrorPage
