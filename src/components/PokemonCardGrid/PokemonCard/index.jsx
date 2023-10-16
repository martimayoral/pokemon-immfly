import styled from 'styled-components'
import { theme } from '../../../styles/theme'
import { deviceSizes } from '../../../styles/variables'
import { useNavigate } from 'react-router-dom'
import SetFavouriteButton from '../../SetFavouriteButton'

const PokemonCardDiv = styled.div`
  background-color: ${theme.cardsColor};
  height: 120px;
  margin-bottom: 10px;
  border: 1px solid ${theme.cardsContrast};
  border-radius: 5px;
  color: ${theme.cardsContrast};
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  // 1 card per row: 100% - 2% margins - 2px borders
  flex-basis: calc(98% - 2px);
  margin-right: 1%;
  margin-left: 1%;

  &:hover{
    background-color: ${theme.cardsHoverColor};
    cursor: pointer;
  }

  // 2 cards per row: 50% - 2% margins - 2px borders
  @media ${deviceSizes.mobile} {
    flex-basis: calc(48% - 2px);
    margin-right: 1%;
    margin-left: 1%;
  }

  // 3 cards per row: 33% - 4% margins - 2px borders
  @media ${deviceSizes.tablet} {
    flex-basis: calc(29.3% - 2px);
    margin-right: 2%;
    margin-left: 2%;
  }
`

const ImgContainer = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const PokemonHeader = styled.span`
  text-transform: capitalize;
`

const SetFavouriteButtonStyled = styled(SetFavouriteButton)`
  position: absolute;
  top: 10px;
  right: 10px;
`

const PokemonCard = ({ pokemonName }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/pokemon/' + pokemonName)
  }

  return (
    <PokemonCardDiv onClick={handleClick}>
      <SetFavouriteButtonStyled pokemonName={pokemonName} />
      <ImgContainer>
        <img alt={pokemonName + ' image'} src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemonName}.gif`} />
      </ImgContainer>
      <PokemonHeader>{pokemonName}</PokemonHeader>
    </PokemonCardDiv>
  )
}

export default PokemonCard
