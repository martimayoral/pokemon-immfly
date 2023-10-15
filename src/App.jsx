import styled from 'styled-components'
import PokemonLogo from './assets/pokemon-logo.png'
import ImflyLogo from './assets/immfly-logo.png'

const H1Styled = styled.h1`
    color: #3ff;
`

const App = () => (
  <div>
    <H1Styled>Pokemon</H1Styled>
    <img src={ImflyLogo} />
    <img src={PokemonLogo} />
  </div>
)

export default App
