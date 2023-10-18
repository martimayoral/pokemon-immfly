import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import HeaderImages from '../../components/HeaderImages'
import PokemonGrid from '../../components/PokemonCardGrid/PokemonGrid'
import FavouritePokemonContext from '../../contexts/favouritePokemonContext'
import HeaderContent from '../../components/Styled/HeaderContent'
import MainContent from '../../components/Styled/MainContent'

const Favourites = () => {
  const { favouriteList } = useContext(FavouritePokemonContext)

  return (
    <>
      <HeaderContent>
        <HeaderImages />
        <h2>Favourite pokemon</h2>
        <h3>{favouriteList.length} favourite pokemon</h3>
        <h3><Link to='/pokemon'>See all pokemons</Link></h3>
      </HeaderContent>
      <MainContent>
        <PokemonGrid pokemonNameList={favouriteList} />
      </MainContent>
    </>
  )
}

export default Favourites
