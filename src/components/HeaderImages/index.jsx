import styled from 'styled-components'
import PokemonLogoImg from './../../assets/pokemon-logo.png'
import ImmflyLogoImg from './../../assets/immfly-logo.png'
import { deviceSizes } from '../../styles/variables'

const ImmflyLogo = styled.img`
  height: 40px;
  margin-top: 30px;

  @media ${deviceSizes.mobile} {
    margin-top: 40px;
  }

  @media ${deviceSizes.tablet} {
    margin-top: 60px;
  }
`

const PokemonLogo = styled.img`
  margin: 15px;
  height: 100px;
`

const HeaderImages = () => {
  return (
    <>
      <ImmflyLogo src={ImmflyLogoImg} />
      <PokemonLogo src={PokemonLogoImg} />
    </>
  )
}

export default HeaderImages
