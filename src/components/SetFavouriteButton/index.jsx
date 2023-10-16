import styled from 'styled-components'
import StarOutline from './../../assets/star-outline.png'
import StarFilled from './../../assets/star-filled.png'
import { useContext } from 'react'
import FavouritePokemonContext from '../../contexts/favouritePokemonContext'

const IconButton = styled.button`
  background: none;
  padding: 0;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;

  &:hover {
    filter: opacity(.5)
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  filter: brightness(.3);
`

const SetFavouriteButton = ({ pokemonName, className }) => {
  const { favouriteList, setFavouriteList } = useContext(FavouritePokemonContext)

  const handleClick = (e) => {
    e.stopPropagation()
    setFavouriteList(list => {
      if (list.includes(pokemonName)) {
        list.splice(list.indexOf(pokemonName), 1)
        return [...list]
      } else {
        list.push(pokemonName)
        return [...list]
      }
    })
  }

  const isFav = favouriteList.includes(pokemonName)

  return (
    <IconButton className={className} onClick={handleClick}>
      <Image src={isFav ? StarFilled : StarOutline} />
    </IconButton>
  )
}

export default SetFavouriteButton
